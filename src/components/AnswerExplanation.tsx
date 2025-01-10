import React from "react";
import type {QuizQuestion} from "../data/questions.ts";

interface QuizQuestionProps {
    quizQuestion: QuizQuestion;
}

export const AnswerExplanation: React.FC<QuizQuestionProps> = ({ quizQuestion }: QuizQuestionProps) => {
    return (
        <>
            <p>{quizQuestion.explanation}</p>
            <p>
                <small>
                    Reference:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={quizQuestion.reference.link}
                    >
                        {" "}
                        {quizQuestion.reference.sourceName}
                    </a>{" "}
                    ({quizQuestion.reference.locator})
                </small>
            </p>
        </>
    )
};