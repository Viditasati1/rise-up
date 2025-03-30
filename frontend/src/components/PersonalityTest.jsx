import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { questionset } from "../constants/index";
import { getDatabase, ref, set } from "firebase/database";
import "./personalityTest.css";

const PersonalityTest = () => {
  const navigate = useNavigate(); // Initialize navigate
  const userAge = localStorage.getItem("age");
  const numericAge = parseInt(userAge, 10);

  let ageGroup = "";
  if (numericAge < 18) {
    ageGroup = "under_18";
  } else if (numericAge >= 18 && numericAge <= 25) {
    ageGroup = "18_to_25";
  } else if (numericAge > 25 && numericAge <= 40) {
    ageGroup = "25_to_40";
  }

  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allAnswered, setAllAnswered] = useState(false);

  // Update quizData and answers based on age group
  useEffect(() => {
    const questionnaire = questionset.questionnaires.find(
      (q) => q.age_group === ageGroup
    );
    if (questionnaire) {
      const flatQuestions = [];
      questionnaire.sections.forEach((section) => {
        section.questions.forEach((question) => {
          flatQuestions.push({
            sectionName: section.name,
            text: question.text,
            options: question.options,
          });
        });
      });
      setQuizData(flatQuestions);
      setAnswers(new Array(flatQuestions.length).fill(null));
    }
  }, [ageGroup]);

  // Update allAnswered whenever answers change
  useEffect(() => {
    setAllAnswered(answers.length > 0 && answers.every((ans) => ans !== null));
  }, [answers]);

  const handleAnswerChange = (optionIndex) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentIndex] = 4 -optionIndex;
      return updatedAnswers;
    });
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }
    const db = getDatabase();
    const submission = {
      age_group: ageGroup,
      responses: answers,
    };

    localStorage.setItem("quizResponses", JSON.stringify(submission));

    set(ref(db, "userResponses/" + Date.now()), submission)
      .then(() => {
        alert("Responses saved successfully!");
        // Redirect to analysis page
        navigate("/analysis");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  if (quizData.length === 0) {
    return <div>No questions available for your age group.</div>;
  }

  const currentQuestion = quizData[currentIndex];

  return (
    <div className="quiz-container">
      <h2>Personality Test</h2>
      <div className="question-card">
        <h3>Section: {currentQuestion.sectionName}</h3>
        <p>{currentQuestion.text}</p>
        <div className="options">
  {currentQuestion.options.map((option, idx) => (
    <button
      key={idx}
      onClick={() => handleAnswerChange(idx)}
      className={answers[currentIndex] === (4 - idx) ? "selected" : ""}
    >
      {option}
    </button>
  ))}
</div>

      </div>
      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        {currentIndex < quizData.length - 1 ? (
          <button onClick={handleNext} disabled={answers[currentIndex] === null}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={!allAnswered}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalityTest;
