import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ageGroup: "",
    gender: "",
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA] min-h-screen">
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <StepThree formData={formData} onBack={handleBack} />}
    </div>
  );
};

export default MultiStepForm;
