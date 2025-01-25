import { SectionWrapper } from "./hoc";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const ctaItems = [
    {
      name: "Take the Assessment",
      description: "Discover your anxiety level with our AI-powered assessment tool.",
      action: "#assessment",
    },
    {
      name: "Join Role-Playing",
      description: "Practice social interactions and get AI-powered feedback.",
      action: "#roleplay",
    },
    {
      name: "Chat with AI Support",
      description: "Talk to our empathetic AI chatbot for immediate emotional support.",
      action: "#chat",
    },
    {
      name: "Explore Therapy Modules",
      description: "Access curated therapy exercises to overcome social anxiety.",
      action: "#therapy",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-10 py-16 bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
      {/* Section Header */}
      <h2 className="text-[#034752] text-4xl font-bold">
        Ready to Take the Next Step?
      </h2>
      <p className="text-[#034752] text-lg max-w-3xl">
        Empower yourself with our tools and resources to overcome social anxiety. 
        Take action now and break the barriers!
      </p>

      {/* Call to Action Button */}
      <div className="mt-8">
        <Link
          to="/Signup"
          className="bg-[#10B981] text-white text-lg font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#0e966f] transition-colors duration-300"
        >
          Start My Journey
        </Link>
      </div>

      {/* Supporting Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 mt-12">
        {ctaItems.map((item) => (
          <div
            key={item.name}
            className="bg-white shadow-md rounded-lg p-5 w-72 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-[#034752] text-xl font-bold">{item.name}</h3>
            <p className="text-[#10B981] text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Inspiration Quote */}
      <div className="mt-16 max-w-2xl text-center">
        <p className="text-[#034752] text-lg italic">
          "The journey of a thousand miles begins with a single step. Start yours today!"
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(CallToAction, "");
