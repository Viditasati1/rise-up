import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About, Home, Contact, Tech, Hero, Navbar, Works, StarsCanvas, Footer, Login, Signup, Dashboard } from "../src/components"; // Ensure Login and Signup are added to your components
import { auth } from "./firebase/firebaseConfig"; // Adjust the path to your Firebase config file
import { onAuthStateChanged } from "firebase/auth";
import MultiStepForm from "./components/questions/MultistepForm";


const App = () => {
  const [user, setUser] = useState(null);

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
        <Routes>
          {/* Homepage route for all users */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Show login/signup pages if not authenticated */}
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            // Redirect authenticated users to questionnaire (you can later replace this with the actual question page)
            <Route path="/" element={<Navigate to="/dashboard" />} />
          )}

          {/* You can add the questionnaire route here once ready */}
          <Route path="/questions" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
