import { Question } from "../Types";

// if you want to experiment with fallback components, you can set a delay here to get an artificial delay
const MIN_DELAY_MS = 0;
const MAX_DELAY_MS = 0;

// api key will be deactivated after the workshop, you will then have to get your own at https://quizapi.io
const API_KEY = "";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const randomDelay = () =>
  delay(MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS));

export const toQuestionList = (data: RawQuiz[]): Question[] => {
  return data
    .filter(question => question.multiple_correct_answers === "false")
    .map(question => ({
      questionText: question.question,
      answerOptions: [
        {
          answerText: question.answers.answer_a,
          isCorrect: question.correct_answer === "answer_a"
        },
        {
          answerText: question.answers.answer_b,
          isCorrect: question.correct_answer === "answer_b"
        },
        {
          answerText: question.answers.answer_c,
          isCorrect: question.correct_answer === "answer_c"
        },
        {
          answerText: question.answers.answer_d,
          isCorrect: question.correct_answer === "answer_d"
        },
        {
          answerText: question.answers.answer_e,
          isCorrect: question.correct_answer === "answer_e"
        },
        {
          answerText: question.answers.answer_f,
          isCorrect: question.correct_answer === "answer_f"
        }
      ]
    }));
};

export const fetchQuiz = async (topic: string): Promise<RawQuiz[]> => {
  await randomDelay();
  return fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10&tags=${topic}&difficulty=easy`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET"
    }
  ).then(res => res.json());
};
