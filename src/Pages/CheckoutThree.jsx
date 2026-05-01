import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Phone, MapPin, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';

const CheckoutThree = () => {
  const [deliveryCharge, setDeliveryCharge] = useState(60);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [toast, setToast] = useState({ show: false, message: '' });
  const productPrice = 1450;

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, message: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (msg) => setToast({ show: true, message: msg });

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address } = formData;
    if (!name.trim()) return showToast("অনুগ্রহ করে আপনার নাম লিখুন");
    const bdPhoneRegex = /^(013|014|015|016|017|018|019)\d{8}$/;
    if (!bdPhoneRegex.test(phone)) return showToast("সঠিক ফোন নম্বর দিন");
    if (!address.trim()) return showToast("আপনার সম্পূর্ণ ঠিকানা লিখুন");
    alert("অর্ডার সফল হয়েছে!");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 md:py-16 px-4 font-bangla">
      {/* Dynamic Toast */}
      {toast.show && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in zoom-in slide-in-from-top-4 duration-300">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Top Branding/Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            অর্ডারটি সম্পন্ন করুন
          </h1>
          <p className="text-slate-500 text-sm md:text-base flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-600" /> আপনার নাম, নাম্বার ও ঠিকানা
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Shipping Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-green-700" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">বিলিং ইনফরমেশন</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Input Name */}
                <div className="group">
                  <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">
                    আপনার নাম *
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="আপনার নাম" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-200 bg-slate-50/50 focus:bg-white text-slate-700 placeholder:text-slate-400"
                  />
                </div>

                {/* Input Phone */}
                <div className="group">
                  <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">
                    মোবাইল নাম্বার *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="017XXXXXXXX" 
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-200 bg-slate-50/50 focus:bg-white text-slate-700"
                    />
                  </div>
                </div>

                {/* Input Address */}
                <div className="group">
                  <label className="block text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">
                    সম্পূর্ণ ঠিকানা *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <textarea 
                      rows="3"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="বাসা নং, রোড নং, গ্রাম, থানা ও জেলা" 
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-200 bg-slate-50/50 focus:bg-white text-slate-700 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Charge Selection */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-6">ডেলিভারি এলাকা</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${deliveryCharge === 60 ? 'border-green-600 bg-green-50/50' : 'border-slate-100 hover:border-slate-200'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" checked={deliveryCharge === 60} onChange={() => setDeliveryCharge(60)} className="w-5 h-5 accent-green-600" />
                    <span className="font-semibold text-slate-700">ঢাকার ভিতরে</span>
                  </div>
                  <span className="font-bold text-green-700">৳ ৬০</span>
                </label>

                <label className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${deliveryCharge === 120 ? 'border-green-600 bg-green-50/50' : 'border-slate-100 hover:border-slate-200'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" checked={deliveryCharge === 120} onChange={() => setDeliveryCharge(120)} className="w-5 h-5 accent-green-600" />
                    <span className="font-semibold text-slate-700">ঢাকার বাহিরে</span>
                  </div>
                  <span className="font-bold text-green-700">৳ ১২০</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary Card */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-slate-900 rounded-[32px] p-6 md:p-8 text-white shadow-2xl shadow-slate-200 overflow-hidden relative">
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-bold">অর্ডার সামারি</h2>
              </div>

              {/* Product Item Card */}
              <div className="bg-slate-800/50 rounded-2xl p-4 mb-8 border border-slate-700 flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-xl p-1 flex-shrink-0">
                  <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[15px] leading-tight mb-1">Qudrah হারবাল পাউডার ১০০ গ্রাম</h3>
                  <p className="text-slate-400 text-sm font-medium">পরিমাণ: ১ টি</p>
                  <p className="text-green-400 font-bold mt-1">৳ ১৪৫০</p>
                </div>
              </div>

              {/* Calculation */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>সাবটোটাল</span>
                  <span className="text-white">৳ {productPrice}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="text-white">৳ {deliveryCharge}</span>
                </div>
                <div className="h-px bg-slate-700 my-2"></div>
                <div className="flex justify-between items-end">
                  <div className="text-slate-400 font-medium">সর্বমোট মূল্য</div>
                  <div className="text-3xl font-black text-green-400">৳ {productPrice + deliveryCharge}</div>
                </div>
              </div>

              {/* Payment Method Badge */}
              <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 mb-8 border border-white/10">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-sm font-medium text-slate-200 leading-tight">
                   পণ্য হাতে পেয়ে টাকা পরিশোধ করুন
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
              >
                অর্ডার কনফার্ম করুন
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutThree;