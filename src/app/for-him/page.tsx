import React from 'react';
import Image from 'next/image';


// Perfume data interface
interface Perfume {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// Sample perfume data
const perfumes: Perfume[] = [
  { id: 1, name: 'lorem', price: 29.99, imageUrl: '/assests/him1.webp' },
  { id: 2, name: 'canny', price: 39.99, imageUrl: '/assests/him2.jpg' },
  { id: 3, name: 'doryam', price: 49.99, imageUrl: '/assests/him3.jpg' },
  { id: 4, name: 'kentle', price: 59.99, imageUrl: '/assests/him4.jpg' },
  { id: 5, name: 'gramery', price: 69.99, imageUrl: '/assests/him5.jpg' },
  { id: 6, name: 'lotus', price: 79.99, imageUrl: '/assests/him6.jpg' },
  { id: 7, name: 'bravo', price: 89.99, imageUrl: '/assests/him7.webp' },
  { id: 8, name: 'contlat', price: 99.99, imageUrl: '/assests/him8.jpg' },
  { id: 9, name: 'familer', price: 29.99, imageUrl: '/assests/him10.jpg' },
  { id: 10, name: 'tontle', price: 39.99, imageUrl: '/assests/him11.webp' },
  { id: 11, name: 'rooof', price: 49.99, imageUrl: '/assests/him12.jpg' },
  { id: 12, name: 'harvest', price: 59.99, imageUrl: '/assests/him9.jpg' },
];

// PerfumeCollection component
const PerfumeCollection: React.FC = () => {
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
        For Him
      </h1>

      {/* Perfume Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
        {perfumes.map((perfume) => (
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

export default PerfumeCollection;
