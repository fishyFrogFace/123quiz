export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

export interface RawQuiz {
  multiple_correct_answers: string;
  question: string;
  correct_answer: string;
  answers: Answer;
}

export interface Answer {
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  answer_e: string;
  answer_f: string;
}
