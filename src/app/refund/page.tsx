import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.lovepik.com/photo/48016/6514.jpg_wh860.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Refund Policy</h1>
        <p className="text-gray-300 mb-4">
          We want our customers to be completely satisfied with their purchases If you are not satisfied with your purchase we are here to help
        </p>
        
        <h2 className="text-xl font-semibold mb-2 text-white">Eligibility for Refunds</h2>
        <p className="text-gray-300 mb-4">
          To be eligible for a refund your item must be unused and in the same condition that you received it It must also be in the original packaging
        </p>

        <h2 className="text-xl font-semibold mb-2 text-white">Timeframe</h2>
        <p className="text-gray-300 mb-4">
          You have 30 calendar days to request a refund after receiving your item
        </p>

        <h2 className="text-xl font-semibold mb-2 text-white">Refund Process</h2>
        <p className="text-gray-300 mb-4">
          To initiate a refund please contact our customer service team at support@example.com We will provide instructions on how to return your item
        </p>

        <h2 className="text-xl font-semibold mb-2 text-white">Non-Refundable Items</h2>
        <p className="text-gray-300 mb-4">
          Certain types of items cannot be returned including
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-white">Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about our refund policy please contact us at support@examplecom
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
