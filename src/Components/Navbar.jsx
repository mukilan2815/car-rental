import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="flex lato-bold justify-between items-center px-5 py-3 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://www.moradhamdy.com/morad/traveltour-demo/images/files/logo.png"
          alt="Travelly Logo"
          className="h-8 mr-2"
        />
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#home"
            className="text-gray-700 focus:text-black hover:text-gray-900"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-gray-700 focus:text-black hover:text-gray-900"
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            href="#adventures"
            className="text-gray-700 focus:text-black hover:text-gray-900"
          >
            Car Rentals
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="text-gray-700 focus:text-black hover:text-gray-900"
          >
            Tour Packages
          </a>
        </li>
      </ul>
      <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-transparent border-2 border-yellow-400 font-normal">
        TAKE A TOUR
      </button>
    </nav>
  );
};

export default Navbar;
