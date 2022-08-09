import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="w-full bg-transparent  px-6 py-3 md:px-10 lg:px-15  border-.5 border-borderGrey ">
      <div className="  mx-auto flex justify-between items-center  text-sm  md:text-xs xl:text-sm">
        <div className="">
          <Link className="flex items-center  " to="/">
            <img src={Logo} alt="logo" className="w-3/4" />
          </Link>
        </div>

        <ul className="hidden md:flex text-sm ">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Listing</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Services</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Bully News</Link>
          </li>
          <li className="mx-3">
            <Link to="/">About Us </Link>
          </li>
        </ul>

        <div className="hidden md:block text-sm  md:text-xs xl:text-sm">
          <div className="bg-lightGrey flex items-center justify-between py-3 px-5 rounded-xl ">
            <input
              className="bg-lightGrey w-100 focus:outline-none"
              placeholder="Search"
            />
            <i className="text-grey">
              <FiSearch />
            </i>
          </div>
        </div>
        <div className=" hidden md:flex items-center ">
          <span className="mr-5"><Link to="/login">Login</Link></span>
          <button className="bg-yellow py-3 px-8 rounded "><Link to="/register">Sign Up</Link></button>
        </div>

        {/*  mobile menu icon */}
        <div className="md:hidden text-end ">
          <button className="outline-none p-2 rounded ">
            {mobileMenu ? (
              <i className="text-xl" onClick={toggleMenu}>
                <MdClose />
              </i>
            ) : (
              <i className="text-xl" onClick={toggleMenu}>
                <GiHamburgerMenu />
              </i>
            )}
          </button>

          {/* Mobile menu */}

          <div className={`${mobileMenu ? "block" : "hidden"} `}>
            <ul className="">
              <li className="active">
                <a
                  href="index.html"
                  className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
