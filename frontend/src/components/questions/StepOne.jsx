import React, { useState } from "react";

const StepOne = ({ onNext }) => {
  const [ageGroup, setAgeGroup] = useState("");

  const handleNext = () => {
    if (ageGroup) {
      onNext({ ageGroup });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#034752] mb-4">Select Your Age Group</h2>
      <div className="flex flex-col gap-4">
        {["Under 12", "13-17", "18-24", "25-34", "35+"].map((group) => (
          <button
            key={group}
            onClick={() => setAgeGroup(group)}
            className={`px-4 py-2 rounded-lg ${
              ageGroup === group ? "bg-[#10B981] text-white" : "bg-white text-[#034752]"
            } hover:bg-[#10B981] hover:text-white transition`}
          >
            {group}
          </button>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-2 bg-[#034752] text-white rounded-lg"
        onClick={handleNext}
        disabled={!ageGroup}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
