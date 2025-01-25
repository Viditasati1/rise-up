import React, { useState } from "react";
import { questionSets } from "../constants";

const PersonalityTest = () => {
  const [age, setAge] = useState(18); // Default to 18 or get from props
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  
  // Filter questions based on age
  const getFilteredQuestions = () => {
    if (age >= 18 && age <= 25) return questionSets.YoungAdults;
    return questionSets.Adults;
  };
  
  // Handle answer selection (store index of selected option)
  const handleAnswerChange = (section, questionIndex, optionIndex) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [`${section}-${questionIndex}`]: optionIndex
    }));
  };
  
  const filteredQuestions = getFilteredQuestions();
  
  // Get the current section and question
  const currentSection = filteredQuestions[0]; // Assuming there is only one section
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  
  const handleNextQuestion = () => {
    // Move to the next question, if there are more questions
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  return (
    <div className="personality-test bg-white text-black min-h-screen flex flex-col justify-center items-center p-1">
      <h2 className="text-2xl font-semibold mb-1">Personality Test</h2>
      <h3 className="text-lg mb-1 text-center">
        Hi there! This questionnaire is all about understanding the challenges young people face today and finding ways to support you better. Your answers are 100% private, and there are no right or wrong answers. Just be yourself and share as much as you’re comfortable with!
      </h3>
      
      <label className="block mb-4">
        Age: 
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(Number(e.target.value))} 
          className="border border-gray-300 p-2 rounded bg-white w-full max-w-xs"
        />
      </label>

      <div className="section w-full max-w-lg">
        <h3 className="text-lg font-medium mb-2">{currentSection.section}</h3>
        <div className="question mb-2">
          <p className="mb-2">{currentQuestion.question}</p>
          <div className="options mt-2">
            {currentQuestion.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block mb-2">
                <input 
                  type="radio" 
                  name={`${currentSection.section}-${currentQuestionIndex}`} 
                  value={option} 
                  checked={answers[`${currentSection.section}-${currentQuestionIndex}`] === optionIndex}
                  onChange={() => handleAnswerChange(currentSection.section, currentQuestionIndex, optionIndex)}
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
          onClick={handleNextQuestion} 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Next Question
        </button>
        
        {currentQuestionIndex === currentSection.questions.length - 1 && (
          <button 
            type="submit" 
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
