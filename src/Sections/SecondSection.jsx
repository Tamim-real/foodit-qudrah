import React from 'react';
import bgImage from '../assets/images/bg-mobile-2.webp';
import QudraahImg from '../assets/images/qudrah-img.webp';
import greenBadge from '../assets/images/badge-2.webp';
import Text3 from '../assets/images/text-3.svg';
import Text4 from '../assets/images/text-4.svg';
import Text5 from '../assets/images/text-5.svg';
import Text6 from '../assets/images/text-6.svg';
import badge3 from '../assets/images/badge-3.webp';
import Icons from '../assets/images/icons.svg';
import Button from '../assets/images/btn-2.svg'

const SecondSection = () => {
    return (
       
        <section
            className="relative h-auto w-full flex flex-col items-center overflow-hidden bg-black"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}
        >
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center pt-12 px-4 space-y-8 w-full">

                {/* Green Badge Image */}
                <img
                    src={greenBadge}
                    alt="Collect the best from the best"
                    className="w-[70%] max-w-[340px] h-auto object-contain"
                />

                <img src={Text3} className='w-[89%] max-w-[390px] h-auto' alt="text-3" />
                <img src={badge3} className='w-[89%] max-w-[390px] h-auto' alt="badge-3" />
                <img src={Text4} className='w-[89%] max-w-[390px] h-auto' alt="text-4" />
                <img src={Icons} className='w-[89%] max-w-[390px] h-auto' alt="icons" />

                <img
                    src={Button}
                    className="px-8 py-3 rounded-3xl bg-white cursor-pointer transition-all duration-300 active:scale-90 hover:scale-105 animate-popup"
                    alt="order-button"
                    onClick={() => console.log("Button Clicked!")}
                />

                <img src={Text5} alt="text-5" />
                <img src={Text6} alt="text-6" />
                <img src={QudraahImg} alt="qudraah-img" className='rounded-4xl' />

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