import React from 'react';
import CallerBtn from '../assets/images/caller-btn.svg'
import Text7 from '../assets/images/text-7.svg'

const CallSection = () => {
    return (
        <div className='bg-black py-5 flex items-center justify-center'>
            <div className='flex flex-col items-center gap-6'>
                {/* টেক্সট ইমেজ */}
                <img src={Text7} alt="text-7" className="w-full max-w-md" />

                
                <a href="tel:09617475353" className="block transition-transform duration-300 hover:scale-110 active:scale-90">
                    <img 
                        src={CallerBtn} 
                        alt="call-btn" 
                        className="animate-popup-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                    />
                </a>

                
                <style jsx>{`
                    @keyframes popup-pulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.15);
                        }
                    }
                    .animate-popup-pulse {
                        animation: popup-pulse 1.5s ease-in-out infinite;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default CallSection;