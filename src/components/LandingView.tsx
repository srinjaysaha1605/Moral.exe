import React from 'react';
import { Play, Grid, ShieldAlert, Cpu, Award } from 'lucide-react';

interface LandingViewProps {
  onStartProbe: () => void;
  onOpenCatalogue: () => void;
  onOpenIntro?: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onStartProbe,
  onOpenCatalogue,
  onOpenIntro,
}) => {
  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-black text-neutral-100 flex items-center justify-center relative select-none py-6 sm:py-10 px-4 overflow-x-hidden">
      {/* Central Clean Minimal Container */}
      <div className="w-full max-w-2xl px-2 sm:px-6 my-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* MORAL.EXE Title / Logo with Doctor Glitch Font */}
        <div
          onClick={onOpenIntro}
          className="cursor-pointer transition-opacity hover:opacity-90 max-w-full"
          title="Click to view intro"
        >
          <h1
            className="font-glitch text-4xl sm:text-6xl md:text-7xl select-none uppercase tracking-wider"
            style={{
              fontFamily: "'Doctor Glitch', 'Rubik Glitch', sans-serif",
              letterSpacing: '0.06em',
              lineHeight: 1.1,
            }}
          >
            <span className="text-white">MORAL.</span>
            <span className="text-[#FF003C]">EXE</span>
          </h1>

          {/* Clean Sharp Flat Subtitle */}
          <p
            className="text-[10px] sm:text-xs md:text-[13px] text-neutral-400 uppercase mt-3 sm:mt-5 tracking-[0.14em] sm:tracking-[0.24em] select-none font-medium max-w-full px-1"
            style={{
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            EXPLORE YOUR MORAL DECISIONS & ETHICAL VALUES
          </p>
        </div>

        {/* Action Controls Section */}
        <div className="w-full max-w-[560px] mt-8 sm:mt-11 flex flex-col items-center">
          {/* Action Buttons Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            {/* START TEST BUTTON */}
            <button
              onClick={() => onStartProbe()}
              className="relative w-full h-[58px] cursor-pointer group flex items-center justify-center transition-transform active:scale-[0.98]"
              aria-label="Start Test"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 260 58"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 16 0 
                     L 244 0 
                     L 260 16 
                     L 260 42 
                     L 253 49 
                     L 241 49 
                     L 235 58 
                     L 16 58 
                     L 0 42 
                     L 0 16 
                     Z"
                  fill="#FF003C"
                  className="transition-colors group-hover:brightness-105"
                />

                <path
                  d="M 32 3 L 16 3 L 3 16 L 3 26"
                  stroke="#000000"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                />
                <line x1="42" y1="0" x2="42" y2="4" stroke="#000000" strokeWidth="2" />
                <line x1="0" y1="34" x2="4" y2="34" stroke="#000000" strokeWidth="2" />

                <line
                  x1="1"
                  y1="40"
                  x2="17"
                  y2="57"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />

                <path
                  d="M 234 3 L 244 3 L 257 16 L 257 24"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <line x1="224" y1="0" x2="224" y2="4" stroke="#000000" strokeWidth="2" />

                <path
                  d="M 235 58 L 241 49 L 253 49 L 260 42"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <line
                  x1="243"
                  y1="54"
                  x2="255"
                  y2="54"
                  stroke="#000000"
                  strokeWidth="2.2"
                />
              </svg>

              <div className="relative z-10 flex items-center justify-center gap-3 px-4">
                <Play className="w-5 h-5 text-black stroke-[2.5] fill-black shrink-0" />
                <span
                  className="text-black text-base sm:text-lg tracking-wider uppercase select-none"
                  style={{
                    fontFamily: "'Chakra Petch', 'Outfit', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  START TEST
                </span>
              </div>
            </button>

            {/* BROWSE TESTS BUTTON */}
            <button
              onClick={onOpenCatalogue}
              className="relative w-full h-[58px] cursor-pointer group flex items-center justify-center bg-black transition-colors hover:bg-[#FF003C]/5 active:scale-[0.98]"
              aria-label="Browse Tests"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 260 58"
                preserveAspectRatio="none"
                fill="none"
              >
                <line x1="44" y1="1" x2="220" y2="1" stroke="#FF003C" strokeWidth="2" />

                <path
                  d="M 230 1 L 244 1 L 259 16 L 259 28"
                  stroke="#FF003C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />

                <line x1="259" y1="32" x2="259" y2="38" stroke="#FF003C" strokeWidth="2" />

                <path
                  d="M 259 42 L 253 49 L 241 49 L 235 57 L 44 57"
                  stroke="#FF003C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <line
                  x1="243"
                  y1="54"
                  x2="255"
                  y2="54"
                  stroke="#FF003C"
                  strokeWidth="2"
                />

                <line
                  x1="18"
                  y1="57"
                  x2="1"
                  y2="40"
                  stroke="#FF003C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />

                <line x1="1" y1="36" x2="1" y2="28" stroke="#FF003C" strokeWidth="2" />

                <path
                  d="M 1 24 L 1 16 L 16 1 L 36 1"
                  stroke="#FF003C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>

              <div className="relative z-10 flex items-center justify-center gap-3 px-4">
                <Grid className="w-5 h-5 text-[#FF003C] stroke-[2.5] shrink-0" />
                <span
                  className="text-white text-base sm:text-lg tracking-wider uppercase select-none"
                  style={{
                    fontFamily: "'Chakra Petch', 'Outfit', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  BROWSE TESTS
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Supporting Feature Information */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 text-left max-w-full">
          {/* Feature 1: INTERACTIVE TESTS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF003C] shrink-0 stroke-[2.2]" />
            <div>
              <div
                className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                INTERACTIVE TESTS
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider mt-1.5 leading-none font-medium">
                DYNAMIC SCENARIOS
              </div>
            </div>
          </div>

          <div className="hidden sm:block h-7 w-px bg-neutral-800 shrink-0" />

          {/* Feature 2: DECISION INSIGHTS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF003C] shrink-0 stroke-[2.2]" />
            <div>
              <div
                className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                DECISION INSIGHTS
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider mt-1.5 leading-none font-medium">
                THOUGHT ANALYSIS
              </div>
            </div>
          </div>

          <div className="hidden sm:block h-7 w-px bg-neutral-800 shrink-0" />

          {/* Feature 3: RESULT BADGE */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF003C] shrink-0 stroke-[2.2]" />
            <div>
              <div
                className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                RESULT BADGE
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider mt-1.5 leading-none font-medium">
                SHAREABLE SUMMARY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


