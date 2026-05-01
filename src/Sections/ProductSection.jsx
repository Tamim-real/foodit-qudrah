import React from 'react';
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
        
        {/* Card 01 (100gm) */}
        <div className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card1}
            alt="Product 100gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
          {/* Clickable Overlay */}
          <div 
            className="absolute inset-0 w-full h-full"
            onClick={() => console.log("Order 100gm")}
          />
        </div>

        {/* Card 02 (200gm) */}
        <div className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card2}
            alt="Product 200gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
          <div 
            className="absolute inset-0 w-full h-full"
            onClick={() => console.log("Order 200gm")}
          />
        </div>

        {/* Card 03 (600gm) */}
        <div className="relative group flex flex-col items-center cursor-pointer">
          <img 
            src={Card3} 
            alt="Product 600gm" 
            className="w-full max-w-[340px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105" 
          />
          <div 
            className="absolute inset-0 w-full h-full"
            onClick={() => console.log("Order 600gm")}
          />
        </div>

      </div>

      <style>
        {`
          @keyframes lafano {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          /* Jodi proyojon hoy tobe 'animate-card' class-ti image-e add korte paren */
        `}
      </style>
    </section>
  );
};

export default ProductSection;