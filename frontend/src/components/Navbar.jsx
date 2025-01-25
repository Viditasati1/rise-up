import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { auth } from "../firebase/firebaseConfig"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut method for logging out

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null); // Track the logged-in user
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user state if logged in
      } else {
        setUser(null); // Set user to null if logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // Handle user sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out
      navigate("/"); // Redirect to the homepage after logging out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-[#A8D8EA] to-[#D9F0FF] shadow-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-9 h-9 object-contain logo" alt="logo" />
          <p className="text-[#034752] text-[20px] font-bold cursor-pointer flex">
            Rise Up&nbsp;
            <span className="sm:block hidden text-[#10B981]">
              | Break the Barriers
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-[#034752]" : "text-[#10B981]"
              } hover:text-[#034752] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}

          {/* Authentication Links */}
          {user ? (
            <li
              className="text-[#034752] hover:text-[#10B981] text-[18px] font-medium cursor-pointer"
              onClick={handleSignOut}
            >
              Logout
            </li>
          ) : (
            <li
              className="text-[#034752] hover:text-[#10B981] text-[18px] font-medium cursor-pointer"
              onClick={() => navigate("/Login")}
            >
              Login
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="p-6 bg-gradient-to-b from-[#A8D8EA] to-[#D9F0FF] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg">
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? "text-[#034752]" : "text-[#10B981]"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}

              {/* Authentication Links for Mobile */}
              {user ? (
                <li
                  className="text-[#034752] hover:text-[#10B981] font-medium text-[16px] cursor-pointer"
                  onClick={handleSignOut}
                >
                  Logout
                </li>
              ) : (
                <li
                  className="text-[#034752] hover:text-[#10B981] font-medium text-[16px] cursor-pointer"
                  onClick={() => navigate("/Login")}
                >
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
