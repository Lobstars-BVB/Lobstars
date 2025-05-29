import React from "react";

type QuizScore = {
  score: number;
  maximumScore: number;
};

const closingStatement = (score: number, maximumScore: number): string => {
  if (score <= 0.2 * maximumScore)
    return "Don’t worry, Rookie Lobstar! Every Lobstar starts somewhere, and you’re just getting your feet wet. Keep learning, practicing, and throwing! You’ll be lighting up the field in no time.";

  if (score <= 0.4 * maximumScore)
    return "Getting there, Aspiring Lobstar! You’ve made some good catches here. Dive back into the playbook and sharpen your game—you’re on the way to greatness!";

  if (score <= 0.6 * maximumScore)
    return "Nice one, Steady Lobstar! You’re showing solid skills and knowledge out there. A few more reps and you’ll be skying for the disc like a pro.";

  if (score <= 0.8 * maximumScore)
    return "Impressive, Rising Lobstar! You’ve clearly got a good grip on the game. Keep hustling and aiming for the stars—your ultimate future looks bright.";

  return "Outstanding, All-Star Lobstar! You’ve nailed it like a perfect hammer throw. Your knowledge is championship material—just like our Lobstars spirit on the field.";
};

export const QuizScoreDisplay: React.FC<QuizScore> = ({
  score,
  maximumScore,
}: QuizScore) => {
  return (
    <>
      <p className="text-xl font-semibold text-neon-pink-dark">
        Your score: {score} / {maximumScore}
      </p>
      <p>{closingStatement(score, maximumScore)}</p>
    </>
  );
};
