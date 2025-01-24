interface Reference {
  sourceName: string;
  link: string;
  locator: string;
}

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
  reference: Reference;
}

const questions: QuizQuestion[] = [
  {
    question:
      "What is the maximum number of players allowed on the field per team during a point in Ultimate Frisbee?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2,
    explanation: "Each team fields a maximum of seven players during a point.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "5.1",
    },
  },
  {
    question:
      "In Ultimate Frisbee, what is the term used to describe the guiding principle that places the responsibility for fair play on every player?",
    answers: [
      "Code of Conduct",
      "Spirit of the Game",
      "Fair Play Doctrine",
      "Player's Creed",
    ],
    correctIndex: 1,
    explanation:
      '"Spirit of the Game" emphasizes sportsmanship and respect among players.',
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "1.1",
    },
  },
  {
    question: "How many end zones are there on an Ultimate Frisbee field?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 1,
    explanation: "An Ultimate field has two end zones, one at each end.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Figure 1",
    },
  },
  {
    question: "What is the standard depth of each end zone in meters?",
    answers: ["12", "15", "18", "20"],
    correctIndex: 2,
    explanation: "Each end zone is 18 meters deep.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Figure 1",
    },
  },
  {
    question:
      "What action initiates play at the beginning of a point in Ultimate Frisbee?",
    answers: ["Kick-off", "Throw-off", "Pull", "Serve"],
    correctIndex: 2,
    explanation:
      'A "pull" is the throw that starts play at the beginning of each point.',
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "7.1",
    },
  },
  {
    question:
      "How long does a thrower have to release the disc before a stall is called?",
    answers: ["5 seconds", "8 seconds", "10 seconds", "12 seconds"],
    correctIndex: 2,
    explanation:
      "The thrower has 10 seconds to release the disc; this is known as the stall count.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "9.1",
    },
  },
  {
    question:
      "What term describes a change of possession due to an incomplete, intercepted, or out-of-bounds pass?",
    answers: ["Turnover", "Foul", "Violation", "Fault"],
    correctIndex: 0,
    explanation:
      "A turnover occurs when the offense loses possession due to an incomplete, intercepted, or out-of-bounds pass.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Section 13",
    },
  },
  {
    question:
      "In Ultimate Frisbee, which of the following is NOT considered a foul?",
    answers: [
      "Physical contact between opposing players",
      "Running with the disc",
      "Stripping the disc from an opponent's hands",
      "Blocking an opponent's movement",
    ],
    correctIndex: 1,
    explanation: "Running with the disc is a violation, not a foul.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Section 17",
    },
  },
  {
    question:
      "What is the minimum number of players a team must have on the field to continue play?",
    answers: ["4", "5", "6", "7"],
    correctIndex: 1,
    explanation:
      "A team must have at least five players on the field to continue play.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "5.1",
    },
  },
  {
    question:
      "Which of the following is NOT a permissible throw in Ultimate Frisbee?",
    answers: ["Forehand", "Backhand", "Hammer", "Kick pass"],
    correctIndex: 3,
    explanation: "Players must throw the disc; kicking is not allowed.", // more explanation, as not explicitly stated in the reference
    reference: {
      sourceName: "USAU Official Rules of Ultimate", // US rule
      link: "https://usaultimate.org/rules/",
      locator: "16.A", // recheck this statement; the correct answer would be implicit
    },
  },
  {
    question: "What is the term for the defensive player guarding the thrower?",
    answers: ["Marker", "Defender", "Checker", "Blocker"],
    correctIndex: 0,
    explanation:
      "The defensive player guarding the thrower is called the marker.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Page 15",
    },
  },
  {
    question: "How many time-outs is each team allowed per half?",
    answers: ["0", "1", "2", "3"],
    correctIndex: 2,
    explanation: "Each team is allowed two time-outs per half.",
    reference: {
      sourceName: "USAU Official Rules of Ultimate", // US rule
      link: "https://usaultimate.org/rules/",
      locator: "7.B",
    },
  },
  {
    question:
      "What is the primary responsibility of a “captain” in Ultimate Frisbee?",
    answers: [
      "Refereeing the game",
      "Organizing substitutions",
      "Representing the team in discussions and decisions",
      "Keeping track of the score",
    ],
    correctIndex: 2,
    explanation:
      "Captains are responsible for communicating with the opposing team and resolving any disputes or discussions about the rules.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "1.11",
    },
  },
  {
    question: "What happens when the disc lands out of bounds during a pull?",
    answers: [
      "The receiving team starts where the disc went out",
      "The receiving team starts at the brick mark",
      "The disc is re-pulled",
      "The pulling team scores a point",
    ],
    correctIndex: 1,
    explanation:
      "If the disc lands out of bounds on a pull, the receiving team may choose to begin play at the brick mark, which is located 20 meters from the end zone line.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "7.12", // seems to indicate another possibility
    },
  },
  {
    question: "Which of the following actions results in a turnover?",
    answers: [
      "Completing a pass in the end zone",
      "Holding the disc for more than 10 seconds",
      "Throwing a forehand",
      "Calling a time-out",
    ],
    correctIndex: 1,
    explanation:
      "The stall count limits the thrower to 10 seconds to release the disc; failing to do so results in a turnover.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "13.2",
    },
  },
  {
    question: "What is the proper procedure for resolving a contested foul?",
    answers: [
      "Flip a disc to decide",
      "The disc returns to the thrower",
      "The team in possession keeps the disc",
      "The opposing team gains possession",
    ],
    correctIndex: 1,
    explanation:
      "In the event of a contested foul, the disc is returned to the thrower and play resumes as if the foul had not occurred.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Section 17",
    },
  },
  {
    question:
      "What is the maximum distance a player can pivot away from their original position?",
    answers: [
      "1 meter",
      "Half a meter",
      "The length of their stride",
      "There is no restriction",
    ],
    correctIndex: 2,
    explanation:
      "Players must maintain a pivot point that remains grounded, allowing for movement within their stride's natural range.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "Page 16",
    },
  },
  {
    question: "When can substitutions be made in Ultimate Frisbee?",
    answers: [
      "During live play",
      "After a turnover",
      "After a goal or injury timeout",
      "At any time",
    ],
    correctIndex: 2,
    explanation:
      "Substitutions are only allowed between points or during injury timeouts to maintain the flow of play.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "5.3", // recheck
    },
  },
  {
    question: "What must the marker do when starting the stall count?",
    answers: [
      "Stand 5 meters from the thrower",
      'Shout "Stall!" before counting',
      "Ensure they are within 3 meters of the thrower",
      "Count silently",
    ],
    correctIndex: 2,
    explanation:
      "The marker must be within 3 meters of the thrower to initiate a legal stall count.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "9.3.2",
    },
  },
  {
    question:
      "What happens if a player catches the disc simultaneously with an opponent?",
    answers: [
      "The disc is re-thrown",
      "Possession goes to the offense",
      "Possession goes to the defense",
      "A turnover is automatically called",
    ],
    correctIndex: 1,
    explanation:
      "In the case of simultaneous possession, the rules state that the offensive team retains possession of the disc.",
    reference: {
      sourceName: "WFDF Rules of Ultimate",
      link: "https://rules.wfdf.sport/wp-content/uploads/2024/12/WFDF-Rules-of-Ultimate-2025-2028.pdf",
      locator: "12.3",
    },
  },
  // Add more questions here
];

// Fisher–Yates shuffle
function shuffleArray<Type>(array: Type[]): Type[] {
  let array_copy = structuredClone(array);

  for (let i = array_copy.length - 1; i >= 0; i--) {
    // could be also implemented with i from 0 to len-1
    const j = Math.floor(Math.random() * (i + 1));
    [array_copy[i], array_copy[j]] = [array_copy[j], array_copy[i]];
  }

  return array_copy;
}

function getRandomQuestions(
  questionArray: QuizQuestion[],
  count: number,
): QuizQuestion[] {
  let shuffledQuestions = shuffleArray(questionArray); // one can integrate the slicing here for further optimization
  return shuffledQuestions.slice(0, count); // since the result is sliced, we could stop the procedure when reaching count
}

export function retrieveQuizQuestions(): QuizQuestion[] {
  return getRandomQuestions(questions, 10);
}

export function getQuestions(): Promise<QuizQuestion[]> {
  const headers: Headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Accept", "application/json");

  const request: RequestInfo = new Request(
    "http://localhost:3000/quiz-questions/10",
    {
      method: "GET",
      headers: headers,
    },
  );

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res as QuizQuestion[];
    });
}
