import React from 'react';
import Text8 from '../assets/images/text-8.svg'
import FooterBadge from '../assets/images/footer-badge.svg'


const Footer = () => {
    return (
        <div className='bg-[#17753B] py-5 flex items-center justify-center'>
            
            <div className='flex flex-col items-center gap-6'>
                    <img src={Text8} alt="text-8" />
            <img src={FooterBadge} alt="footer-badge" />
            </div>
        </div>
    );
};

export default Footer;