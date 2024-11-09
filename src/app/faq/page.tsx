import React from 'react';

const Faq: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://img.lovepik.com/photo/48016/6514.jpg_wh860.jpg')" }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">FAQs</h1>
        
        <div className="faq-card mb-4 p-4 bg-black bg-opacity-70 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">Q1 What is your service about</h3>
          <p className="text-gray-300">
            A We offer high-quality web development services for small to large businesses
          </p>
        </div>

        <div className="faq-card mb-4 p-4 bg-black bg-opacity-70 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">Q2 How can I contact support?</h3>
          <p className="text-gray-300">
            A You can contact support through our contact form available on the website
          </p>
        </div>

        <div className="faq-card mb-4 p-4 bg-black bg-opacity-70 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">Q3 Do you offer refunds</h3>
          <p className="text-gray-300">
            A Yes we offer refunds within 30 days of purchase under certain conditions
          </p>
        </div>

        <div className="faq-card mb-4 p-4 bg-black bg-opacity-70 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">Q4 How do I sign up</h3>
          <p className="text-gray-300">
            A Simply click on the Sign Up button on the homepage and follow the instructions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
