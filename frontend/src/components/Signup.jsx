// src/components/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Adjust path as necessary
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create a new user with email and password using Firebase Auth
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/questions"); // Redirect to login page after successful signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo and Welcome Text */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-[#034752]">Create Account</h1>
          <p className="text-[#10B981] mt-2">Sign up to join the community!</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-6">
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-[#10B981] text-white font-medium rounded-md hover:bg-[#034752] transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
        <p className="text-sm text-[#034752]">
  Already have an account?{" "}
  <Link to="/Login" className="text-[#10B981] font-medium hover:underline">
    Log in
  </Link>
</p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
