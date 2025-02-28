import { z } from 'zod';

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

const ReferenceSchema = z.object({
  sourceName: z.string().min(1, "The source should not be empty").trim(),
  link: z.string().min(1, "The link should not be empty").trim().url("Invalid URL format"),
  locator: z.string().min(1, "The locator should not be empty").trim(),
});

const QuizQuestionSchema = z.object({
  question: z.string().min(10, "The question should be at least 10 characters long").trim(),
  answers: z.array(z.string().min(1, "The answer should not be empty").trim()).min(2, "There should be at least 2 answers"),
  correctIndex: z.number().int().nonnegative("Correct index cannot be negative"),
  explanation: z.string().min(10, "The explanation should be at least 10 characters long").trim(),
  reference: ReferenceSchema,
}).refine((data: QuizQuestion) => data.correctIndex < data.answers.length, {
  message: "The correct index should correspond to an answer",
  path: ["correctIndex"],
});

const QuizQuestionArraySchema = z.array(QuizQuestionSchema);


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
      const questionsArrayValidation = QuizQuestionArraySchema.safeParse(res);
      if (!questionsArrayValidation.success) {
        console.error("Invalid quiz data:", questionsArrayValidation.error.format());
        throw new Error("The fetched quiz data was invalid");
      }

      return questionsArrayValidation.data as QuizQuestion[];
    });
}
