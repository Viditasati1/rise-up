import React, { useState } from "react";

const PersonalityTest = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionId, answer) => {
    setResponses({
      ...responses,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("User responses:", responses);
    // Replace this console.log with API call to submit responses to MongoDB
    // Example: await axios.post('/api/submitResponses', { responses });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p>Your responses have been submitted successfully.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="text-gray-600 mb-4">{currentQuestion.question}</p>
      <div className="flex flex-col space-y-3">
        {currentQuestion.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={option}
              checked={responses[currentQuestion.id] === option}
              onChange={() => handleOptionChange(currentQuestion.id, option)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!responses[currentQuestion.id]}
        className={`mt-6 py-2 px-4 rounded ${
          responses[currentQuestion.id]
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default PersonalityTest;
