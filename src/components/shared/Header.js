import React from "react";
import HeaderImage from "../../assets/images/dog_banner2.jpeg";
import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import {IoPawOutline,IoLockClosedOutline} from "react-icons/io5"

const Header = () => {
  return (
    <div className=" h-screen ">
    <div
      className="w-full h-5/6  bg-no-repeat bg-cover text-center py-3 flex flex-col justify-end"
      style={{ backgroundImage: `url('${HeaderImage}')` }}
    >
      <div className=" ">
      <h2 className="text-xl md:text-3xl font-bold text-yellow">
        The Texas Bully Registry
      </h2>
      <h3 className="text-2xl  md:text-4xl font-bold text-white">
        Bully clasifies at your Paws
      </h3>
      <div className="w-5/6 lg:w-4/6 mx-auto my-4">
        <div className=" grid grid-cols-2 gap-1   md:gap-1 md:grid-cols-5 my-4">
          <input
            className=" p-3.5 text-sm mx-1 rounded mb-4 md:col-span-1 md:mb-2  focus:outline-none placeholder:text-sm placeholder:text-dark"
            placeholder="Categories"
          />
          <div className="bg-white flex items-center py-3 px-4 mb-4  md:mb-2 rounded col-span-2">
            <i className="text-grey">
              <FiSearch />
            </i>
            <input
              className="bg-white  focus:outline-none ml-3"
              placeholder="Search..."
            />
          </div>

          <input
            className="md:col-span-1 p-3.5 text-sm mx-1 rounded mb-4 md:mb-2  focus:outline-none placeholder:text-sm placeholder:text-dark"
            placeholder="Location"
          />
          <div className="md:col-span-1 mb-4  md:mb-2 mx-1">
            <button className=" bg-yellow py-4 px-12 rounded text-sm">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 lg:w-5/6 mx-auto my-4 ">
        <ul className=" grid grid-cols-2 gap-2   lg:gap-4 lg:grid-cols-4">
          <li className="mx-4 mb-4 ">
            <div className="flex items-center">
              <div className="bg-white text-dark rounded-3xl p-4">
                <FaSearch />
              </div>
              <div className="flex flex-col mx-2 text-start text-white">
                <p className="text-sm font-semibold mb-2">Bully Services</p>
                <p className="text-xs font-light">Local Dog Services</p>
              </div>
            </div>
          </li>
          <li className="mx-4 mb-4">
            <div className="flex items-center">
              <div className="bg-white text-dark rounded-3xl p-2">
               <i className="text-3xl"> <IoPawOutline /></i>
              </div>
              <div className="flex flex-col mx-2 text-start text-white">
                <p className="text-sm font-semibold mb-2">Pedigree Certificates</p>
                <p className="text-xs font-light">Simple and easy to update</p>
              </div>
            </div>
          </li>
          <li className="mx-4 mb-4">
            <div className="flex items-center">
            <div className="bg-white text-dark rounded-3xl p-2">
               <i className="text-3xl"> <IoLockClosedOutline /></i>
              </div>
              <div className="flex flex-col mx-2 text-start text-white">
                <p className="text-sm font-semibold mb-2">Secure Payment</p>
                <p className="text-xs font-light">100% secure payment</p>
              </div>
            </div>
          </li>
          <li className="mx-4 mb-4">
            <div className="flex items-center">
              <div className="bg-white text-dark rounded-3xl p-4">
                <FaSearch />
              </div>
              <div className="flex flex-col mx-2 text-start text-white">
                <p className="text-sm font-semibold mb-2">Communication Hub</p>
                <p className="text-xs font-light">Chat with other sellers and buyers</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div></div>
  );
};

export default Header;
