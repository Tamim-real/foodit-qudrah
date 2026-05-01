import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx'; 
import CheckoutOne from '../pages/CheckoutOne.jsx';
import CheckoutTwo from '../pages/CheckoutTwo.jsx';
import CheckoutThree from '../pages/CheckoutThree.jsx';
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