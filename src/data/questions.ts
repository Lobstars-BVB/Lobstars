import { z } from 'zod';

const referenceSchema = z.object({
  sourceName: z.string().trim().min(1, "The source should not be empty"),
  link: z.string().trim().min(1, "The link should not be empty").url("Invalid URL format"),
  locator: z.string().trim().min(1, "The locator should not be empty"),
});

const quizQuestionSchema = z.object({
  question: z.string().trim().min(10, "The question should be at least 10 characters long"),
  answers: z.array(z.string().trim().min(1, "The answer should not be empty")).min(2, "There should be at least 2 answers"),
  correctIndex: z.number().int().nonnegative("Correct index cannot be negative"),
  explanation: z.string().trim().min(10, "The explanation should be at least 10 characters long"),
  reference: referenceSchema,
}).refine((data) => data.correctIndex < data.answers.length, {
  message: "The correct index should correspond to an answer",
  path: ["correctIndex"],
});

export type QuizQuestion = z.infer<typeof quizQuestionSchema>;

const quizQuestionArraySchema = z.array(quizQuestionSchema);


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
      const quizValidation = quizQuestionArraySchema.safeParse(res);
      if (!quizValidation.success) {
        console.error(
          "Invalid quiz data:",
          quizValidation.error.format(),
        );
        throw new Error("The fetched quiz data was invalid");
      }

      return quizValidation.data;
});
}
