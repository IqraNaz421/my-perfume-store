import React from 'react';
import Image from 'next/image';


// Perfume data interface
interface Perfume {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// Sample perfume data for her
const perfumesForHer: Perfume[] = [
  { id: 1, name: 'lorem', price: 29.99, imageUrl:'/assests/her1.webp' },
  
  { id: 2, name: 'cannny', price: 39.99, imageUrl: '/assests/her2.jpg' },
 
  { id: 3, name: 'shelt', price: 49.99, imageUrl: '/assests/her3.webp' },
  { id: 4, name: 'bravo', price: 59.99, imageUrl: '/assests/her4.jpeg' },
  { id: 5, name: 'candy', price: 69.99, imageUrl: '/assests/her5.jpg' },
  { id: 6, name: 'foggy', price: 79.99, imageUrl: '/assests/her6.jpg' },
  { id: 7, name: 'remble', price: 89.99, imageUrl: '/assests/her7.jpg' },
  { id: 8, name: 'gorge', price: 99.99, imageUrl: '/assests/her8.webp' },
  { id: 9, name: 'lantly', price: 29.99, imageUrl: '/assests/her9.jpg' },
  { id: 10, name: 'classy', price: 39.99, imageUrl: '/assests/her10.webp' },
  { id: 11, name: 'bestest', price: 49.99, imageUrl: '/assests/her11.jpg' },
  { id: 12, name: 'centy', price: 59.99, imageUrl: '/assests/her12.jpg' },
];

// PerfumeCollectionForHer component
const PerfumeCollectionForHer: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-spraying-of-neckerchief-from-bottle-of-perfume-image_15860490.jpg)' }}>
        {/* Overlay with Opacity */}
        <div className="bg-black bg-opacity-60 w-full h-full"></div>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
        For Her
      </h1>

      {/* Perfume Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
        {perfumesForHer.map((perfume) => (
          <div key={perfume.id} className="relative bg-gray-900 text-white rounded-lg p-6 flex flex-col items-center">
            {/* 50% Off Tag */}
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
              50% OFF
            </div>
            <Image src={perfume.imageUrl} alt={perfume.name} width={500} height={500} className="w-36 h-36 mb-4 object-cover" />
            <h3 className="text-lg font-semibold text-center">{perfume.name}</h3>
            <p className="text-sm text-center">${perfume.price.toFixed(2)}</p>
            <button className="mt-2 bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeCollectionForHer;

