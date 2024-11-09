import React from 'react';

const Contact: React.FC = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.lovepik.com/photo/48016/6514.jpg_wh860.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 rounded bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
