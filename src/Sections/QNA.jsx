import React, { useState } from 'react';
import bgImage from '../assets/images/bg-mobile-3.webp';
import qnaBadge from '../assets/images/qna.svg';

const QNA = () => {
    // State to manage which FAQ is open
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "কোন পার্শ্বপ্রতিক্রিয়া আছে..?",
            answer: "না, QUDRAH এ কোনো পার্শ্বপ্রতিক্রিয়া নেই। QUDRAH সম্পূর্ণ প্রাকৃতিক হারবাল উপাদান দিয়ে তৈরি যা আপনার শরীরের জন্য সম্পূর্ণ নিরাপদ।"
        },
        {
            question: "কতদিন খেতে হবে..?",
            answer: "সাধারণত ৭/১০ দিনের মধ্যেই পরিবর্তন অনুভব করা যায়। তবে ভালো ও দীর্ঘমেয়াদি ফলাফলের জন্য ৩-৪ মাস নিয়মিত ব্যবহার করা উত্তম।"
        },
        {
            question: "QUDRAH খেলে কি সমস্যার স্থায়ী সমাধান হবে..?",
            answer: "পৃথিবীর কোন বিষয়ই স্থায়ী না। কোন সমস্যা যেমন স্থায়ী না, ঠিক তেমনি কোন সমাধানও স্থায়ী না।সঠিক উপায়ে যে কোন সমস্যার সমাধান দীর্ঘমেয়াদি করা যায়। QUDRAH ন্যাচারাল হারবাল উপাদান দিয়ে তৈরি করা হয়েছে যা নিয়ম অনুযায়ী নিয়মিত খেলে দীর্ঘমেয়াদি সমস্যার সমাধান পাবেন ইনশাআল্লাহ।"
        },
        {
            question: "কারা QUDRAH খেতে পারবে..?",
            answer: "QUDRAH শুধু মাত্র বিবাহিত দের জন্য তৈরি করা হয়েছে, যারা দাম্পত্য জীবনে শারীরিক শক্তি, স্ট্যামিনা ও পারফরম্যান্স উন্নত করতে চান। (নারী ও পুরুষ উভয় জন খেতে পারবে)"
        },
        {
            question: "খাওয়ার নিয়ম..?",
            answer: "প্রতিদিন বা যে দিন প্রয়োজন, ১চা- চামচ QUDRAH পাউডার ১ গ্লাস কুসুম গরম পানি অথবা দুধের সাথে মিশিয়ে খেতে হবে। (রাত ৯টা থেকে ১০টার মধ্যে হালকা ভরা পেটে)"
        },
        {
            question: "চলমান অন্য ঔষুধ সেবনের সময় QUDRAH কি খাওয়া যাবে..?",
            answer: "QUDRAH ন্যাচারাল হারবাল প্রোডাক্ট হলেও, আপনি যদি বর্তমানে নিয়মিত কোন ওষুধ সেবন করে থাকেন, তাহলে এটি ব্যবহার করার আগে ডাক্তারের পরামর্শ নিয়ে খেতে হবে। কারণ বিভিন্ন ব্যক্তির শারীরিক অবস্থা ও ঔষুধের ধরনের উপর ভিত্তি করে প্রতিক্রিয়া ভিন্ন হতে পারে।"
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section 
            className="relative w-full flex flex-col items-center overflow-hidden bg-black  h-auto pb-3"
            style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%', 
                backgroundPosition: 'top center'
            }}
        >
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center pt-6 px-4 space-y-4 w-full max-w-2xl">
               
                <img src={qnaBadge} alt="qna" />

                {/* FAQ Accordion */}
                <div className="w-full space-y-4 ">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-yellow-600/30 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-4 text-left text-white font-medium focus:outline-none"
                            >
                                <span className="text-sm md:text-base">{item.question}</span>
                                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-yellow-600/10">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    );
};

export default QNA;