export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}
