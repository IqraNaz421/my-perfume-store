// app/products/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample data for perfumes with images, prices, and sizes
const perfumes = [
  {
    id: 1,
    name: "Eau de Parfum",
    brand: "Brand A",
    price: 59.99,
    size: "50ml",
    image: "/assests/show10.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Oriental Spice",
    brand: "Brand B",
    price: 79.99,
    size: "100ml",
    image: "/assests/show9.jpg",
  },
  {
    id: 3,
    name: "Ocean Breeze",
    brand: "Brand C",
    price: 49.99,
    size: "30ml",
    image: "/assests/show8.webp",
  },
  {
    id: 4,
    name: "Floral Dream",
    brand: "Brand D",
    price: 39.99,
    size: "50ml",
    image: "/assests/show7.jpeg",
  },
  {
    id: 5,
    name: "Woody Essence",
    brand: "Brand E",
    price: 89.99,
    size: "100ml",
    image: "/assests/show6.jpeg",
  },
  {
    id: 6,
    name: "Citrus Splash",
    brand: "Brand F",
    price: 44.99,
    size: "50ml",
    image: "/assests/show5.webp",
  },
  {
    id: 7,
    name: "Sweet Vanilla",
    brand: "Brand G",
    price: 49.99,
    size: "100ml",
    image: "/assests/show4.webp",
  },
  {
    id: 8,
    name: "Spicy Patchouli",
    brand: "Brand H",
    price: 69.99,
    size: "30ml",
    image: "/assests/show3.jpg",
  },
  {
    id: 9,
    name: "Musk Noir",
    brand: "Brand I",
    price: 74.99,
    size: "50ml",
    image: "/assests/show1.jpeg",
  },
  {
    id: 10,
    name: "Fresh Lavender",
    brand: "Brand J",
    price: 39.99,
    size: "100ml",
    image: "/assests/him12.jpg",
  },
  {
    id: 11,
    name: "Amber Gold",
    brand: "Brand K",
    price: 84.99,
    size: "30ml",
    image: "/assests/him12.jpg",
  },
  {
    id: 12,
    name: "Berry Blossom",
    brand: "Brand L",
    price: 59.99,
    size: "50ml",
    image: "/assests/him7.webp",
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <div className=" bg-black py-8">
     
      
       
     
      <div className="container mx-auto px-4">
        {/* <h1 className="text-2xl font-bold text-white mb-8 text-center">Our Perfumes Collection</h1> */}

        <h2 className="text-4xl font-bold text-center mb-10">
  <span className="text-white">Latest</span> 
  <span className="text-white">Collection</span>
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="bg-gray-900 p-4 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={500}
                height={500}
                className="w-full h-36 object-cover rounded"
              />
              <h2 className="text-lg font-bold text-white mt-2">{perfume.name}</h2>
              <p className="text-gray-400">{perfume.brand}</p>
              <p className="text-xl font-semibold text-yellow-500 mt-1">${perfume.price.toFixed(2)}</p>
              <p className="text-gray-400">{perfume.size}</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                Add to Cart
              </button>
             </div> 
          ))}
        </div>
      </div>
                <div className="flex justify-center mt-6 ">
                <button className="rounded bg-yellow-500 px-4 py-2 ">
      <Link className="cursor-pointer hover:bg-yellow-600 text-white " href="/">Back home</Link>
      </button>
                </div>
       
    </div>
  );
};

export default ProductShowcase;
