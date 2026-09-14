import React from 'react';

interface IntroPosterProps {
  className?: string;
  onClick?: () => void;
  titleText?: string;
  taglineText?: string;
  titleCharCount?: number;
  taglineCharCount?: number;
  titleProgress?: number;
  taglineProgress?: number;
  showTitleCursor?: boolean;
  showTaglineCursor?: boolean;
}

const FULL_TITLE = 'MORAL.EXE';
const FULL_TAGLINE = 'EXPLORE YOUR MORAL DECISIONS & ETHICAL VALUES.';

const getCharOpacity = (progress: number, index: number, total: number, fadeRatio: number) => {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;
  const start = total > 1 ? (index * (1 - fadeRatio)) / (total - 1) : 0;
  if (progress <= start) return 0;
  if (progress >= start + fadeRatio) return 1;
  const t = (progress - start) / fadeRatio;
  return t * t * (3 - 2 * t);
};

export const IntroPoster: React.FC<IntroPosterProps> = ({
  className = '',
  onClick,
  titleText = FULL_TITLE,
  taglineText = FULL_TAGLINE,
  titleCharCount,
  taglineCharCount,
  titleProgress,
  taglineProgress,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none aspect-square w-full max-w-[620px] mx-auto bg-black flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MORAL.EXE: Explore Your Moral Decisions & Ethical Values."
      >
        {/* Pure Deep Black Canvas */}
        <rect width="1000" height="1000" fill="#000000" />

        {/* Main ME Monogram (Centered Slanted Cybernetic Esports Letterform) */}
        <g id="me-monogram" transform="translate(500, 385) scale(0.84)">
          {/* Red "E" (Geometric Rounded Stadium, Slanted Italic, Behind M) */}
          <g transform="translate(68, 65) skewX(-17)">
            <rect
              x="-105"
              y="-155"
              width="210"
              height="310"
              rx="95"
              ry="95"
              fill="#000000"
              stroke="#FF003C"
              strokeWidth="32"
              strokeLinejoin="round"
            />
          </g>

          {/* White "M" (Sharp Angular Esports Letterform, Slanted Italic, In Front) */}
          <g transform="translate(-85, -60) skewX(-17)">
            <path
              d="M -110, 175
                 L -110, -170
                 L -40, -170
                 L 0, -50
                 L 40, -170
                 L 110, -170
                 L 110, 175
                 L 45, 175
                 L 45, 0
                 L 10, 110
                 L -10, 110
                 L -45, 0
                 L -45, 175
                 Z"
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth="28"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
            />
          </g>
        </g>

        {/* Title Text: MORAL.EXE (Using exact Doctor Glitch font/style as LandingView) */}
        <g transform="translate(500, 730)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily="'Doctor Glitch', 'Rubik Glitch', sans-serif"
            fontSize="76"
            letterSpacing="5"
          >
            {titleProgress !== undefined
              ? FULL_TITLE.split('').map((char, index) => {
                  const color = index < 6 ? '#FFFFFF' : '#FF003C';
                  const opacity = getCharOpacity(titleProgress, index, FULL_TITLE.length, 0.16);
                  return (
                    <tspan
                      key={index}
                      fill={color}
                      opacity={Number(opacity.toFixed(3))}
                    >
                      {char}
                    </tspan>
                  );
                })
              : titleCharCount !== undefined
              ? FULL_TITLE.split('').map((char, index) => {
                  const color = index < 6 ? '#FFFFFF' : '#FF003C';
                  return (
                    <tspan
                      key={index}
                      fill={index < titleCharCount ? color : 'transparent'}
                      opacity={index < titleCharCount ? 1 : 0}
                    >
                      {char}
                    </tspan>
                  );
                })
              : (
                  <>
                    <tspan fill="#FFFFFF">MORAL.</tspan>
                    <tspan fill="#FF003C">EXE</tspan>
                  </>
                )}
          </text>
        </g>

        {/* Tagline */}
        <g transform="translate(500, 792)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#FF003C"
            fontFamily="'Outfit', 'Montserrat', system-ui, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="0.6"
          >
            {taglineProgress !== undefined
              ? FULL_TAGLINE.split('').map((char, index) => {
                  const opacity = getCharOpacity(taglineProgress, index, FULL_TAGLINE.length, 0.05);
                  return (
                    <tspan
                      key={index}
                      fill="#FF003C"
                      opacity={Number(opacity.toFixed(3))}
                    >
                      {char}
                    </tspan>
                  );
                })
              : taglineCharCount !== undefined
              ? FULL_TAGLINE.split('').map((char, index) => (
                  <tspan
                    key={index}
                    fill={index < taglineCharCount ? '#FF003C' : 'transparent'}
                    opacity={index < taglineCharCount ? 1 : 0}
                  >
                    {char}
                  </tspan>
                ))
              : taglineText}
          </text>
        </g>
      </svg>
    </div>
  );
};

