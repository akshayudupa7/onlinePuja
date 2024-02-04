"use client";
import React, { useState } from "react";
import Link from "next/link";
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
      <button className="text-white rounded-md focus:outline-none">
       Service
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
          {/* Dropdown items go here */}
          <div className="py-2 px-4 text-red cursor-pointer hover:bg-gray-200">
            <Link href="/service/paurohitya">
            Paurohitya
            </Link>
        
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <Link href="/service/puja">
          Puja
          </Link>
        
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <Link href="/service/cook">
          Cook
         </Link>
          
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <Link href="/service/astrology">
          Astrologer
         </Link>
          
          </div>
       
        </div>
      )}
    </div>
  );
};

export default Dropdown;
