import React, { useState } from "react";
import { FaBell } from "react-icons/fa"; // Notification icon

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Event Management</h1>

        {/* Notification Button */}
        <button className="text-white relative">
          <FaBell size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMobileMenu} className="text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:flex md:items-center md:justify-center md:space-x-4 mt-2 ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 md:mt-0 mt-2">
          <li>
            <a href="/" className="text-white hover:text-gray-200 p-2">
              Home
            </a>
          </li>
          <li>
            <a href="/events" className="text-white hover:text-gray-200 p-2">
              Events
            </a>
          </li>
          <li>
            <a href="/add-event" className="text-white hover:text-gray-200 p-2">
              Add Event
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
