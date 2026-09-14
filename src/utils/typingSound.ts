/**
 * Ultra-Soft & Mellow Global Typing Sound Engine for MORAL.EXE
 * 
 * Features:
 * - Extra soft & pillowy sound: Warm low-frequency sine resonance (260Hz -> 165Hz) with a gentle 3ms attack curve.
 * - Backspace silenced: No sound plays when pressing Backspace or Delete.
 * - Turned down volume: Low, subtle, and comfortable volume (gain: 0.15).
 * - 100% uniform & unbroken: Exact same consistent soft tap for every typed character with zero breaks or stutters.
 */

class TypingSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private isInitialized: boolean = false;

  // Single consistent AudioBuffer used uniformly for typed characters
  private typingBuffer: AudioBuffer | null = null;

  /**
   * Initializes the AudioContext eagerly and primes the hardware pipeline.
   */
  private getAudioContext(): AudioContext | null {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }

    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (!AudioCtxClass) return null;

      // Low latency mode
      this.ctx = new AudioCtxClass({ latencyHint: 'interactive' });

      // Transparent compressor for smooth limiting
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-6.0, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(6.0, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(3.0, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.004, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.04, this.ctx.currentTime);

      // Master Gain: Turned down further to a very soft, quiet, subtle level
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.15, this.ctx.currentTime);

      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      // Pre-synthesize the ultra-soft sound buffer into memory
      this.precomputeBuffer(this.ctx);

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      return this.ctx;
    } catch {
      return null;
    }
  }

  /**
   * Pre-renders an ultra-soft, warm, cushioned tap into a Float32 PCM AudioBuffer.
   * Completely eliminates sharp clicks, noise bursts, or high frequencies.
   */
  private precomputeBuffer(ctx: AudioContext): void {
    const sampleRate = ctx.sampleRate || 44100;
    const duration = 0.024; // 24ms: compact, soft, and gentle
    const totalSamples = Math.ceil(sampleRate * duration);
    const buffer = ctx.createBuffer(1, totalSamples, sampleRate);
    const data = buffer.getChannelData(0);

    const baseFreq = 260;
    const endFreq = 165;
    const cushionFreq = 380;

    let phaseBody = 0;
    let phaseCushion = 0;
    let phaseLow = 0;

    for (let i = 0; i < totalSamples; i++) {
      const t = i / sampleRate;

      // 3ms smooth sinusoidal attack curve for an ultra-soft onset (no click/pop)
      const attack = t < 0.003 ? Math.sin((t / 0.003) * (Math.PI / 2)) : 1.0;
      // Gentle exponential decay down to zero
      const decay = Math.exp(-t * 155);
      const env = attack * decay;

      // Soft low-mid cushion resonance (warm 380Hz)
      const cushionDecay = Math.exp(-t * 260);
      phaseCushion += (2 * Math.PI * cushionFreq) / sampleRate;
      const cushion = Math.sin(phaseCushion) * cushionDecay * 0.22;

      // Warm Body Tap (pure smooth sine glide in low frequencies)
      const curFreq = baseFreq - (t / duration) * (baseFreq - endFreq);
      phaseBody += (2 * Math.PI * curFreq) / sampleRate;
      const body = Math.sin(phaseBody) * 0.48;

      // Soft Sub Warmth (gentle low anchor)
      const lowDecay = Math.exp(-t * 160);
      const curLow = 100 - (t / duration) * 40;
      phaseLow += (2 * Math.PI * curLow) / sampleRate;
      const low = Math.sin(phaseLow) * lowDecay * 0.18;

      // Soft rounded output
      data[i] = (cushion + body + low) * env * 0.65;
    }

    this.typingBuffer = buffer;
  }

  /**
   * Plays the exact same soft typing sound immediately on each keystroke.
   */
  public play(): void {
    const ctx = this.getAudioContext();
    if (!ctx || !this.compressor || !this.typingBuffer) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const source = ctx.createBufferSource();
    source.buffer = this.typingBuffer;
    source.connect(this.compressor);
    source.start(0);
  }

  public init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    // Eagerly instantiate AudioContext and precompute buffer
    this.getAudioContext();

    // Prime/resume context on any user interaction
    const primeAudio = () => {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    };

    window.addEventListener('pointerdown', primeAudio, { passive: true, capture: true });
    window.addEventListener('touchstart', primeAudio, { passive: true, capture: true });
    window.addEventListener('focusin', primeAudio, { passive: true, capture: true });

    let handledByKeyDown = false;

    // 1. Global Keydown Handler
    window.addEventListener(
      'keydown',
      (e: KeyboardEvent) => {
        const target = e.target as HTMLElement | null;
        if (!isEditableElement(target)) return;

        // Ignore modifier keys / keyboard shortcuts (e.g. Ctrl+C, Cmd+V, Alt+Tab)
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        // Do NOT play sound for Backspace or Delete
        if (e.key === 'Backspace' || e.key === 'Delete') {
          return;
        }

        // Check if key is a typing character, space, or enter
        const isTyping = e.key === 'Enter' || e.key.length === 1;

        if (isTyping) {
          // If this input has a sound limit (configured strictly for the 2 specified input boxes)
          const maxSoundAttr = target.getAttribute('data-max-sound');
          if (maxSoundAttr && target instanceof HTMLInputElement) {
            const maxChars = parseInt(maxSoundAttr, 10);
            if (!isNaN(maxChars)) {
              const currentLen = target.value.length;
              const hasSelection =
                target.selectionStart !== null &&
                target.selectionEnd !== null &&
                target.selectionStart !== target.selectionEnd;

              // When the required letters are complete and no text is selected to replace, do NOT play sound
              if (currentLen >= maxChars && !hasSelection && e.key !== 'Enter') {
                return;
              }
            }
          }

          handledByKeyDown = true;
          queueMicrotask(() => {
            handledByKeyDown = false;
          });

          this.play();
        }
      },
      { capture: true, passive: true }
    );

    // 2. Global Input Handler (Fallback for mobile virtual keyboards & IME compositions)
    window.addEventListener(
      'input',
      (e: Event) => {
        if (handledByKeyDown) return;

        const target = e.target as HTMLElement | null;
        if (!isEditableElement(target)) return;

        const inputEvent = e as InputEvent;
        const inputType = inputEvent.inputType;

        if (inputType) {
          // Play sound only on character entry, not on deletion / backspace
          if (
            inputType === 'insertText' ||
            inputType === 'insertCompositionText' ||
            inputType === 'insertFromPaste' ||
            inputType === 'insertFromDrop' ||
            inputType === 'insertLineBreak' ||
            inputType === 'insertParagraph'
          ) {
            const maxSoundAttr = target.getAttribute('data-max-sound');
            if (maxSoundAttr && target instanceof HTMLInputElement) {
              const maxChars = parseInt(maxSoundAttr, 10);
              if (!isNaN(maxChars) && target.value.length > maxChars) {
                return;
              }
            }
            this.play();
          }
        }
      },
      { capture: true, passive: true }
    );
  }
}

/**
 * Checks if the given DOM element is an editable text input or textarea
 */
function isEditableElement(target: HTMLElement | null): boolean {
  if (!target) return false;

  const tagName = target.tagName;
  if (tagName === 'TEXTAREA') {
    const el = target as HTMLTextAreaElement;
    return !el.readOnly && !el.disabled;
  }

  if (tagName === 'INPUT') {
    const el = target as HTMLInputElement;
    if (el.readOnly || el.disabled) return false;

    const type = (el.type || 'text').toLowerCase();
    const nonTypingTypes = [
      'button',
      'checkbox',
      'radio',
      'range',
      'color',
      'file',
      'submit',
      'reset',
      'image',
      'hidden',
    ];
    return !nonTypingTypes.includes(type);
  }

  if (target.isContentEditable) {
    return true;
  }

  return false;
}

export const typingSound = new TypingSoundEngine();

export function initGlobalTypingSound(): void {
  typingSound.init();
}
