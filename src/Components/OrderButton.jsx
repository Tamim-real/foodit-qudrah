import React from 'react';

const OrderButton = () => {
  return (
    <div className="flex justify-center items-center py-6">
      {/* 
        Custom Animation: 
        'animate-pulse-slow' class-ti nicher style tag-e define kora hoyeche.
        Eta button-ke smooth-ly boro ebong choto korbe.
      */}
      <style>
        {`
          @keyframes custom-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-lafano {
            animation: custom-pulse 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <button 
        className="bg-[#FFCC4D] hover:bg-[#ffbd1a] px-8 py-2 rounded-full transition-all duration-200 animate-lafano active:scale-95"
        onClick={() => console.log("Ordering...")}
      >
        <span className="text-black text-xl font-bold">
          অর্ডার করুন
        </span>
      </button>
    </div>
  );
};

export default OrderButton;