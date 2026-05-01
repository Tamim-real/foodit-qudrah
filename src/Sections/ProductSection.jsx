import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/images/qudrah-logo.svg';
import Card1 from '../assets/images/product-1.svg';
import Card2 from '../assets/images/product-2.svg';
import Card3 from '../assets/images/product-3.svg';

const ProductSection = () => {
  return (
    <section className="bg-white min-h-screen w-full flex flex-col items-center py-10 px-4">
      
      {/* 1. Top Logo & Title Image */}
      <div className="mb-12">
        <img 
          src={Logo} 
          alt="Qudrah Logo" 
          className="w-full max-w-[250px] h-auto object-contain" 
        />
      </div>

      {/* 2. Product Cards Layer */}
      <div className="flex flex-col items-center space-y-10 w-full">
        
        {/* Card 01 (100gm) - Route: /checkout-1 */}
        <Link to="/checkout-1" className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card1}
            alt="Product 100gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
        </Link>

        {/* Card 02 (200gm) - Route: /checkout-2 */}
        <Link to="/checkout-2" className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card2}
            alt="Product 200gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
        </Link>

        {/* Card 03 (600gm) - Route: /checkout-3 */}
        <Link to="/checkout-3" className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card3} 
            alt="Product 600gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
        </Link>

      </div>

      <style>
        {`
          @keyframes lafano {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
        `}
      </style>
    </section>
  );
};

export default ProductSection;