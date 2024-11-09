

import React from 'react';
import Link from 'next/link';
import { TbPerfume } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 body-font">
      <div className="container mx-auto py-8 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a className="flex title-font font-medium items-center text-white mb-4">
          <TbPerfume className="h-8 w-8 text-yellow-800" />
            <span className="ml-3 text-xl">InnoVerse</span>
          </a>
          <p className="text-sm">Building the future with innovation and passion.</p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
         
          <nav className="list-none">
           
            <li>
              <a href="about" className="text-gray-400 hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <Link href="faq" className="text-yellow-600 hover:text-yellow-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="testimonial" className="text-yellow-600 hover:text-yellow-500">
                Testimonial
              </Link>
            </li>
            <li>
           
              <Link href="refund" className=" text-yellow-600 hover:text-yellow-500">
                Refund Policy
              </Link>
              
            </li>
            <li>
             
              <Link href="contact" className="text-gray-400 hover:text-yellow-500">
                Contact Us
              </Link>
              
            </li>
          </nav>
        </div>

        {/* Message Box */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-medium mb-4">Send Us a Message</h2>
          <form className="flex flex-col sm:flex-row justify-center md:justify-start">
            <input
              className="p-2 mb-4 sm:mb-0 sm:mr-4 w-full flex-grow bg-gray-700 text-white rounded"
              type="text"
              placeholder="Your Message"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media & Copyright Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 InnoVerse - All Rights Reserved
          </p>
          <div className="inline-flex space-x-4 mt-4 sm:mt-0">
            <a className="text-gray-400 hover:text-white">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-white">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-white">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
