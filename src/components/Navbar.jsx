import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Resume", to: "resume" },
    { label: "Certifications", to: "certifications" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-base">

        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-primary">Paritosh Sandhan</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-100} // Adjust for navbar height
                className="cursor-pointer hover:text-primary transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111]/80 px-4 py-3 backdrop-blur-sm border-t border-white/10">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-primary transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
