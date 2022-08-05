import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2x.png";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black p-8">
      <div className="sm:grid md:grid-cols-5 gap-8">
        <div className="sm:col-span-2 flex justify-center  mb-4 md:mb-0 ">
          <div className=""> 
          <Link className="flex items-center  " to="/">
            <img src={Logo} alt="logo"  />
          </Link>
          </div>
          <div className="text-white w-50 text-start px-4">
            <h5 className="mb-2 ">THE TEXAS BULLY REGISTRY</h5>
            <p className="opacity-50 text-justify text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
          </div>
        </div>
        <div class=" sm:col-span-3  grid grid-cols-2 gap-6   md:gap-6 md:grid-cols-3  text-white " >
          <div className="text-left "> 
            <h4>QUICK LINKS</h4>
            <ul  className="opacity-50 pl-0 list-none text-xs">
              <li className="my-3"><Link to="/">Home</Link></li>
              <li className="my-3"><Link to="/">Listings</Link></li>
              <li className="my-3"><Link to="/">Blog</Link></li>
              <li className="my-3"><Link to="/">Categories</Link></li>
            </ul>
          </div>
          <div className="text-left ">
            <h4>TEXAS BULLY REGISTRY</h4>
            <ul className="opacity-50 text-xs ">
              <li className="my-3"><Link to="/">About Us</Link></li>
              <li className="my-3"><Link to="/">FAQs</Link></li>
              <li className="my-3"><Link to="/">Bully News</Link></li>
              <li className="my-3"><Link to="/">Terms of Service</Link></li>
              <li className="my-3"><Link to="/">Contact Us</Link></li>
              <li className="my-3"><Link to="/">Sitemap</Link></li>
            </ul>
          </div>
          <div className="text-left ">
            <h4>CONTACT US</h4>
            <ul className="opacity-50 text-xs">
              <li className="my-2">Email Us: Support@texasregistry.Com</li>
            </ul>
            <div className="flex justify-start my-2 mt-10">
              <span className="pr-2"><Link to="/"><i className="text-white"><FaFacebookF/></i></Link></span>
              <span className="px-2"><Link to="/"><i className="text-white"><FaLinkedinIn/></i></Link></span>
              <span className="px-2"><Link to="/"><i className="text-white"><FaTwitter/></i></Link></span>
              <span className="pl-2"><Link to="/"><i className="text-white"><FaInstagram/></i></Link></span>
            </div>
            <div>
              <button className="bg-white text-dark p-3 mt-2 rounded font-semibold text-sm">CONTACT US</button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="text-white opacity-20 text-start pl-12">
        <p className="ml-6">POWERED BY WORKING ELEPHANT</p>
      </div>
    </footer>
  );
};

export default Footer;
