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
      navigate("/questions"); // Redirect to dashboard if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-[#2D1B7F] to-[#6A4C9C]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF6F61]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FF6F61] to-[#F8B400]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#F1F1F1]`}>
            "Break Free. Reclaim Your Confidence.” <span className="text-[#FF6F61]">Rise Up.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#F1F1F1]`}>
            “We’re here to help you <br className="sm:block hidden" />
            conquer social anxiety, one step at a time.”
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 bg-[#FF6F61] text-white font-medium text-lg rounded-lg shadow-lg hover:bg-[#F8B400] transition-all ease-in-out duration-300"
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
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#FF6F61] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#FF6F61] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
