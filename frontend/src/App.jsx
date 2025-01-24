import { BrowserRouter } from "react-router-dom";
import { About, Contact, Tech, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-b from-[#D9F0FF] to-[#A8D8EA]">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        {/* About Section */}
        <About id="about" />
        
        {/* Technology Section */}
        <Tech />

        {/* Works Section */}
        <Works />

        {/* Contact Section */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div><Footer/></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
