import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Adjust the path to your Firebase config file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For button loading state

  const navigate = useNavigate(); // For redirection after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      navigate("/"); // Redirect to the main page after login
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Failed to log in. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo and Welcome Text */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-[#034752]">Welcome Back</h1>
          <p className="text-[#10B981] mt-2">Log in to Rise Up and break the barriers</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#034752]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-[#A8D8EA] rounded-md focus:ring-2 focus:ring-[#10B981] focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#034752]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-[#A8D8EA] rounded-md focus:ring-2 focus:ring-[#10B981] focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-white font-medium rounded-md transition-colors ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#10B981] hover:bg-[#034752]"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#034752]">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="text-[#10B981] font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
