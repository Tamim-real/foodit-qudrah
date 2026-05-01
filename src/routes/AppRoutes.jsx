import { Routes, Route } from 'react-router-dom';
import App from '../App'; // Home Page হিসেবে App.jsx ব্যবহার হচ্ছে
import CheckoutOne from '../pages/CheckoutOne';
import CheckoutTwo from '../pages/CheckoutTwo';
import CheckoutThree from '../pages/CheckoutThree';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route (App.jsx) */}
      <Route path="/" element={<App />} />

      {/* Checkout Routes */}
      <Route path="/checkout-1" element={<CheckoutOne />} />
      <Route path="/checkout-2" element={<CheckoutTwo />} />
      <Route path="/checkout-3" element={<CheckoutThree />} />

     
      <Route path="*" element={<div className="text-center py-20">Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;