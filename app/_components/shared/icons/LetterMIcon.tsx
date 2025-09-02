import React from 'react';

interface LetterMIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export const LetterMIcon: React.FC<LetterMIconProps> = ({
  width = 37,
  height = 36,
  fill = "white",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 37 36"
      fill="none"
      className={className}
    >
      <path
        d="M0.078125 35.577V0.0859375H6.44575L18.5188 23.7128L30.5409 0.0859375H36.9085V35.577H31.5087V9.36432L20.6074 30.5069H16.4302L5.47787 9.41502V35.577H0.078125Z"
        fill={fill}
      />
    </svg>
  );
};