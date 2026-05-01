import React from 'react';
import CallerBtn from '../assets/images/caller-btn.png'
import Text7 from '../assets/images/text-7.svg'

const CallSection = () => {
    return (
        <div className='bg-black py-5 flex items-center justify-center'>
            <div className='flex flex-col items-center gap-6'>
                {/* টেক্সট ইমেজ */}
                <img src={Text7} alt="text-7" className="w-full max-w-md" />

                {/* কল বাটন */}
                <a href="tel:09617475353" className="transition-transform hover:scale-105">
                    <img src={CallerBtn} alt="call-btn" />
                </a>
            </div>
        </div>
    );
};

export default CallSection;