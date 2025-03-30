import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const DemographicForm = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [age, setAge] = useState(localStorage.getItem("age") || "");
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (age <= 0) {
      setError("Please enter a valid age.");
      return;
    }
    if (!gender) {
      setError("Please select a gender.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        // Save to Firestore
        await setDoc(doc(db, "users", user.uid), {
          name,
          age,
          gender,
          email: user.email,
        });

        // Save to localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("gender", gender);

        console.log("User data saved successfully!");

        // Set "isNewUser" flag to false instead of removing it
        localStorage.setItem("isNewUser", "false");
        setTimeout(() => navigate("/login"),1);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#034752] mb-4">Tell us about yourself</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-[#034752]">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              className="w-full mt-1 p-2 border border-[#A8D8EA] rounded-md"
              required
            />
          </div>
          {/* Age Field */}
          <div>
            <label className="block text-sm font-medium text-[#034752]">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setError("");
              }}
              className="w-full mt-1 p-2 border border-[#A8D8EA] rounded-md"
              required
            />
          </div>
          {/* Gender Field */}
          <div>
            <label className="block text-sm font-medium text-[#034752]">Gender</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                setError("");
              }}
              className="w-full mt-1 p-2 border border-[#A8D8EA] rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 bg-[#10B981] text-white font-medium rounded-md hover:bg-[#034752]">
            Submit & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemographicForm;
