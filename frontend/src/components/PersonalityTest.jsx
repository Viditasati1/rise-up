import React, { useState } from "react";
import { questionSets } from "../constants";

const PersonalityTest = ({ userData }) => {
  const { age } = userData;
  const [answers, setAnswers] = useState({});
  const [sectionScores, setSectionScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const getFilteredQuestions = () => {
    if (age >= 18 && age <= 25) return questionSets.YoungAdults;
    return questionSets.Adults;
  };

  // Flatten all sections into one array
  const flattenQuestions = () => {
    const filteredQuestions = getFilteredQuestions();
    return filteredQuestions.flatMap((section) =>
      section.questions.map((question) => ({
        ...question,
        sectionName: section.section, // Keep track of the section name
      }))
    );
  };

  const allQuestions = flattenQuestions();
  const currentQuestion = allQuestions[currentQuestionIndex];

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const selectedScore = optionIndex + 1; // Score is index + 1
    const sectionName = allQuestions[questionIndex].sectionName;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedScore,
    }));

    setSectionScores((prevSectionScores) => ({
      ...prevSectionScores,
      [sectionName]: (prevSectionScores[sectionName] || 0) + selectedScore,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const totalQuestions = allQuestions.length;
    const answeredQuestions = Object.keys(answers).length;

    if (answeredQuestions < totalQuestions) {
      alert("Please answer all the questions before submitting.");
      return;
    }

    // Calculate the total score by summing up all section scores
    const total = Object.values(sectionScores).reduce((sum, score) => sum + score, 0);
    setTotalScore(total);

    console.log("User Answers:", answers);
    console.log("Section Scores:", sectionScores);
    console.log("Total Score:", total);

    alert("Thank you for completing the test!");
  };

  return (
    <div className="personality-test bg-white/90 text-black min-h-screen flex flex-col justify-center items-center p-1">
      <h2 className="text-2xl font-semibold mb-1">Personality Test</h2>
      <h3 className="text-lg mb-1 text-center">
        Hi there! This questionnaire is all about understanding the challenges
        young people face today and finding ways to support you better. Your
        answers are 100% private, and there are no right or wrong answers. Just
        be yourself and share as much as you’re comfortable with!
      </h3>

      <div className="section w-full max-w-lg">
        <h3 className="text-lg font-medium mb-2">{currentQuestion.sectionName}</h3>
        <div className="question mb-2">
          <p className="mb-2">{currentQuestion.question}</p>
          <div className="options mt-2">
            {currentQuestion.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block mb-2">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === optionIndex + 1}
                  onChange={() => handleAnswerChange(currentQuestionIndex, optionIndex)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg flex justify-between">
        <button
          type="button"
          onClick={handlePreviousQuestion}
          className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
          disabled={currentQuestionIndex === 0} // Disable if on the first question
        >
          Previous
        </button>

        {currentQuestionIndex < allQuestions.length - 1 ? (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </button>
        )}
      </div>

      
    </div>
  );
};

export default PersonalityTest;
