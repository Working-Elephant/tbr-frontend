import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Notfound from "./pages/NotFound";
import Navbar from "./components/shared/Navbar";
import Cart from "./pages/shop/Cart";
import Shipping from "./pages/shop/Shipping";
import Billing from "./pages/shop/Billing";
import Confirmation from "./pages/shop/Confirmation";
import PostAd from "./pages/ads/PostAd";
import ViewAdDetails from "./pages/ads/ViewAdDetails";
// import Dashboard from "./pages/Dashboard";
import Ads from "./pages/dashboard/Ads";
import Messages from "./pages/dashboard/Messages";
import Categories from "./pages/Categories";
import Pets from "./pages/Pets";
import Search from "./pages/Search";
import { useMatch } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  const isHome = useMatch("/" || "/home");

  return (
    <div className="bg-white">
      <Wrapper>
        <Navbar home={isHome} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Navigate to="/dashboard/ads" />} />
          <Route path="/dashboard/ads" element={<Ads />} />
          <Route path="/dashboard/messages" element={<Messages />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/shipping" element={<Shipping />} />
          <Route path="/cart/shipping/billing" element={<Billing />} />
          <Route
            path="/cart/shipping/billing/confirmation"
            element={<Confirmation />}
          />
          <Route path="/ad/post-ad" element={<PostAd />} />
          <Route path="/ad/view/:id" element={<ViewAdDetails />} />
          <Route path="*" exact={true} element={<Notfound />} />
        </Routes>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default App;
