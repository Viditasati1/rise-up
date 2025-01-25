import React, { useState } from 'react';
import PersonalityTest from './PersonalityTest';
import { questionSets } from '../constants'; // Import your questions array
import Navbar from './Navbar';

const Dashboard = () => {
  const [isFirstTime, setIsFirstTime] = useState(true); // Tracks if the user is new
  const [userData, setUserData] = useState({}); // Stores the user's data

  const handleFormSubmit = (data) => {
    setUserData(data); // Save the user data
    setIsFirstTime(false); // Mark as not first time
    console.log('User data submitted:', data);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#D9F0FF] to-[#A8D8EA]">
      <Navbar />
      {/* Sidebar */}
      <div className="w-64 bg-[#034752] text-white p-5">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <ul className="mt-6">
          <li className="py-2 hover:bg-[#0E8C6C] rounded-md">
            <a href="#overview" className="text-lg">Overview</a>
          </li>
          <li className="py-2 hover:bg-[#0E8C6C] rounded-md">
            <a href="#analytics" className="text-lg">Analytics</a>
          </li>
          <li className="py-2 hover:bg-[#0E8C6C] rounded-md">
            <a href="#settings" className="text-lg">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Show the form if it's the user's first time */}
        {isFirstTime ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl animate-fade-in">
              <h2 className="text-2xl font-bold text-[#034752] mb-6 text-center animate-slide-down">
                Welcome! Tell Us About Yourself
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit({
                    name: e.target.name.value,
                    age: e.target.age.value,
                  });
                }}
                className="space-y-6"
              >
                <div className="animate-slide-left">
                  <label className="block text-[#034752] font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#10B981] focus:border-[#10B981]"
                  />
                </div>
                <div className="animate-slide-right">
                  <label className="block text-[#034752] font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    required
                    placeholder="Enter your age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#10B981] focus:border-[#10B981]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#10B981] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0E8C6C] animate-pulse-once"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Dashboard content after user submits their data
          <div>
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-3xl text-[#034752] font-bold">
                Welcome, {userData.name}!
              </h1>
              <button
                className="px-4 py-2 bg-[#10B981] text-white rounded-md hover:bg-[#0E8C6C]"
                onClick={() => {
                  setIsFirstTime(true); // Allow user to resubmit their data
                  setUserData({});
                }}
              >
                Edit Info
              </button>
            </header>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              {/* Personality Test with Transparency */}
              <div className="w-full max-w-2xl bg-white/90 p-8 rounded-lg shadow-xl">
                <PersonalityTest 
                  questionSets={questionSets} 
                  userData={userData} // Pass age to personality test
                />
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white shadow-lg rounded-md p-5">
                <h3 className="text-lg text-[#034752] font-semibold">Overview</h3>
                <p className="text-[#10B981] mt-2">
                  Quick summary of your progress and activity.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-5">
                <h3 className="text-lg text-[#034752] font-semibold">Analytics</h3>
                <p className="text-[#10B981] mt-2">
                  Detailed insights and statistics about your usage.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-5">
                <h3 className="text-lg text-[#034752] font-semibold">Settings</h3>
                <p className="text-[#10B981] mt-2">
                  Update your profile and preferences here.
                </p>
              </div>
            </div>

            <footer className="mt-10 text-center text-[#034752]">
              <p>© 2025 Your Company Name</p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
