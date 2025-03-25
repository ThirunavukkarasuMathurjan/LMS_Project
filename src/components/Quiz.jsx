import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const quizData = [
  {
    "id": 1,
    "question": "Which protocol is used for secure data transmission over the internet?",
    "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
    "answer": "HTTPS"
  },
  {
    "id": 2,
    "question": "What is the primary function of a router in a network?",
    "options": ["Connects devices within a LAN", "Forwards data packets between networks", "Assigns IP addresses", "Encrypts data"],
    "answer": "Forwards data packets between networks"
  },
  {
    "id": 3,
    "question": "Which layer of the OSI model is responsible for logical addressing?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": "Network"
  },
  {
    "id": 4,
    "question": "Which protocol is used to assign IP addresses dynamically?",
    "options": ["DNS", "DHCP", "TCP", "ICMP"],
    "answer": "DHCP"
  },
  {
    "id": 5,
    "question": "What does TCP stand for?",
    "options": ["Transmission Control Protocol", "Transfer Communication Process", "Technology Communication Protocol", "Transport Connection Path"],
    "answer": "Transmission Control Protocol"
  }
];

function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes = 600 seconds
  const [answers, setAnswers] = useState({});
  
  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit(); // Automatically submit when time runs out
    }
  }, [quizStarted, timeLeft]);

  const handleStartQuiz = () => {
    if (window.confirm("Are you sure you want to start the quiz?")) {
      setQuizStarted(true);
    }
  };

  const handleNext = () => {
    if (selectedOption === null) {
      alert("Please select an answer before proceeding.");
      return;
    }
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
    setSelectedOption(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setAnswers({ ...answers, [currentQuestion]: selectedOption });
    }
  
    if (window.confirm("Are you sure you want to submit the quiz?")) {
      navigate("/results", { state: { answers: { ...answers, [currentQuestion]: selectedOption }, quizData } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Computer Network Quiz</h1>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
          <p className="text-gray-600">Remaining Questions: {quizData.length - currentQuestion}</p>
        </div>

        {!quizStarted ? (
          <button
            onClick={handleStartQuiz}
            className="bg-green-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-green-600"
          >
            Start Quiz
          </button>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mt-4">{quizData[currentQuestion].question}</h2>
            <div className="mt-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`block w-full p-2 mt-2 border rounded-lg hover:bg-gray-200 ${selectedOption === option ? 'bg-blue-300' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              {currentQuestion < quizData.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
