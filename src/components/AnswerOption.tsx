import React from "react";

type Props = {
    answer: string,
    index: number,
    isCorrect: boolean,
    isSelected: boolean,
    isSubmitted: boolean,
    stateHook: (value: React.SetStateAction<number | null>) => void,
};

export const AnswerOption: React.FC<Props> = ({ answer, index, isCorrect, isSelected, isSubmitted, stateHook }: Props) => {

    let buttonClass: string = "answer-btn";

    if (isSubmitted && isCorrect)
        buttonClass += " correct";

    if (isSubmitted && isSelected && !isCorrect)
        buttonClass += " incorrect";

    if (!isSubmitted && isSelected)
        buttonClass += " selected";

    return (
        <button
            key={index}
            onClick={() => stateHook(index)}
            className={buttonClass}
            disabled={isSubmitted}
        >
            {answer}
        </button>
    )
};

