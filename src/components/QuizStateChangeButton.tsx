import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const QuizStateChangeButton: React.FC<Props> = ({
  text,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={"max-w-40"}
      onClick={onClick}
      disabled={disabled === undefined ? false : disabled}
    >
      {text}
    </button>
  );
};
