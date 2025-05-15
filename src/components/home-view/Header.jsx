import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menubar from "../../assets/menu-bar.png";
import { Link } from "react-scroll";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setMobileMenu(!mobileMenu);
  }
  return (
    <nav
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300
      ${
        sticky
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600"
      }
    `}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-70 h-auto" />

        <ul
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static left-0 top-20 w-full md:w-auto
  ${mobileMenu ? "block" : "hidden md:flex"}
  bg-white md:bg-transparent transition-all duration-300 ease-in shadow-md md:shadow-none`}
        >
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              offset={-260}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              className="rounded-xl  text-white px-4 py-2 border-2 border-white hover:bg-blue-700 transition duration-200 cursor-pointer"
            >
              Login
            </Link>
          </li>
        </ul>
        <img
          src={menubar}
          alt="menu icon"
          onClick={toggleMenu}
          className="w-8 h-8 md:hidden cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Header;
