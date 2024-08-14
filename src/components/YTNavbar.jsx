import React from 'react';
import { CiSearch } from "react-icons/ci";

function YTNavbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <img
          className='h-5 cursor-pointer'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="YouTube Logo" className="h-8"
        />
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-2xl relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-gray-500"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 border-l border-gray-300 rounded-r-full hover:bg-gray-200">
            <CiSearch className='size-6 ' />
          </button>
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
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
              strokeWidth="2"
              d="M12 20l9 2-7-7 5-5-7-2-2-7-2 7-7 2 5 5-7 7 9-2z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
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
              strokeWidth="2"
              d="M15 12h.01M12 15h.01M9 12h.01M12 9h.01M12 15a2.5 2.5 0 002.5 2.5h.01A2.5 2.5 0 0017 15h1a3.5 3.5 0 00-3.5-3.5V11a2.5 2.5 0 012.5-2.5h.01A2.5 2.5 0 0015 6V5a3.5 3.5 0 00-3.5 3.5V9A2.5 2.5 0 0012 11v1.5H11a3.5 3.5 0 00-3.5-3.5H6a3.5 3.5 0 00-3.5 3.5v.01A2.5 2.5 0 003.5 14H5a3.5 3.5 0 00-3.5-3.5v.01A2.5 2.5 0 002 12h-.01A2.5 2.5 0 002 9h.01A2.5 2.5 0 005 6H6a3.5 3.5 0 00-3.5 3.5V10a3.5 3.5 0 00-3.5 3.5v.01A2.5 2.5 0 005 14h1a2.5 2.5 0 012.5-2.5H9a3.5 3.5 0 00-3.5-3.5V6a3.5 3.5 0 00-3.5-3.5V2a3.5 3.5 0 00-3.5 3.5v.01A2.5 2.5 0 005 6h.01A2.5 2.5 0 007.5 8.5H9a2.5 2.5 0 012.5 2.5v.01A2.5 2.5 0 0011 15H9.5z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
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
              strokeWidth="2"
              d="M5.121 11.037a5 5 0 017.66 0M7.05 13.09a3 3 0 014.9 0"
            />
          </svg>
        </button>
        <img
          src="/path/to/user-avatar.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav >
  );
}

export default YTNavbar;
