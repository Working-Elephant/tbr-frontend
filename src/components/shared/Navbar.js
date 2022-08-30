import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/images/logo.png";
import Backdrop from "@mui/material/Backdrop";

const Navbar = ({ home }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClose = () => {
    setMobileMenu(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav
      className={`w-full bg-transparent  px-6 pb-4 pt-6 md:pt-8   ${
        home ? " absolute top-0 text-white" : "border-b-.5 border-b-borderGrey"
      } `}
    >
      <div className=" md:w-10/12  lg:w-11/12 xl:w-10/12  mx-auto flex justify-between items-center  text-xs  md:text-sm lg:text-xs xl:text-sm ">
        <div className="">
          <Link className="flex items-center  " to="/">
            <img src={Logo} alt="logo" className="w-4/6" />
          </Link>
        </div>
        {/* nav items */}
        <ul className="hidden lg:flex  whitespace-nowrap">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/pets">Listing</Link>
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
        {/* Search */}
        {home ? null : (
          <div className="hidden px-2 md:block text-xs  xl:text-sm">
            <div className="bg-lightGrey w-full flex items-center justify-between py-3 px-5 rounded-xl ">
              <input
                className="bg-lightGrey w-5/6 focus:outline-none"
                placeholder="Search"
              />
              <i className="text-grey">
                <FiSearch />
              </i>
            </div>
          </div>
        )}
        {/* login and sign up buttons */}
        <div className=" hidden lg:flex items-center whitespace-nowrap">
          <span className="mr-5">
            <Link to="/login">Login</Link>
          </span>
          <button className="bg-yellow py-3 px-8 lg:px-12 rounded ">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>

        {/*  mobile menu icon */}
        <div className="lg:hidden text-end ">
          <button className="outline-none p-2 rounded focus:outline-none  ">
            <i className="text-xl" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </i>
          </button>

          {/* Mobile menu */}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={mobileMenu}
            onClick={handleClose}
          >
            <div
              className={`${
                mobileMenu
                  ? "flex absolute top-0 right-0 bg-white h-full w-1/2 md:w-2/6 text-[#333] shadow-lg rounded-tl-3xl rounded-bl-3xl pl-8  flex-col items-between overflow-y-auto"
                  : "hidden"
              } `}
            >
              <div className="">
                <div className="flex items-center justify-end">
                  <i className="text-xl text-end p-4" onClick={toggleMenu}>
                    <MdClose />
                  </i>
                </div>
                <ul className="text-start  mb-3">
                  <li className="py-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/pets">Listing</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/">Services</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/">Bully News</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/">About Us </Link>
                  </li>
                </ul>
              </div>

              <div className=" text-start flex flex-col text-sm pr-8">
                <span className="mb-5">
                  <Link to="/login">Login</Link>
                </span>
                <button className="bg-yellow py-3 px-8 lg:px-12 rounded ">
                  <Link to="/register">Sign Up</Link>
                </button>
              </div>
            </div>
          </Backdrop>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
