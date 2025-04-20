import { z } from "zod";


const imageSchema = z.object({
  url: z.string().url("Invalid URL format"),
  alt: z.string().min(1, "An alternative description is required"), // in case the URL fails to load
})


const referenceSchema = z.object({
  sourceName: z.string().trim().min(1, "The source should not be empty"),
  link: z
    .string()
    .trim()
    .min(1, "The link should not be empty")
    .url("Invalid URL format"),
  locator: z.string().trim().min(1, "The locator should not be empty"),
});

const quizQuestionSchema = z
  .object({
    question: z
      .string()
      .trim()
      .min(10, "The question should be at least 10 characters long"),
    answers: z
      .array(z.string().trim().min(1, "The answer should not be empty"))
      .min(2, "There should be at least 2 answers"),
    correctIndex: z
      .number()
      .int()
      .nonnegative("Correct index cannot be negative"),
    explanation: z
      .string()
      .trim()
      .min(10, "The explanation should be at least 10 characters long"),
    reference: referenceSchema,
    image: imageSchema.nullish(),
  })
  .refine((data) => data.correctIndex < data.answers.length, {
    message: "The correct index should correspond to an answer",
    path: ["correctIndex"],
  });

export type QuizQuestion = z.infer<typeof quizQuestionSchema>;

const quizQuestionArraySchema = z.array(quizQuestionSchema);

export async function getQuestions(): Promise<QuizQuestion[]> {
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

  const response = await fetch(request);
  const responseJson = await response.json();

  return quizQuestionArraySchema.parse(responseJson);
}
