import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9EC9E7]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#9EC9E7] to-[#10B981]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#034752]`}>
            "Break Free. Reclaim Your Confidence.” <span className="text-[#10B981]">Rise Up.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#ffffff]`}>
            “We’re here to help you <br className="sm:block hidden" />
            conquer social anxiety, one step at a time.”
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/Login"
              className="px-6 py-3 bg-[#10B981] text-white font-medium text-lg rounded-md shadow-lg hover:bg-[#0E8C6C] transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
            <a
              href="#about"
              className="px-6 py-3 bg-[#034752] text-white font-medium text-lg rounded-md shadow-lg hover:bg-[#023642] transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#10B981] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#10B981] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
