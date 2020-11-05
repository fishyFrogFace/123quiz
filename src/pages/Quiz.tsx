import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchQuiz, toQuestionList } from "../api/QuizAPI";
import { Question } from "../Types";

interface QuizProps {
  quizTopic: string;
}

export default function Quiz(props: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState<Question[]>([]);

  useEffect(() => {
    setQuiz([]);
    if (!props.quizTopic) {
      return;
    } else {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      fetchQuiz(props.quizTopic).then(data => setQuiz(toQuestionList(data)));
    }
  }, [props.quizTopic]);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return !props.quizTopic ? (
    <Typography>No quiz selected</Typography>
  ) : !quiz[currentQuestion] ? (
    <Typography>Loading...</Typography>
  ) : (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quiz.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quiz.length}
            </div>
            <div className="question-text">
              {quiz[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {quiz[currentQuestion].answerOptions
              .filter(option => option.answerText)
              .map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
