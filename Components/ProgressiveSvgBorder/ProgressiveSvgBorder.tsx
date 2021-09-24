import { useEffect, useRef, useState } from "react";

interface ProgressiveSvgBorderProps {
  size: number;
  progress: number;
  strokeWidth: number;
}

const ProgressiveSvgBorder = ({
  size,
  progress,
  strokeWidth,
}: ProgressiveSvgBorderProps) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <svg className="svg" width={size} height={size}>
      <circle
        ref={circleRef}
        className="svg-circle"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default ProgressiveSvgBorder;
