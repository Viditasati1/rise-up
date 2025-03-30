import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Dynamic Navigation Links
  const navLinks = [
    { id: "home", title: "Home", path: "/" },
    { id: "about", title: "About", path: "/about" },
    { id: "features", title: user ? "Dashboard" : "Features", path: user ? "/dashboard" : "/features" },
    { id: "contact", title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 bg-gradient-to-r from-[#cfe0e8] to-[#87bdd8] shadow-xl transition-all duration-300 ease-in-out`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} className="w-9 h-9 object-contain" alt="logo" />
          <p className="text-[#005f73] text-[20px] font-bold cursor-pointer flex">
            Rise Up&nbsp;
            <span className="sm:block hidden text-[#005f73]">| Break the Barriers</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className={`text-[#005f73] hover:text-[#023e4c] font-medium cursor-pointer transition-all duration-300 ease-in-out ${active === navLink.title ? "text-[#023e4c]" : ""}`} onClick={() => setActive(navLink.title)}>
              <Link to={navLink.path}>{navLink.title}</Link>
            </li>
          ))}

          {/* Authentication Links */}
          {user ? (
            <li className="text-[#005f73] hover:text-[#023e4c] text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out" onClick={handleSignOut}>
              Logout
            </li>
          ) : (
            <li className="text-[#005f73] hover:text-[#023e4c] text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out" onClick={() => navigate("/login")}>
              Login
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="p-6 bg-[#b7d7e8] absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => (
                <li key={navLink.id} className="text-[#005f73] hover:text-[#023e4c] font-medium cursor-pointer text-[16px] transition-all duration-300 ease-in-out" onClick={() => { setToggle(false); setActive(navLink.title); }}>
                  <Link to={navLink.path}>{navLink.title}</Link>
                </li>
              ))}

              {/* Authentication Links for Mobile */}
              {user ? (
                <li className="text-[#005f73] hover:text-[#023e4c] font-medium text-[16px] cursor-pointer transition-all duration-300 ease-in-out" onClick={handleSignOut}>
                  Logout
                </li>
              ) : (
                <li className="text-[#005f73] hover:text-[#023e4c] font-medium text-[16px] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => navigate("/login")}>
                  Login
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
