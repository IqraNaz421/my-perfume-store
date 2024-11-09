import React from 'react';

// AboutUs component
const AboutUs: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://img.lovepik.com/photo/48016/6514.jpg_wh860.jpg)' }}>
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
    </div>
  );
};

export default AboutUs;
