import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Hero = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate("/questions");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-[#2D1B7F] to-[#6A4C9C] flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl px-6">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          "Break Free. Reclaim Your Confidence.”{" "}
          <span className="text-[#F8B400]">Rise Up.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-white">
          "We’re here to help you conquer social anxiety, one step at a time."
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-[#6A4C9C] text-white font-medium text-lg rounded-lg shadow-lg hover:bg-[#F8B400] transition-all ease-in-out duration-300"
          >
            Get Started
          </button>
          <a
            href="#about"
            className="px-6 py-3 bg-[#2D1B7F] text-white font-medium text-lg rounded-lg shadow-lg hover:bg-[#1E1448] transition-all ease-in-out duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#F8B400] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#F8B400] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
