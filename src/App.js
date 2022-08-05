import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Notfound from './pages/NotFound';
import Navbar from './components/shared/Navbar';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" exact={true} element={<Notfound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
