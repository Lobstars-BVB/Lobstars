import React, { useState } from "react";
import "../styles/QuizApp.css";
import { type Question, retrieveQuizQuestions } from "../data/questions.ts";

// non-negative values correspond to question index
const QUIZ_OPENING_STATE = -1;
const QUIZ_CLOSING_STATE = -2;

const closingStatement = (score: number): string => {
  if (score <= 2)
    return "Don’t worry, Rookie Lobstar! Every Lobstar starts somewhere, and you’re just getting your feet wet. Keep learning, practicing, and throwing! You’ll be lighting up the field in no time.";

  if (score <= 4)
    return "Getting there, Aspiring Lobstar! You’ve made some good catches here. Dive back into the playbook and sharpen your game—you’re on the way to greatness!";

  if (score <= 6)
    return "Nice one, Steady Lobstar! You’re showing solid skills and knowledge out there. A few more reps and you’ll be skying for the disc like a pro.";

  if (score <= 8)
    return "Impressive, Rising Lobstar! You’ve clearly got a good grip on the game. Keep hustling and aiming for the stars—your ultimate future looks bright.";

  return "Outstanding, All-Star Lobstar! You’ve nailed it like a perfect hammer throw. Your knowledge is championship material—just like our Lobstars spirit on the field.";
};



const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState<number>(QUIZ_OPENING_STATE);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [questions, setQuestion] = useState<Question[]>([]);

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
        <p>Welcome, Lobstar! This quiz is designed to enhance your knowledge of Ultimate Frisbee and help you grow as a valued member of the Lobstars team. Test your skills, learn something new, and aim for the stars. Good luck!</p>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (currentQuestionIndex === QUIZ_CLOSING_STATE) {
    return (
      <div className="quiz-container">
        <h2 className="text-4xl">Quiz Completed!</h2>
        <p id="score">
          Your score: {score} / {questions.length}
        </p>
        <p>{closingStatement(score)}</p>
        <button onClick={startQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
      <div className="quiz-container">

        <div className="pb-4" id="container-for-progress-bar">
          <div className="absolute top-1 right-3" id="progress-bar">
            <label className="text-sm" htmlFor="quiz-progress">Quiz progress: </label>
            <progress id="quiz-progress" max={questions.length} value={currentQuestionIndex}> </progress>
          </div>
        </div>

        <h2>{currentQuestion.question}</h2>
        <div>
          {currentQuestion.answers.map((answer: string, index: number) => (
              <button
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  className={`answer-btn \
${isSubmitted && index === currentQuestion.correctIndex ? "correct" : ""} \
${isSubmitted && index === selectedAnswer && index !== currentQuestion.correctIndex ? "incorrect" : ""} \
${!isSubmitted && index === selectedAnswer ? "selected" : ""}\
`}
                  disabled={isSubmitted}
              >
                {answer}
              </button>
          ))}
        </div>
        {isSubmitted ? (
            <div>
              <p>
                {selectedAnswer === currentQuestion.correctIndex
                    ? "Correct!"
                    : "Incorrect!"}
              </p>
              <p>{currentQuestion.explanation}</p>
              <p>
                <small>
                  Reference:{" "}
                  <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={currentQuestion.reference.link}
                  >
                    {" "}
                    {currentQuestion.reference.sourceName}
                  </a>{" "}
                  ({currentQuestion.reference.locator})
                </small>
              </p>
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
