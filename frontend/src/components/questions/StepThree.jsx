import React from "react";
import { questions } from "./data";

const StepThree = ({ formData, onBack }) => {
  const filteredQuestions =
    questions[formData.ageGroup]?.[formData.gender] || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#034752] mb-4">Your Questions</h2>
      <ul className="flex flex-col gap-4">
        {filteredQuestions.map((question, index) => (
          <li
            key={index}
            className="bg-white px-4 py-2 rounded-lg shadow-md text-[#034752]"
          >
            {question}
          </li>
        ))}
      </ul>
      <button
        className="mt-6 px-6 py-2 bg-gray-400 text-white rounded-lg"
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
};

export default StepThree;
