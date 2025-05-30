import React from "react";

type ProgressProps = {
  currentValue: number;
  maxValue: number;
};

export const QuizProgress: React.FC<ProgressProps> = ({
  currentValue,
  maxValue,
}: ProgressProps) => {
  return (
    <div
      className="absolute right-3 top-1 flex items-center justify-end"
      id="progress-bar"
    >
      <label className="pr-1 text-sm" htmlFor="quiz-progress">
        Quiz progress:
      </label>
      <progress id="quiz-progress" max={maxValue} value={currentValue}>
        {`${currentValue}/${maxValue}`}
      </progress>
    </div>
  );
};
