import React, { useEffect, useState, useRef } from 'react';
import { IntroPoster } from './IntroPoster';

interface IntroScreenViewProps {
  onEnter: () => void;
}

const TARGET_TITLE = 'MORAL.EXE';
const TARGET_TAGLINE = 'EXPLORE YOUR MORAL DECISIONS & ETHICAL VALUES.';

// Total Intro Duration: around 3 seconds (~2.85s)
// 1. Brief start pause: 200ms
// 2. Type "MORAL.EXE" (~0.6s): 600ms
// 3. Pause before tagline: 250ms
// 4. Type tagline (~1.5s): 1500ms
// 5. Wait ~0.2s: 200ms
// 6. Automatically transition to Page 2
const START_DELAY = 200;
const TITLE_DURATION = 600; // ~0.6s
const TITLE_PAUSE = 250;
const TAGLINE_DURATION = 1500; // ~1.5s
const WAIT_AFTER_FINISH = 200; // ~0.2s

const TITLE_END = START_DELAY + TITLE_DURATION; // 800ms
const TAGLINE_START = TITLE_END + TITLE_PAUSE; // 1050ms
const TAGLINE_END = TAGLINE_START + TAGLINE_DURATION; // 2550ms
const TRANSITION_TIME = TAGLINE_END + WAIT_AFTER_FINISH; // 2750ms

export const IntroScreenView: React.FC<IntroScreenViewProps> = ({ onEnter }) => {
  const [titleProgress, setTitleProgress] = useState(0);
  const [taglineProgress, setTaglineProgress] = useState(0);
  const [titleCount, setTitleCount] = useState(0);
  const [taglineCount, setTaglineCount] = useState(0);

  const onEnterRef = useRef(onEnter);
  onEnterRef.current = onEnter;
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;

    const triggerEnter = () => {
      if (hasFinishedRef.current) return;
      hasFinishedRef.current = true;
      cancelAnimationFrame(animId);
      onEnterRef.current();
    };

    const step = (timestamp: number) => {
      if (hasFinishedRef.current) return;
      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;

      if (elapsed < START_DELAY) {
        setTitleProgress(0);
        setTaglineProgress(0);
        setTitleCount(0);
        setTaglineCount(0);
      } else if (elapsed < TITLE_END) {
        // Step 1: Smooth continuous typing for "MORAL.EXE" (~0.6s)
        const progress = Math.min(1, Math.max(0, (elapsed - START_DELAY) / TITLE_DURATION));
        setTitleProgress(progress);
        setTaglineProgress(0);
        const count = Math.min(TARGET_TITLE.length, Math.floor(progress * TARGET_TITLE.length) + 1);
        setTitleCount(count);
        setTaglineCount(0);
      } else if (elapsed < TAGLINE_START) {
        // Pause between title and tagline
        setTitleProgress(1);
        setTaglineProgress(0);
        setTitleCount(TARGET_TITLE.length);
        setTaglineCount(0);
      } else if (elapsed < TAGLINE_END) {
        // Step 2: Smooth continuous typing for tagline (~1.5s)
        setTitleProgress(1);
        const progress = Math.min(1, Math.max(0, (elapsed - TAGLINE_START) / TAGLINE_DURATION));
        setTaglineProgress(progress);
        setTitleCount(TARGET_TITLE.length);
        const count = Math.min(TARGET_TAGLINE.length, Math.floor(progress * TARGET_TAGLINE.length) + 1);
        setTaglineCount(count);
      } else if (elapsed < TRANSITION_TIME) {
        // Wait ~0.2s
        setTitleProgress(1);
        setTaglineProgress(1);
        setTitleCount(TARGET_TITLE.length);
        setTaglineCount(TARGET_TAGLINE.length);
      } else {
        // Step 6: Automatically transition to Page 2
        setTitleProgress(1);
        setTaglineProgress(1);
        setTitleCount(TARGET_TITLE.length);
        setTaglineCount(TARGET_TAGLINE.length);
        triggerEnter();
        return;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []); // Run exactly once on mount, automatically transitions upon completion

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none overflow-hidden"
      aria-label="MORAL.EXE Intro"
    >
      {/* 1:1 Square Cinematic Poster Presentation with static logo and typing text */}
      <div className="w-full max-w-[min(90vw,90vh,680px)] aspect-square flex items-center justify-center p-2 sm:p-4">
        <IntroPoster
          titleProgress={titleProgress}
          taglineProgress={taglineProgress}
          titleCharCount={titleCount}
          taglineCharCount={taglineCount}
        />
      </div>
    </div>
  );
};
