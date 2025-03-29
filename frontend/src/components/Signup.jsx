import React, { useState } from "react";
import { createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await setPersistence(auth, browserSessionPersistence);
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isNewUser", "true");
      navigate("/demographic-info");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#034752] to-[#10B981]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border-2 border-[#10B981]">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-[#034752]">Create Account</h1>
          <p className="text-[#10B981] mt-2 font-medium">Sign up to join the community!</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#034752]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full mt-1 p-2 border border-[#10B981] rounded-md focus:ring-2 focus:ring-[#034752]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#034752]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full mt-1 p-2 border border-[#10B981] rounded-md focus:ring-2 focus:ring-[#034752]"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 bg-[#10B981] text-white font-medium rounded-md hover:bg-[#034752]">
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#034752]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#10B981] font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
