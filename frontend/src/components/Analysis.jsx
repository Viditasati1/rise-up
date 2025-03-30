import React, { useState, useEffect } from "react";
import { questionset } from "../constants/index";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell
} from "recharts";

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedQuiz = localStorage.getItem("quizResponses");
    if (!storedQuiz) {
      setError("No quiz responses found.");
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
      const range = maxPossible - minPossible;
      const moderateThreshold = minPossible + (range * 1) / 3;
      const healthyThreshold = minPossible + (range * 2) / 3;

      let message = "";
      if (sectionTotal >= healthyThreshold) {
        message = "Healthy Mental State – Low stress, positive habits.";
      } else if (sectionTotal >= moderateThreshold) {
        message = "Moderate Concerns – Signs of stress or imbalance; could use support.";
      } else {
        message = "Significant Concerns – High stress or mental health challenges; professional intervention recommended.";
      }

      sectionsAnalysis.push({
        sectionName: section.name,
        totalScore: sectionTotal,
        minPossible,
        maxPossible,
        message,
      });
    });

    const overallTotal = responses.reduce((sum, val) => sum + val, 0);
    let overallMessage = "";
    if (overallTotal >= 60 && overallTotal <= 80) {
      overallMessage = "Healthy Mental State – Low stress, positive habits.";
    } else if (overallTotal >= 40 && overallTotal < 60) {
      overallMessage = "Moderate Concerns – Signs of stress or imbalance; could use support.";
    } else if (overallTotal >= 20 && overallTotal < 40) {
      overallMessage = "Significant Concerns – High stress or mental health challenges; professional intervention recommended.";
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
    score: section.totalScore,
  }));

  const radarChartData = analysisData.sectionsAnalysis.map((section) => ({
    subject: section.sectionName,
    A: section.totalScore,
    fullMark: section.maxPossible,
  }));

  const pieData = [
    { name: "Healthy", value: analysisData.overallTotal >= 60 ? 1 : 0, color: "#16a34a" },
    { name: "Moderate", value: analysisData.overallTotal >= 40 && analysisData.overallTotal < 60 ? 1 : 0, color: "#facc15" },
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
              <p><strong>Total Score:</strong> {section.totalScore} (Range: {section.minPossible} - {section.maxPossible})</p>
              <p className="text-sm text-gray-600">{section.message}</p>
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

          {/* Radar Chart */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <RadarChart outerRadius={90} width={350} height={250} data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 40]} />
              <Radar name="Score" dataKey="A" stroke="#2563eb" fill="#60a5fa" fillOpacity={0.6} />
            </RadarChart>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <PieChart width={350} height={250}>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
