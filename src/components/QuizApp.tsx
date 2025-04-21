import React, { useState } from "react";
import "../styles/QuizApp.css";
import { getQuestions, type QuizQuestion } from "../data/questions.ts";
import { QuizScoreDisplay } from "./QuizScoreDisplay.tsx";
import { AnswerExplanation } from "./AnswerExplanation.tsx";
import { AnswerOption } from "./AnswerOption.tsx";
import { QuizProgress } from "./QuizProgress.tsx";
import { QuizStateChangeButton } from "./QuizStateChangeButton.tsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ImageWithFallback } from "./ImageWithFallback.tsx";

// non-negative values correspond to question indices
const QUIZ_OPENING_STATE = -1;
const QUIZ_CLOSING_STATE = -2;

const MINIMUM_DISPLAY_TIME = 1900; // for minimum time to show loading message

const loadingMessages = [
  "Warming up the disc… Get ready to huck some knowledge!",
  "Spinning up the quiz like a perfect forehand flick!",
  "Chilly waiting? Just like a good reset—quiz incoming!",
  "Catching the signal… Stay in the zone, Lobstar!",
  "Setting up the perfect assist… Quiz coming your way!",
];

const errorMessages = [
  "Turnover! Something went wrong—let’s try again!",
  "Out of bounds! Refresh and get back in play.",
  "We dropped the disc! Give it another shot.",
  "Stall 9… stall 10… Oops! Try reloading the quiz.",
  "Fumbled the pull—let’s reset and try again!",
];

const getRandomMessage = (messages: string[]) =>
  messages[Math.floor(Math.random() * messages.length)];

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState<number>(QUIZ_OPENING_STATE);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [loadingMessage, setLoadingMessage] = useState<string>("Loading…");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const preloadImages = (questions: QuizQuestion[]) => {
    questions.forEach((q: QuizQuestion) => {
      if (q.image?.url) {
        const img = new Image();
        img.src = q.image.url;
      }
    });
  };

  const {
    data: questions,
    error,
    refetch,
  } = useQuery({
    queryKey: ["quizQuestions"],
    queryFn: getQuestions,
    enabled: false, // prevent auto-fetching on mount
  });
  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);

    setLoadingMessage(getRandomMessage(loadingMessages)); // it's triggered on every quiz start but not on every re-render
    setShowLoading(true);

    // prevent showing the old question before getting the new ones
    queryClient.removeQueries({ queryKey: ["quizQuestions"], exact: true });

    const loadStartTime = Date.now();
    refetch().finally(() => {
      if (questions) preloadImages(questions);

      const elapsedTime = Date.now() - loadStartTime;
      const remainingTime = Math.max(MINIMUM_DISPLAY_TIME - elapsedTime, 0);

      setTimeout(() => {
        setShowLoading(false);
      }, remainingTime); // to ensure loading message is readable if fetching too fast
    });
  };

  if (currentQuestionIndex === QUIZ_OPENING_STATE) {
    return (
      <div className="quiz-container flex flex-col items-center">
        <p>
          Welcome, Lobstar! This quiz is designed to enhance your knowledge of
          Ultimate Frisbee and help you grow as a valued member of the Lobstars
          team. Test your skills, learn something new, and aim for the stars.
          Good luck!
        </p>
        <QuizStateChangeButton text={"Start Quiz"} onClick={startQuiz} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-container flex flex-col items-center">
        <p>{getRandomMessage(errorMessages)}</p>
        <QuizStateChangeButton text={"Retry"} onClick={startQuiz} />
      </div>
    );
  }

  if (showLoading || !questions) {
    // ensure questions is defined
    return (
      <div className="quiz-container flex flex-col items-center">
        <p>{loadingMessage}</p>
      </div>
    );
  }

  if (currentQuestionIndex === QUIZ_CLOSING_STATE) {
    return (
      <div className="quiz-container relative flex flex-col items-center">
        <h2 className="text-4xl">Quiz Completed!</h2>
        <QuizScoreDisplay score={score} maximumScore={questions.length} />
        <QuizStateChangeButton text={"Restart Quiz"} onClick={startQuiz} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/UYH15pZAPwdEPQAs5"
          className="absolute bottom-1 right-2 font-bold"
        >
          Feedback
        </a>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
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

  return (
    <div className="quiz-container">
      <div className="pb-6" id="container-for-progress-bar">
        <QuizProgress
          currentValue={currentQuestionIndex}
          maxValue={questions.length}
        />
      </div>

      <h2>{currentQuestion.question}</h2>
      {currentQuestion.image && (
        <ImageWithFallback
          src={currentQuestion.image.url}
          alt={currentQuestion.image.alt}
        />
      )}

      <div>
        {currentQuestion.answers.map((answer: string, index: number) => (
          <AnswerOption
            key={answer}
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
        <div className="flex flex-col items-center">
          <AnswerExplanation
            quizQuestion={currentQuestion}
            isCorrect={selectedAnswer === currentQuestion.correctIndex}
          />

          <QuizStateChangeButton
            text={
              currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Finish Quiz"
            }
            onClick={nextQuestion}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="explanation"></div>

          <QuizStateChangeButton
            text={"Submit"}
            onClick={submitAnswer}
            disabled={selectedAnswer === null}
          />
        </div>
      )}
    </div>
  );
};

export default QuizApp;
