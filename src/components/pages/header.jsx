import React, { useState } from "react";
import Headerbtn from "../ui/Headerbtn";
import { Home, Lightbulb, Code, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Active class with glassy button style, padding, and transition
  const getActiveClass = (path) => {
    return location.pathname === path
      ? "text-stone-200 bg-stone-800/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-stone-700/50 transition-all duration-300 ease-in-out"
      : "text-stone-500 transition-all duration-300 ease-in-out";
  };

  // Define navigation items once for consistency
  const navItems = [
    { name: "Home", to: "/", icon: <Home size={18} /> },
    { name: "Skills", to: "/skills", icon: <Lightbulb size={18} /> },
    { name: "Projects", to: "/projects", icon: <Code size={18} /> },
    { name: "Contact", to: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="relative mx-auto min-lg:w-[100vh]  w-[98%] rounded-3xl">
      <div className="mx-auto max-w-6xl px-6 py-3 transition-all duration-300 lg:px-12">
        <div className="flex items-center justify-between rounded-[25px] border border-stone-700 bg-stone-900 px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link aria-label="home" className="flex items-center space-x-2" to="/">
              <img
                className="w-10 rounded-full drop-shadow-lg transition-all duration-300 hover:scale-110"
                src= {logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-10 text-sm font-semibold tracking-wide">
              {navItems.map((item, index) => (
                <li key={index} className="relative flex items-center gap-2">
                  <Link
                    to={item.to}
                    className={`flex items-center gap-2 ${getActiveClass(
                      item.to
                    )} hover:text-stone-200`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub Button for Desktop */}
          <div className="hidden lg:flex gap-6">
            <Headerbtn />
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="block p-3 text-stone-300 lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-stone-900 w-full shadow-md animate-slide-down">
          <ul className="flex flex-col gap-4 p-4 text-sm text-stone-500">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={toggleMenu}
                  className={`block px-4 py-2 rounded-xl text-center ${getActiveClass(
                    item.to
                  )} hover:bg-stone-800 hover:text-stone-200`}
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* GitHub Button for Mobile */}
            <li className="max-lg:hidden">
              <Headerbtn />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
