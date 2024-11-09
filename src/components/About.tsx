

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://img.pikbest.com/wp/202344/perfume-fragrance-captivating-a-fresh-and-natural-blend-of-autumn-melancholy-on-tree-bark_9930506.jpg!w700wp)' }}
      >
        {/* Overlay with Opacity */}
        <div className="bg-black bg-opacity-60 w-full h-full"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="mb-4 text-sm md:text-base">
          Welcome to our Perfume Shop where we are dedicated to providing you with the finest fragrances from around the world Our extensive collection features a diverse range of perfumes that cater to every taste and occasion
        </p>
        <p className="mb-4 text-sm md:text-base">
          At Perfume Shop we believe that a scent is more than just a fragrance its an experience Our team meticulously curates each product to ensure you find the perfect scent that resonates with your personality
        </p>
        <p className="text-sm md:text-base">
          Whether you are looking for a floral fruity or musky fragrance we have something for everyone Join us on this aromatic journey and discover the essence of true elegance and sophistication
        </p>
      </div>

      {/* Mega Sale Offer Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-yellow-600 text-white py-4 text-center font-bold">
        <div className="scrolling-banner">
          <p>🎉 Mega Sale Offer: Up to 50% OFF on All Perfumes! Limited Time Only! 🎉</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
