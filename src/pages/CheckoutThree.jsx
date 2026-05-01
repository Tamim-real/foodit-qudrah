import React, { useState, useEffect } from "react";
import Qudraah100gm from '../assets/images/qudrah-three-jar.webp';

const CheckoutThree = () => {

  const [delivery, setDelivery] = useState(70); 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [toast, setToast] = useState({ show: false, message: "" });
  const [errors, setErrors] = useState({ phone: false });

  
  const [orderSuccess, setOrderSuccess] = useState(false);

  const productPrice = 7950;
  const total = productPrice + delivery;

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numberValue = value.replace(/\D/g, "");
      if (numberValue.length <= 11) {
        setFormData({ ...formData, [name]: numberValue });
        setErrors({ ...errors, phone: false });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return setToast({ show: true, message: "আপনার নাম লিখুন" });
    }

    const bdPhoneRegex = /^(013|014|015|016|017|018|019)\d{8}$/;
    if (!bdPhoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: true }); 
      return setToast({ show: true, message: "সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন" });
    }

    if (!formData.address.trim()) {
      return setToast({ show: true, message: "আপনার সম্পূর্ণ ঠিকানা লিখুন" });
    }

    
    setOrderSuccess(true);
    console.log("Order Submitted:", { ...formData, total });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[110] bg-red-600 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce">
          {toast.message}
        </div>
      )}

      {/* --- Success Popup --- */}
      {orderSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl"></div>

            {/* Success Icon Animation */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center animate-bounce">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">ধন্যবাদ!</h2>
            <h3 className="text-xl font-semibold text-green-700 mb-4">আপনার অর্ডার রিসিভ করা হয়েছে</h3>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              অর্ডারটি কনফার্ম করার জন্য খুব শীঘ্রই আমাদের প্রতিনিধি আপনাকে কল করবেন। অনুগ্রহ করে কলটি রিসিভ করবেন।
            </p>

            <button 
              onClick={() => {
                setOrderSuccess(false);
                setFormData({ name: "", phone: "", address: "" });
              }}
              className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto border-2 border-green-800 rounded-xl p-6 bg-white shadow">
        {/* Header */}
        <div className="bg-green-800 text-white text-center py-4 rounded-md mb-8">
          <h1 className="text-xl font-bold">অর্ডার কনফার্ম করতে</h1>
           <p className="text-sm leading-relaxed">
            আপনার নাম, মোবাইল নাম্বার <br />
            সম্পূর্ণ ঠিকানা দিয়ে অর্ডার কনফার্ম করুন
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-green-800">বিলিং এড্রেস</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                আপনার নাম <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="আপনার নাম লিখুন"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-1 ${errors.phone ? 'text-red-600' : 'text-gray-700'}`}>
                মোবাইল নাম্বার লিখুন *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
                className={`w-full border-2 rounded px-3 py-2 outline-none transition-colors ${
                  errors.phone ? "border-red-500 bg-red-50" : "border-green-700"
                }`}
              />
              <p className="text-xs text-red-500 mt-1">
                মোবাইল নাম্বার is required
              </p>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                আপনার সম্পূর্ণ ঠিকানা লিখুন *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="গ্রাম থানা ও জেলা সহ"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>

            {/* Delivery Section */}
            <div className="border rounded-md overflow-hidden mt-4">
              <label className="flex justify-between items-center px-4 py-3 border-b cursor-pointer">
                <div>
                  <input
                    type="radio"
                    name="delivery_option"
                    checked={delivery === 130}
                    onChange={() => setDelivery(130)}
                    className="mr-2"
                  />
                  ঢাকার বাহিরে:
                </div>
                <span>130৳</span>
              </label>

              <label className="flex justify-between items-center px-4 py-3 cursor-pointer">
                <div>
                  <input
                    type="radio"
                    name="delivery_option"
                    checked={delivery === 70}
                    onChange={() => setDelivery(70)}
                    className="mr-2"
                  />
                  ঢাকার ভিতরে:
                </div>
                <span>70৳</span>
              </label>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-green-800">আপনার অর্ডার</h2>
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <img src={Qudraah100gm} className="w-18 h-15" alt="qudraah-100gm-jar" />
                  <span>QUDRAH ন্যাচারাল herbal পাউডার - ৬০০ গ্রাম</span>
                </div>
                <span>× 1 {productPrice}৳</span>
              </div>
              <div className="flex justify-between mt-3">
                <span>Subtotal</span>
                <span>{productPrice}৳</span>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <span>Delivery Charge</span>
                <span>{delivery}৳</span>
              </div>
              <div className="flex justify-between mt-2 border-t pt-2 font-bold text-lg text-green-900">
                <span>Total</span>
                <span>{total}৳</span>
              </div>
            </div>

            <div className="bg-green-100 mt-6 p-4 rounded">
              <h3 className="font-semibold mb-2">ক্যাশ অন ডেলিভারি</h3>
              <p className="text-sm bg-white p-2 rounded">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</p>
            </div>

            <button type="submit" className="w-full mt-6 bg-green-800 hover:bg-green-900 transition-colors text-white py-3 rounded shadow text-lg font-semibold">
              অর্ডার কনফার্ম করুন {total}৳
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutThree;