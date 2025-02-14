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

export function getQuestions(): Promise<QuizQuestion[]> {
  const headers: Headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Accept", "application/json");

  const request: RequestInfo = new Request(
    `https://quizquestions.onrender.com/quiz-questions/10`,
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
