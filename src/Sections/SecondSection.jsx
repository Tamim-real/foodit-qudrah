import React from 'react';
import bgImage from '../assets/images/bg-mobile-2.webp';
import QudraahImg from '../assets/images/qudrah-img.webp';
import greenBadge from '../assets/images/badge-2.webp';
import Text2 from '../assets/images/text-2.svg';
import Text5 from '../assets/images/text-5.svg';
import Text6 from '../assets/images/text-6.svg';

import Icons from '../assets/images/icons.svg';
import Button from '../assets/images/btn-2.svg'
import { Link } from 'react-scroll';

const SecondSection = () => {
    return (

        <section
            className="relative h-auto w-full flex flex-col items-center overflow-hidden bg-black "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}
        >
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center pt-3 px-4 space-y-4 w-full">

                {/* Green Badge Image */}
                <img
                    src={greenBadge}
                    alt="Collect the best from the best"
                    className="w-[70%] max-w-[340px] h-auto object-contain"
                />

                <img src={Text5} alt="text-5" />
                <img src={Text6} alt="text-6" />

                <img src={QudraahImg} alt="qudraah-img" className='rounded-4xl w-80' />

                <div className="   rounded-[32px] shadow-sm max-w-lg mx-auto">
                    <p className="text-[19px] md:text-[21px]  text-white font-bold text-center">
                        <span className="block  text-white">
                            বিবাহিত জীবনে এমন সমস্যা হওয়া
                            <span className="relative inline-block ml-1 px-2 py-0.5 font-bold">
                                নতুন কিছু না।
                                <span className="absolute bottom-0 left-0 w-full h-[6px]  -z-10 rounded-full"></span>
                            </span>
                        </span>

                        <span className="block text-white">
                            আর এই সমস্যার সমাধান করা
                            <span className="relative inline-block ml-1 px-2 py-0.5 font-bold">
                                কঠিন বিষয় না।
                                <span className="absolute bottom-0 left-0 w-full h-[6px] -z-10 rounded-full"></span>
                            </span>
                        </span>
                    </p>
                </div>
                <img src={Icons} className='w-[89%] max-w-[390px] h-auto' alt="icons" />
                <img src={Text2} alt="" />

                <Link
                    to="product-section"
                    smooth={true}
                    duration={800}
                    offset={20}
                ><img
                        src={Button}
                        className="px-8 py-3 rounded-3xl bg-white cursor-pointer transition-all duration-300 active:scale-90 hover:scale-105 animate-popup"
                        alt="order-button"
                        onClick={() => console.log("Button Clicked!")}
                    /></Link>




                <style>
                    {`
                        @keyframes pulse-zoom {
                          0%, 100% { transform: scale(1); }
                          50% { transform: scale(1.08); }
                        }
                        .animate-popup {
                          animation: pulse-zoom 1.5s ease-in-out infinite;
                        }
                    `}
                </style>
            </div>
        </section>
    );
};

export default SecondSection;