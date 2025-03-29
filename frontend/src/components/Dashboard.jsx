import React from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Get currently logged-in user

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to Home after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6A4C9C] to-[#2D1B7F] text-white p-6 mt-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 text-gray-900">
        {/* User Welcome Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2D1B7F]">Welcome, {user?.displayName || "User"}! 🎉</h2>
          <p className="text-gray-600">Manage your account and explore features.</p>
        </div>

        {/* User Info Card */}
        <div className="flex flex-col items-center my-6">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="w-20 h-20 rounded-full shadow-md" />
          ) : (
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-2xl">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          )}
          <p className="mt-2 text-lg font-semibold">{user?.email}</p>
        </div>

        {/* Navigation Cards (Now Clickable) */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div
            className="dashboard-card"
            onClick={() => navigate("/profile")}
          >
            <h3>Profile</h3>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/articles")}
          >
            <h3>Articles</h3>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/assessment")}
          >
            <h3>Take the Assessment</h3>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/analysis")}
          >
            <h3>Analysis</h3>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
