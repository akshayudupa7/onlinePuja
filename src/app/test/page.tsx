"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none">
        Hover for Dropdown
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
          {/* Dropdown items go here */}
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
            Option 1
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
            Option 2
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
