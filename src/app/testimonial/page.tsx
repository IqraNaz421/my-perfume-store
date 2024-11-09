
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'This service has completely changed my business Highly recommend',
      image: '/assests/c1.webp'
    },
    {
      name: 'Jane Smith',
      text: 'Fantastic experience The team was very professional and helpful',
      image: '/assests/c2.webp'
    },
    {
      name: 'Alice Johnson',
      text: 'I love the results Will definitely be back for more',
      image: '/assests/c3.jpeg'
    },
    {
      name: 'Bob Brown',
      text: 'The attention to detail was impressive Great job',
      image: '/assests/c4.webp'
    },
    {
      name: 'Emma Wilson',
      text: 'They exceeded my expectations Truly remarkable',
      image: '/assests/c5.jpg'
    },
    {
      name: 'Michael Lee',
      text: 'Excellent service I couldnot be happier',
      image: '/assests/c6.jpg'
    },
    {
      name: 'Olivia Martinez',
      text: 'Highly skilled team Will work with them again',
      image: '/assests/c7.webp'
    },
    {
      name: 'William Garcia',
      text: 'A wonderful experience from start to finish',
      image: '/assests/c8.jpg'
    },
    {
      name: 'Sophia Anderson',
      text: 'I highly recommend their services to everyone',
      image: '/assests/c9.webp'
    },
  ];

  return (
    <div className=' py-10 relative'>
      {/* Background Image Div */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-spraying-of-neckerchief-from-bottle-of-perfume-image_15860490.jpg)',
          zIndex: -1, 
        }}
      >
       
      </div>

      <h2 className='text-3xl font-bold text-center text-white mb-6'>What Our Clients Say</h2>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            style={{ margin: '10px' }} 
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className='rounded-full w-16 h-16 mb-4'
            />
            <p className='text-gray-400 mb-2'>'{testimonial.text}'</p>
            <h4 className='font-semibold text-white'>{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
