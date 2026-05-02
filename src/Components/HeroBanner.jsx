import React from 'react';
import Banner from '../assets/images/hero-banner.svg'

const HeroBanner = () => {
  return (
    <div className="relative z-20 w-[340px] h-[178px] bg-[#D9D9D9] rounded-[25px] mx-auto shadow-2xl flex items-center justify-center overflow-hidden">
      <img 
        src={Banner}
        alt="Hero Banner" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default HeroBanner;