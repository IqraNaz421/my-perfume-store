// 'use client'
// import React from 'react';

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       text: "This service has completely changed my business! Highly recommend.",
//       image: "https://www.shutterstock.com/image-photo/business-portrait-businessman-using-laptop-260nw-2410741707.jpg",
//     },
//     {
//       name: "Jane Smith",
//       text: "Fantastic experience! The team was very professional and helpful.",
//       image: "https://thumbs.dreamstime.com/b/asian-muslim-woman-wearing-hijab-smiling-friendly-arms-crossed-against-gray-background-female-businesswoman-arab-indonesian-161318460.jpg",
//     },
//     {
//       name: "Alice Johnson",
//       text: "I love the results! Will definitely be back for more.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFtzAFvrgr5GRo1OgeA9EOddFwkoR_-e1Kw&s",
//     },
//     {
//       name: "Bob Brown",
//       text: "The attention to detail was impressive. Great job!",
//       image: "https://www.shutterstock.com/image-photo/single-mature-smiling-businessman-both-260nw-518289289.jpg",
//     },
//     {
//       name: "Emma Wilson",
//       text: "They exceeded my expectations. Truly remarkable!",
//       image: "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=",
//     },
//     {
//       name: "Michael Lee",
//       text: "Excellent service! I couldn't be happier.",
//       image: "https://www.shutterstock.com/shutterstock/photos/2350002273/display_1500/stock-photo-happy-mature-business-woman-entrepreneur-in-office-using-laptop-at-work-smiling-professional-2350002273.jpg",
//     },
//     {
//       name: "Olivia Martinez",
//       text: "Highly skilled team! Will work with them again.",
//       image: "https://thumbs.dreamstime.com/z/young-woman-working-office-alone-smiling-female-worker-engaged-business-activities-workplace-320122069.jpg",
//     },
//     {
//       name: "William Garcia",
//       text: "A wonderful experience from start to finish.",
//       image: "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
//     },
//     {
//       name: "Sophia Anderson",
//       text: "I highly recommend their services to everyone.",
//       image: "https://thumbs.dreamstime.com/b/happy-successful-professional-posing-near-office-building-young-african-american-business-woman-standing-outside-female-leader-187866264.jpg",
//     },
//   ];

//   return (
//     <div className="bg-black py-10">
//         <div 
//         className="absolute inset-0 bg-cover bg-center" 
//         style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-spraying-of-neckerchief-from-bottle-of-perfume-image_15860490.jpg)' }}>
//         {/* Overlay with Opacity */}
//         <div className="bg-black bg-opacity-60 w-full h-full"></div>
//       </div>
//       <h2 className="text-3xl font-bold text-center text-white mb-6">What Our Clients Say</h2>
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonials.map((testimonial, index) => (
//           <div 
//             key={index} 
//             className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in"
//             style={{ animationDelay: `${index * 0.1}s` }} // staggered animation
//           >
//             <img 
//               src={testimonial.image} 
//               alt={testimonial.name} 
//               className="rounded-full w-16 h-16 mb-4" 
//             />
//             <p className="text-gray-400 mb-2">"{testimonial.text}"</p>
//             <h4 className="font-semibold text-white">{testimonial.name}</h4>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.5s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Testimonials;


"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This service has completely changed my business! Highly recommend.",
      image: "https://www.shutterstock.com/image-photo/business-portrait-businessman-using-laptop-260nw-2410741707.jpg",
    },
    {
      name: "Jane Smith",
      text: "Fantastic experience! The team was very professional and helpful.",
      image: "https://thumbs.dreamstime.com/b/asian-muslim-woman-wearing-hijab-smiling-friendly-arms-crossed-against-gray-background-female-businesswoman-arab-indonesian-161318460.jpg",
    },
    {
      name: "Alice Johnson",
      text: "I love the results! Will definitely be back for more.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFtzAFvrgr5GRo1OgeA9EOddFwkoR_-e1Kw&s",
    },
    {
      name: "Bob Brown",
      text: "The attention to detail was impressive. Great job!",
      image: "https://www.shutterstock.com/image-photo/single-mature-smiling-businessman-both-260nw-518289289.jpg",
    },
    {
      name: "Emma Wilson",
      text: "They exceeded my expectations. Truly remarkable!",
      image: "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=",
    },
    {
      name: "Michael Lee",
      text: "Excellent service! I couldn't be happier.",
      image: "https://www.shutterstock.com/shutterstock/photos/2350002273/display_1500/stock-photo-happy-mature-business-woman-entrepreneur-in-office-using-laptop-at-work-smiling-professional-2350002273.jpg",
    },
    {
      name: "Olivia Martinez",
      text: "Highly skilled team! Will work with them again.",
      image: "https://thumbs.dreamstime.com/z/young-woman-working-office-alone-smiling-female-worker-engaged-business-activities-workplace-320122069.jpg",
    },
    {
      name: "William Garcia",
      text: "A wonderful experience from start to finish.",
      image: "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
    },
    {
      name: "Sophia Anderson",
      text: "I highly recommend their services to everyone.",
      image: "https://thumbs.dreamstime.com/b/happy-successful-professional-posing-near-office-building-young-african-american-business-woman-standing-outside-female-leader-187866264.jpg",
    },
  ];

  return (
    <div className=" py-10 relative">
      {/* Background Image Div */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-spraying-of-neckerchief-from-bottle-of-perfume-image_15860490.jpg)',
          zIndex: -1, // Place background behind content
        }}
      >
        {/* Overlay with Opacity */}
        {/* <div className="bg-black bg-opacity-60 w-full h-full"></div> */}
      </div>

      <h2 className="text-3xl font-bold text-center text-white mb-6">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }} // initial state
            animate={{ opacity: 1, y: 0 }} // animate to this state
            transition={{ duration: 0.5, delay: index * 0.1 }} // staggered animation
            style={{ margin: "10px" }} // add margin for spacing
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-16 h-16 mb-4"
            />
            <p className="text-gray-400 mb-2">"{testimonial.text}"</p>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
