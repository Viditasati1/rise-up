import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Navbar, Hero, About, Tech, Works, Contact, StarsCanvas, Footer } from "./index.js";
import { auth } from "../firebase/firebaseConfig"; // Adjust the path to your Firebase config file
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [user, setUser] = useState(null);

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []);

  // If the user is authenticated, redirect them to the questionnaire (you can replace this with the actual questionnaire route)
  if (user) {
    return <Navigate to="/questions" />;
  }

  return (
    <>
      {/* Public homepage content visible for everyone */}
      <div className="relative z-0 bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>

        <About id="about" />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
