import React, { useState } from "react";

const StepTwo = ({ onNext, onBack }) => {
  const [gender, setGender] = useState("");

  const handleNext = () => {
    if (gender) {
      onNext({ gender });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#034752] mb-4">Select Your Gender</h2>
      <div className="flex flex-col gap-4">
        {["Male", "Female", "Non-binary", "Prefer not to say"].map((option) => (
          <button
            key={option}
            onClick={() => setGender(option)}
            className={`px-4 py-2 rounded-lg ${
              gender === option ? "bg-[#10B981] text-white" : "bg-white text-[#034752]"
            } hover:bg-[#10B981] hover:text-white transition`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <button className="px-6 py-2 bg-gray-400 text-white rounded-lg" onClick={onBack}>
          Back
        </button>
        <button
          className="px-6 py-2 bg-[#034752] text-white rounded-lg"
          onClick={handleNext}
          disabled={!gender}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
