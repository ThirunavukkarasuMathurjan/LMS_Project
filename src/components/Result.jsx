import React from "react";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const { answers, quizData } = location.state;

  const totalQuestions = quizData.length;
  const correctAnswers = Object.keys(answers).filter(
    (key) => answers[key] === quizData[key].answer
  ).length;

  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-blue-700">Quiz Results</h1>
        <p className="text-gray-600 mt-4">
          You answered {correctAnswers} out of {totalQuestions} questions correctly.
        </p>
        <p className="text-gray-600 mt-2">
          Your score is: {correctAnswers}/{totalQuestions} ({percentage}%)
        </p>
      </div>
    </div>
  );
}

export default Results;
