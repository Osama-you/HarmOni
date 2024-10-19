import React from 'react';

interface WatchTogetherIconProps extends React.SVGProps<SVGSVGElement> {}

function WatchTogetherIcon(props: WatchTogetherIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      </g>
    </svg>
  );
}

export default WatchTogetherIcon;
