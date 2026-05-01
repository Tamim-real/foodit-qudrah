import React, { useState, useEffect } from "react";

const CheckoutOne = () => {
  const [delivery, setDelivery] = useState(120);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [toast, setToast] = useState({ show: false, message: "" });
  // এরর ট্র্যাকিং এর জন্য নতুন স্টেট
  const [errors, setErrors] = useState({ phone: false });

  const productPrice = 550;
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
        // টাইপ করার সময় এরর স্টেট রিমুভ করে দেওয়া
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
      setErrors({ ...errors, phone: true }); // ভ্যালিডেশন ফেইল করলে ট্রু হবে
      return setToast({ show: true, message: "সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন" });
    }

    if (!formData.address.trim()) {
      return setToast({ show: true, message: "আপনার সম্পূর্ণ ঠিকানা লিখুন" });
    }

    alert("অর্ডার সফল হয়েছে!");
    console.log("Order Submitted:", { ...formData, total });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 relative">
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce">
          {toast.message}
        </div>
      )}

      <div className="max-w-5xl mx-auto border-2 border-green-800 rounded-xl p-6 bg-white shadow">
        {/* Header */}
        <div className="bg-green-800 text-white text-center py-4 rounded-md mb-8">
          <h1 className="text-xl font-bold">অর্ডার কনফার্ম করতে</h1>
          <p className="text-sm">
            আপনার নাম, মোবাইল নাম্বার এবং সম্পূর্ণ ঠিকানা অর্ডার কনফার্ম করুন
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

            {/* Phone - এখানে কন্ডিশনাল ক্লাস ব্যবহার করা হয়েছে */}
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
                // যদি errors.phone ট্রু হয় তবে লাল বর্ডার হবে, নয়তো গ্রিন বর্ডার
                className={`w-full border-2 rounded px-3 py-2 outline-none transition-colors ${
                  errors.phone ? "border-red-500 bg-red-50" : "border-green-700"
                }`}
              />
              <p className="text-xs text-red-500 mt-1">
                মোবাইল নাম্বার লিখুন is required
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

            {/* Delivery Section remains same... */}
            <div className="border rounded-md overflow-hidden mt-4">
              <label className="flex justify-between items-center px-4 py-3 border-b cursor-pointer">
                <div>
                  <input
                    type="radio"
                    name="delivery_option"
                    checked={delivery === 120}
                    onChange={() => setDelivery(120)}
                    className="mr-2"
                  />
                  ঢাকার বাহিরে:
                </div>
                <span>120৳</span>
              </label>

              <label className="flex justify-between items-center px-4 py-3 cursor-pointer">
                <div>
                  <input
                    type="radio"
                    name="delivery_option"
                    checked={delivery === 60}
                    onChange={() => setDelivery(60)}
                    className="mr-2"
                  />
                  ঢাকার ভিতরে:
                </div>
                <span>60৳</span>
              </label>
            </div>

            {/* Product info and Right Column logic continues as before... */}
            <h3 className="mt-8 font-bold text-lg">আপনার প্রোডাক্ট</h3>
            <div className="flex items-center justify-between bg-green-50 border mt-3 p-4 rounded">
              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/50" alt="" className="w-12 h-12" />
                <p>ন্যাচারাল পিনাট বাটার ক্রিম × 1</p>
              </div>
              <span>{productPrice}৳</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-green-800">আপনার অর্ডার</h2>
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <img src="https://via.placeholder.com/40" className="w-10 h-10" alt="" />
                  <span>ন্যাচারাল পিনাট বাটার ক্রিম</span>
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
              <p className="text-sm bg-white p-2 rounded">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</p>
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

export default CheckoutOne;