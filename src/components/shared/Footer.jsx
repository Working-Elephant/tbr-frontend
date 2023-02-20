import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2x.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { version } from "../../../package.json";
const Footer = () => {
  return (
    <footer className="bg-black w-full px-6  py-12 lg:px-12 mt-6 ">
      <div className=" md:11/12 xl:w-10/12 mx-auto">
        <div className="sm:grid grid-cols-5 md:grid-cols-12 gap-8">
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-4 mb-4 md:mb-0 ">
            <div className="flex justify-center items-center">
              <div className="w-full">
                <Link className="" to="/">
                  <div className="w-full">
                    <img src={Logo} alt="logo" className="h-full w-full" />
                  </div>
                </Link>
              </div>

              <div className="text-white w-50 text-start px-3">
                <h5 className="mb-2 ">TEXAS BULLY REGISTRY</h5>
                <p className="opacity-50 text-justify text-xxs leading-loose">
                  Website for buying, selling, and registering Bullies,
                  Frenchie, and Bulldogs
                </p>
                {/* <p className="text-sm">{version}</p> */}
              </div>
            </div>
          </div>
          <div className=" sm:col-span-3 md:col-span-6 lg:col-span-8  grid grid-cols-2 gap-3   lg:gap-6 lg:grid-cols-3  text-white  ">
            <div className="text-left ">
              <h4>QUICK LINKS</h4>
              <ul className="opacity-50 pl-0 list-none text-xs">
                <li className="my-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="my-3">
                  <Link to="/categories">Listings</Link>
                </li>
                <li className="my-3">
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="text-left ">
              <h4>TEXAS BULLY REGISTRY</h4>
              <ul className="opacity-50 text-xs ">
                <li className="my-3">
                  <Link to="/founders">Founders</Link>
                </li>
                {/* <li className="my-3">
                  <Link to="/">Bully News</Link>
                </li> */}
                <li className="my-3">
                  <Link to="/">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="text-left ">
              {/* <h4>CONTACT US</h4> */}
              {/* <ul className="opacity-50 text-xs">
                <li className="my-2">
                  Email Us: <span className="">support@texasregistry.com</span>
                </li>
              </ul> */}
              <div className="flex justify-start my-2 mt-10">
                <span className="pr-2">
                  <a
                    href="https://www.facebook.com/texasbullyregistry/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="text-white">
                      <FaFacebookF />
                    </i>
                  </a>
                </span>

                <span className="px-2">
                  <a
                    href="https://www.youtube.com/@texasbullyregistry7742"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="text-white">
                      <FaYoutube />
                    </i>
                  </a>
                </span>
                <span className="pl-2">
                  <a
                    href="https://www.instagram.com/texasbullyregistryllc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="text-white">
                      <FaInstagram />
                    </i>
                  </a>
                </span>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* <div className="text-white  text-start pl-12">
          <a
            href="https://workingelephant.com"
            target="_blank"
            className="ml-12 opacity-20 hover:opacity-100  "
          >
            POWERED BY WORKING ELEPHANT
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
