
"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { TbPerfume } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart state on click
  };

  return (
    <header className="bg-gray-900 text-white shadow-md relative z-50"> {/* Added relative and z-index */}
      <div className="container mx-auto p-5 flex flex-wrap items-center justify-between">
        {/* Left Side (Logo and Brand) */}
        <div className="flex items-center">
          <TbPerfume className="h-8 w-8 text-yellow-800" />
          <span className="ml-2 text-xl font-bold text-white">InnoVerse</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-6">
          <Link href="/" className="hover:text-yellow-500 text-yellow-500">   
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About Us
          </Link>
          <Link href="/for-her" className="hover:text-yellow-500">
            For Her
          </Link>
          <Link href="/for-him" className="hover:text-yellow-500">
            For Him
          </Link>
          <Link href="/testimonial" className="hover:text-yellow-500">
            Testimonials
          </Link>
          <Link href="/faq" className="hover:text-yellow-500">
            FAQs
          </Link>
        </nav>

        {/* Right Side (Search and Cart) */}
        <div className="flex items-center space-x-4">
          <CiSearch className="h-6 w-6 cursor-pointer hover:text-yellow-500" />
          {/* Cart Icon with onClick */}
          <BsCart2 className="h-6 w-6 cursor-pointer hover:text-yellow-500" onClick={toggleCart} />

          {/* Mobile Menu Toggle */}
          <button onClick={toggleNavbar} className="md:hidden p-2 focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            {/* Close Icon */}
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900`}>
        <nav className="flex flex-col items-start p-4 space-y-2">
          <Link href="/" className="block px-4 py-2 text-white hover:text-yellow-500 rounded">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:text-yellow-500 rounded">
            About Us
          </Link>
          <Link href="/for-her" className="block px-4 py-2 text-white hover:text-yellow-500 rounded">
            For Her
          </Link>
          <Link href="/for-him" className="block px-4 py-2 text-white hover:text-yellow-500 rounded">
            For Him
          </Link>
          <Link href="/testimonial" className="hover:text-yellow-500 block px-4 py-2 text-white rounded">
            Testimonials
          </Link>
          <Link href="/faq" className="hover:text-yellow-500 block px-4 py-2 text-white rounded">
            FAQs
          </Link>
        </nav>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-16 right-0 bg-yellow-500 text-white w-64 p-4 shadow-lg rounded z-50">
          {/* Ensure higher z-index */}
          <h3 className="text-lg font-bold mb-4 ">Your Cart</h3>
          <p>No items in the cart yet!</p>
        </div>
      )}
    </header>
  );
};

export default Navbar;





