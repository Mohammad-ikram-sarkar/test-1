import React from 'react';

export default function Headerbtn() {
  return (
    /* From Uiverse.io by EcheverriaJesus */
    /* From Uiverse.io by EcheverriaJesus */
    <button
      className="flex items-center gap-3 border px-4 py-2 rounded-lg 
      bg-gradient-to-r from-gray-800 to-gray-900 text-white
      hover:from-gray-700 hover:to-gray-800 
      transition-all duration-300 shadow-md hover:shadow-lg
      border-gray-700"
    >
      <span className="flex items-center justify-center gap-1">
        <i className="fa-brands fa-github text-xl"></i>
        <span className="font-medium">Github</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
}
