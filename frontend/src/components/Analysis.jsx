import React, { useState, useEffect } from "react";
import { questionset } from "../constants/index";

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve stored quiz responses from localStorage
    const storedQuiz = localStorage.getItem("quizResponses");
    if (!storedQuiz) {
      setError("No quiz responses found.");
      return;
    }
    const submission = JSON.parse(storedQuiz); // Expected format: { age_group, responses }
    const { age_group, responses } = submission;

    // Find the matching questionnaire for this age group
    const questionnaire = questionset.questionnaires.find(
      (q) => q.age_group === age_group
    );
    if (!questionnaire) {
      setError("No questionnaire data available for your age group.");
      return;
    }

    // Reconstruct analysis per section
    const sectionsAnalysis = [];
    let responseIndex = 0;
    questionnaire.sections.forEach((section) => {
      const numQuestions = section.questions.length;
      // Slice the responses array for this section based on the number of questions
      const sectionResponses = responses.slice(responseIndex, responseIndex + numQuestions);
      responseIndex += numQuestions;

      // Compute total and average score for this section
      const sectionTotal = sectionResponses.reduce((sum, val) => sum + val, 0);
      const sectionAverage = sectionTotal / numQuestions;

      // Determine analysis message based on average score thresholds
      let message = "";
      if (sectionAverage < 2) {
        message = "Your responses indicate low levels of concern in this area.";
      } else if (sectionAverage >= 2 && sectionAverage <= 3) {
        message = "There appears to be a moderate level of challenge in this area.";
      } else {
        message = "Your responses suggest significant distress in this area. Consider seeking additional support.";
      }

      sectionsAnalysis.push({
        sectionName: section.name,
        averageScore: sectionAverage,
        message,
      });
    });

    // Optionally, compute overall average score
    const overallTotal = responses.reduce((sum, val) => sum + val, 0);
    const overallAverage = overallTotal / responses.length;

    setAnalysisData({
      age_group,
      overallAverage,
      sectionsAnalysis,
      totalScore: overallTotal,
    });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!analysisData) {
    return <div>Loading analysis...</div>;
  }

  return (
    <div className="analysis-container p-4 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Analysis</h2>
      <div className="overall-analysis mb-6">
        <p>
          <strong>Age Group:</strong> {analysisData.age_group}
        </p>
        <p>
          <strong>Overall Average Score:</strong> {analysisData.overallAverage.toFixed(2)}
        </p>
        <p>
          <strong>Total Score:</strong> {analysisData.totalScore}
        </p>
      </div>

      {analysisData.sectionsAnalysis.map((section, idx) => (
        <div key={idx} className="section-analysis mb-4 p-3 border rounded">
          <h3 className="text-xl font-semibold">{section.sectionName}</h3>
          <p>
            <strong>Average Score:</strong> {section.averageScore.toFixed(2)}
          </p>
          <p>{section.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
