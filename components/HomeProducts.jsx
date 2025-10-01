import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const testProducts = [
  {
    _id: 'elec1',
    name: 'Retro Bluetooth Speaker',
    description: 'Vintage-style wireless speaker with 12h battery',
    offerPrice: '89',
    image: ['/products/retro bluetooth.jpeg'],
    rating: 4.2
  },
  {
    _id: 'elec2',
    name: 'Solar-Powered Power Bank',
    description: '10000mAh with dual charging ports',
    offerPrice: '65',
    image: ['/products/solar power bank.jpeg'],
    rating: 4.5
  },
  {
    _id: 'elec3',
    name: 'Ergonomic Vertical Mouse',
    description: 'Wireless ergonomic mouse for comfort',
    offerPrice: '45',
    image: ['/products/vertical mouse.jpg'],
    rating: 4.0
  },
  {
    _id: 'elec4',
    name: 'RGB Mechanical Keyboard',
    description: 'Customizable backlit gaming keyboard',
    offerPrice: '110',
    image: ['/products/RGB Mechanical Keyboard.jpg'],
    rating: 4.7
  }
];

const HomeProducts = () => {
  const { products, router } = useAppContext();
  const popularProducts = [...products, ...testProducts];

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {popularProducts.map((product, index) => (
          <ProductCard key={product._id || index} product={product} />
        ))}
      </div>
      <button 
        onClick={() => { router.push('/all-products') }} 
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
