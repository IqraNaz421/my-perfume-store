
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <section
        className="body-font bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20231020/pngtree-natural-perfume-essence-embracing-nature-s-fragrance-against-dark-textured-backdrop-image_13684960.png')" }}
      >
        {/* Removed the gradient overlay to make the background image clearer */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1
              className="title-font sm:text-5xl text-5xl mb-4 font-extrabold text-white tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }} // Elegant serif font
              initial={{ y: -50, opacity: 0 }} // Start position
              animate={{ y: 0, opacity: 1 }} // End position
              transition={{ duration: 0.6 }} // Transition effect
            >
              Discover Your Signature Scent
            </motion.h1>
            <motion.p
              className="mb-8 leading-relaxed text-2xl font-semibold"
              style={{ color: "#f0e8d6", fontFamily: "'Merriweather', serif" }} // Luxurious font and color
              initial={{ opacity: 0 }} // Start position
              animate={{ opacity: 1 }} // End position
              transition={{ duration: 0.7, delay: 0.2 }} // Transition effect with delay
            >
              <span className="block">A <span className="text-yellow-500 font-semibold">Luxury Fragrance Collection</span></span>
              <span className="block">that awakens your senses.</span>
            </motion.p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <motion.button
                className="text-white bg-yellow-600 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-700 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
                onClick={() => window.location.href = 'products'} // onClick event added
              >
                View more
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
