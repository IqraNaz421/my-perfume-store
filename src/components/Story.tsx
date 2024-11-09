"use client";
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className=" py-10 relative min-h-screen"> {/* Ensures the section takes full height */}
      {/* Background Image Div */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://img.pikbest.com/wp/202344/perfume-fragrance-captivating-a-fresh-and-natural-blend-of-autumn-melancholy-on-tree-bark_9930506.jpg!w700wp)',
          zIndex: -1, // Place background behind content
        }}
      >
        {/* Overlay with Opacity */}
        <div className=" bg-opacity-60 w-full h-full"></div>
      </div>

      {/* <h2 className="text-4xl font-bold text-center text-white mb-6">Our Story</h2> */}
      <div className="max-w-3xl mx-auto bg-black bg-opacity-90 p-8 rounded-lg shadow-lg space-y-4 md:space-y-6"> {/* Added spacing between paragraphs */}
      <h2 className="text-4xl font-bold text-center text-white mb-6">Our Story</h2>
        <p className="text-gray-300">
          Welcome to our story! We started this journey with a vision to create exceptional experiences for our customers Our passion for quality and dedication to excellence drive us to deliver the best services possible
        </p>
        <p className="text-gray-300">
          From humble beginnings we have grown into a trusted name in the industryec thanks to our loyal customers and hard-working team Every step we take is guided by our commitment to innovation and improvement
        </p>
        <p className="text-gray-300">
          We believe in the power of relationships and aim to foster lasting connections with our clients Your satisfaction is our top priority and we continuously strive to exceed your expectations
        </p>
        <p className="text-gray-300">
          Thank you for being a part of our journey We look forward to serving you for many years to come
        </p>
      </div>
    </div>
  );
};

export default OurStory;
