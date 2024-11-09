


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

interface Product {
  id: number;
  name: string;
  price: string;
  review: number;
  image: string;
  brand: string;
  intensity: string;
}

const products: Product[] = [
  { id: 1, name: "Floral Perfume", price: "$45", review: 4.5, image: "/assests/show5.webp", brand: "Brand A", intensity: "Medium" },
  { id: 2, name: "Luxury Cologne", price: "$65", review: 4.2, image: "/assests/him8.jpg", brand: "Brand B", intensity: "High" },
  { id: 3, name: "Ocean Breeze", price: "$55", review: 4.8, image: "/assests/b9.webp", brand: "Brand C", intensity: "Low" },
  { id: 4, name: "Rose Essence", price: "$50", review: 4.6, image: "/assests/best.jpg", brand: "Brand G", intensity: "Medium" },
  { id: 5, name: "Woodland Musk", price: "$60", review: 4.7, image: "/assests/bg.webp", brand: "Brand B", intensity: "High" },
  { id: 6, name: "Citrus Burst", price: "$40", review: 4.3, image: "/assests/onemore.jpg", brand: "Brand G", intensity: "Low" },
  { id: 7, name: "Amber Oud", price: "$70", review: 4.9, image: "/assests/him9.jpg", brand: "Brand D", intensity: "High" },
  { id: 8, name: "Lavender Mist", price: "$52", review: 4.3, image: "/assests/him10.jpg", brand: "Brand E", intensity: "Medium" },
  { id: 9, name: "Vanilla Dream", price: "$49", review: 4.6, image: "/assests/him12.jpg", brand: "Brand F", intensity: "Low" },
  { id: 9, name: "Cocktail", price: "$89", review: 4.6, image: "/assests/l1.webp", brand: "Brand D", intensity: "Low" },
  { id: 9, name: "Crayon", price: "$99", review: 4.9, image: "/assests/l2.jpg", brand: "Brand E", intensity: "Medium" },
  { id: 9, name: "Nostalija", price: "$39", review: 4.2, image: "/assests/l3.jpg", brand: "Brand F", intensity: "High" },
  
];

const PerfumeSlider: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState<string>("price-asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedIntensity, setSelectedIntensity] = useState<string>("all");
  // const [cart, setCart] = useState<Product[]>([]);

  // const addToCart = (product: Product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  //   alert(`${product.name} added to cart!`);
  // };

  const sortedProducts = [...products].sort((a, b) => {
    switch (selectedSort) {
      case "price-asc":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "price-desc":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "review-desc":
        return b.review - a.review;
      default:
        return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((product) => {
    if (selectedCategory === "all" && selectedBrand === "all" && selectedIntensity === "all") return true;
    return (
      (selectedCategory === "all" || product.name.toLowerCase().includes(selectedCategory)) &&
      (selectedBrand === "all" || product.brand.toLowerCase().includes(selectedBrand)) &&
      (selectedIntensity === "all" || product.intensity.toLowerCase().includes(selectedIntensity))
    );
  });

  return (
    <div
      className="flex flex-col lg:flex-row bg-cover bg-center min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/wp/202344/perfume-fragrance-captivating-a-fresh-and-natural-blend-of-autumn-melancholy-on-tree-bark_9930506.jpg!w700wp')",
      }}
    >
      {/* Sidebar Filters */}
      <aside className="bg-gray-900 text-white p-4 w-full lg:w-1/4 mb-4 my-4 lg:mb-0 rounded-r-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-600 underline">Filters</h2>

        {/* Sort Options */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Sort by:</label>
          <select
            className="w-8/12 mt-2 p-2 rounded bg-yellow-600 text-white"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="review-desc">Rating: High to Low</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Category:</label>
          <select
            className="w-7/12 mt-2 p-2 rounded bg-yellow-600 text-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="floral">Floral</option>
            <option value="woodland">Woodland</option>
            <option value="ocean">Ocean</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Brand:</label>
          <select
            className="w-6/12 mt-2 p-2 rounded bg-yellow-600 text-white"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="all">All Brands</option>
            <option value="brand a">Brand A</option>
            <option value="brand b">Brand B</option>
            <option value="brand c">Brand C</option>
            <option value="brand d">Brand D</option>
            <option value="brand e">Brand E</option>
            <option value="brand f">Brand F</option>
            <option value="brand g">Brand G</option>
          </select>
        </div>

        {/* Intensity Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Fragrance Intensity:</label>
          <select
            className="will-change-transform mt-2 p-2 rounded bg-yellow-600 text-white"
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value)}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 lg:p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 min-w-[150px] max-w-[200px] mx-auto"
            style={{ height: "auto" }} // This will keep the cards from growing too tall
          >
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="text-sm font-semibold text-white">{product.name}</h3>
            <p className="text-yellow-600 text-sm">{product.price}</p>
            <div className="flex items-center my-1">
              {Array.from({ length: 5 }, (_, index) =>
                index < Math.floor(product.review) ? (
                  <AiFillStar key={index} className="text-yellow-600" />
                ) : (
                  <AiOutlineStar key={index} className="text-yellow-600" />
                )
              )}
            </div>
            <button
              // onClick={() => addToCart(product)}
              className="w-full bg-yellow-600 text-white p-2 rounded-md flex justify-center items-center space-x-2 mt-2"
            >
              <BsCart2 /> <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeSlider;
