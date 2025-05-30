import React from "react";
import type { QuizQuestion } from "../data/questions.ts";

interface QuizQuestionProps {
  quizQuestion: QuizQuestion;
  isCorrect: boolean;
}

export const AnswerExplanation: React.FC<QuizQuestionProps> = ({
  quizQuestion,
  isCorrect,
}: QuizQuestionProps) => {
  return (
    <div>
      <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
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
    </div>
  );
};
