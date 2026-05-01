import React from 'react';
import { Link } from 'react-scroll'; // react-scroll ইমপোর্ট করুন
import bgImage from '../assets/images/bg-mobile-1.webp';
import logo from '../assets/images/Logo.png';
import badge from '../assets/images/natural-badge.png';
import Text01 from '../assets/images/text-1.svg';
import Text02 from '../assets/images/text-2.svg';
import HeroBanner from '../Components/HeroBanner';
import Button from '../assets/images/btn-2.svg';

const Hero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col items-center">
      {/* ব্যাকগ্রাউন্ড ইমেজ */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative z-10 flex flex-col items-center pt-10 px-4">
        {/* লোগো */}
        <img src={logo} alt="FoodIt Logo" className="w-21 md:w-40 h-auto object-contain mb-3" />

        {/* ব্যাজ */}
        <img src={badge} alt="100% Natural Badge" className="w-[72%] max-w-[310px] h-auto object-contain" />

        <img src={Text01} alt="text-1" className='mt-7 mb-4 w-77' />

        <HeroBanner />

        <img src={Text02} className='mb-3 mt-4' alt="" />

        
        <Link 
          to="product-section" 
          smooth={true} 
          duration={800} 
          offset={20} 
        >
          <img
            src={Button}
            className="px-8 py-3 mb-3 rounded-3xl bg-[#FFC945] cursor-pointer transition-all duration-300 active:scale-90 hover:scale-105 animate-popup"
            alt="order-button"
          />
        </Link>

      </div>
    </section>
  );
};

export default Hero;