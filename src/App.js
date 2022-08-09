import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Notfound from './pages/NotFound';
import Navbar from './components/shared/Navbar';
import Cart from './pages/shop/Cart';
import Shipping from './pages/shop/Shipping';
import Billing from './pages/shop/Billing';
import Confirmation from './pages/shop/Confirmation';
import PostAd from './pages/ads/PostAd';
import Dashboard from './pages/Dashboard';




const App = () => {
  return (
    <div className="bg-white">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/shipping" element={<Shipping />} />
        <Route path="/cart/shipping/billing" element={<Billing />} />
        <Route path="/cart/shipping/billing/confirmation" element={<Confirmation />} />
        <Route path="/ad/post-ad" element={<PostAd />} />
        <Route path="*" exact={true} element={<Notfound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
