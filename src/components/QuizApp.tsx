import React, { useState } from "react";
import "../styles/QuizApp.css";
import { type QuizQuestion, retrieveQuizQuestions } from "../data/questions.ts";
import { QuizScoreDisplay } from "./QuizScoreDisplay.tsx";
import { AnswerExplanation } from "./AnswerExplanation.tsx";
import { AnswerOption } from "./AnswerOption.tsx";
import {QuizProgress} from "./QuizProgress.tsx";

// non-negative values correspond to question index
const QUIZ_OPENING_STATE = -1;
const QUIZ_CLOSING_STATE = -2;

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState<number>(QUIZ_OPENING_STATE);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [questions, setQuestion] = useState<QuizQuestion[]>([]);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setQuestion(retrieveQuizQuestions());
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);

    if (selectedAnswer === questions[currentQuestionIndex].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(QUIZ_CLOSING_STATE); // End quiz
    }
  };

  if (currentQuestionIndex === QUIZ_OPENING_STATE) {
    return (
      <div className="quiz-container">
        <p>
          Welcome, Lobstar! This quiz is designed to enhance your knowledge of
          Ultimate Frisbee and help you grow as a valued member of the Lobstars
          team. Test your skills, learn something new, and aim for the stars.
          Good luck!
        </p>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (currentQuestionIndex === QUIZ_CLOSING_STATE) {
    return (
      <div className="quiz-container">
        <h2 className="text-4xl">Quiz Completed!</h2>

        <QuizScoreDisplay score={score} maximumScore={questions.length} />

        <button onClick={startQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="pb-4" id="container-for-progress-bar">
        <QuizProgress currentValue={currentQuestionIndex} maxValue={questions.length} />
      </div>

      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.answers.map((answer: string, index: number) => (
          <AnswerOption
            answer={answer}
            index={index}
            isCorrect={index === currentQuestion.correctIndex}
            isSelected={index === selectedAnswer}
            isSubmitted={isSubmitted}
            stateHook={setSelectedAnswer}
          />
        ))}
      </div>
      {isSubmitted ? (
        <div>
          <p>
            {selectedAnswer === currentQuestion.correctIndex
              ? "Correct!"
              : "Incorrect!"}
          </p>

          <AnswerExplanation quizQuestion={currentQuestion} />

          <button className={"question-change-btn"} onClick={nextQuestion}>
            {currentQuestionIndex < questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        </div>
      ) : (
        <button
          className={"submit-btn"}
          onClick={submitAnswer}
          disabled={selectedAnswer === null}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuizApp;
