import React, { useState, useEffect } from "react";
import { questionset } from "../constants/index";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  PieChart, Pie, Cell
} from "recharts";

const Analysis = () => {
  const onSubmit = () => {
    window.location.href = "/transformation-resources"; // Change to your desired page
  };
  
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedQuiz = localStorage.getItem("quizResponses");
    if (!storedQuiz) {
      setError("No quiz responses found. Please complete the quiz.");
      return;
    }
    const submission = JSON.parse(storedQuiz);
    const { age_group, responses } = submission;

    const questionnaire = questionset.questionnaires.find(
      (q) => q.age_group === age_group
    );
    if (!questionnaire) {
      setError("No questionnaire data available for your age group.");
      return;
    }

    const sectionsAnalysis = [];
    let responseIndex = 0;
    questionnaire.sections.forEach((section) => {
      const numQuestions = section.questions.length;
      const sectionResponses = responses.slice(
        responseIndex,
        responseIndex + numQuestions
      );
      responseIndex += numQuestions;

      const sectionTotal = sectionResponses.reduce((sum, val) => sum + val, 0);
      const minPossible = numQuestions * 1;
      const maxPossible = numQuestions * 4;
      const percentageScore = ((sectionTotal - minPossible) / (maxPossible - minPossible)) * 100;

      let category = "";
      let message = "";

      if (percentageScore >= 80) {
        category = "Good ✅";
        message = "You're doing great in this section! Keep up the good work. 💪";
      } else if (percentageScore >= 50) {
        category = "Weak ⚠️";
        message = "You have some struggles in this area. Consider working on improvements. 🔍";
      } else {
        category = "Significant Concern ❌";
        message = "This section shows a high level of concern. Seeking help or support might be beneficial. 💙";
      }

      sectionsAnalysis.push({
        sectionName: section.name,
        totalScore: sectionTotal,
        percentageScore,
        category,
        message,
      });
    });

    const overallTotal = responses.reduce((sum, val) => sum + val, 0);
    let overallMessage = "";
    if (overallTotal >= 60 && overallTotal <= 80) {
      overallMessage = "Your mental health is in a **good state**! Keep maintaining positive habits. 😊";
    } else if (overallTotal >= 40 && overallTotal < 60) {
      overallMessage = "You have **moderate concerns**. Some areas may need attention. Consider healthy routines. 🏋️";
    } else if (overallTotal >= 20 && overallTotal < 40) {
      overallMessage = "You are experiencing **significant concerns**. It’s important to seek support. 💙";
    } else {
      overallMessage = "Score out of expected range.";
    }

    setAnalysisData({
      age_group,
      overallTotal,
      overallMessage,
      sectionsAnalysis,
    });
  }, []);

  if (error) {
    return <div className="text-red-500 font-semibold text-center">{error}</div>;
  }
  if (!analysisData) {
    return <div className="text-center text-gray-500">Loading analysis...</div>;
  }

  const sectionChartData = analysisData.sectionsAnalysis.map((section) => ({
    name: section.sectionName,
    score: section.percentageScore,
  }));

  const pieData = [
    { name: "Good Mental Health", value: analysisData.overallTotal >= 60 ? 1 : 0, color: "#16a34a" },
    { name: "Moderate Concerns", value: analysisData.overallTotal >= 40 && analysisData.overallTotal < 60 ? 1 : 0, color: "#facc15" },
    { name: "Significant Concerns", value: analysisData.overallTotal < 40 ? 1 : 0, color: "#dc2626" },
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Mental Health Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Text Analysis */}
        <div>
          <p className="text-lg"><strong>Age Group:</strong> {analysisData.age_group}</p>
          <p className="text-lg"><strong>Total Score:</strong> {analysisData.overallTotal}</p>
          <p className={`text-lg font-semibold ${analysisData.overallTotal >= 60 ? "text-green-600" : analysisData.overallTotal >= 40 ? "text-yellow-500" : "text-red-500"}`}>
            <strong>Overall Assessment:</strong> {analysisData.overallMessage}
          </p>

          {analysisData.sectionsAnalysis.map((section, idx) => (
            <div key={idx} className="border-l-4 p-3 my-3 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-700">{section.sectionName}</h3>
              <p><strong>Score:</strong> {section.totalScore} ({section.percentageScore.toFixed(1)}%)</p>
              <p className={`text-lg font-semibold ${section.category === "Good ✅" ? "text-green-600" : section.category === "Weak ⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                <strong>Category:</strong> {section.category}
              </p>
              <p className="text-sm text-gray-600">{section.message}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div className={`h-4 rounded-full ${section.category === "Good ✅" ? "bg-green-500" : section.category === "Weak ⚠️" ? "bg-yellow-500" : "bg-red-500"}`}
                  style={{ width: `${section.percentageScore}%` }}>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Charts */}
        <div className="flex flex-col items-center gap-6">
          {/* Bar Chart */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <BarChart width={350} height={250} data={sectionChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </div>

          {/* Pie Chart */}
          <button
  onClick={onSubmit}
  className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
>
  Let's Transform Your Life
</button>
          
        </div>
      </div>
    </div>
  );
};

export default Analysis;
