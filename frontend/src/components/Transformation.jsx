import { useState, useEffect } from "react";
import { firstTasksSet } from "../constants/index"; // Import task JSON

const Transformation = () => {
    const [dailyTasks, setDailyTasks] = useState([]);
    const [progress, setProgress] = useState(0);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        const today = new Date().getDate();
        const storedCompletedTasks = JSON.parse(localStorage.getItem(`completedTasks-${today}`)) || [];

        const taskSet = firstTasksSet.task?.[0]?.tasks || []; 
        const taskData = taskSet.find(t => t.day === (today % 10 || 10)); 
        const todayTasks = taskData ? taskData.tasks : [];

        setDailyTasks(todayTasks);
        setCompletedTasks(storedCompletedTasks);
        updateProgress(storedCompletedTasks.length, todayTasks.length);
    };

    const updateProgress = (completed, total) => {
        setProgress(total > 0 ? (completed / total) * 100 : 100);
    };

    const completeTask = (index) => {
        setDailyTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            const completedTask = updatedTasks.splice(index, 1)[0];

            setCompletedTasks((prev) => {
                const newCompleted = [...prev, completedTask];
                localStorage.setItem(`completedTasks-${new Date().getDate()}`, JSON.stringify(newCompleted));
                updateProgress(newCompleted.length, updatedTasks.length + newCompleted.length);
                return newCompleted;
            });

            return updatedTasks;
        });

        setUserInput((prev) => {
            const updated = { ...prev };
            delete updated[index];
            return updated;
        });
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Today's Tasks</h2>

            {/* Progress Bar */}
            <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
                <div 
                    className="absolute top-0 left-0 bg-blue-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Task List */}
            {dailyTasks.length > 0 ? (
                <div className="space-y-4">
                    {dailyTasks.map((task, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm border border-gray-300">
                            <span className="text-gray-800 text-sm font-medium">{task}</span>
                            <input 
                                type="text" 
                                placeholder="Describe completion" 
                                value={userInput[index] || ""} 
                                onChange={(e) => setUserInput({ ...userInput, [index]: e.target.value })} 
                                className="border border-gray-300 px-2 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            />
                            <button 
                                className="ml-2 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
                                onClick={() => completeTask(index)}
                            >
                                ✔
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-sm mt-4">All tasks completed! 🎉</p>
            )}
        </div>
    );
};

export default Transformation;
