import React from "react";
import PetBannerImage from "../assets/images/dog_banner.jpeg";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import { BsDash } from "react-icons/bs";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { featuredAdsData, colors } from "../mockData/mockData";
import { FaCheck } from "react-icons/fa";

const Pets = () => {
  return (
    <div className="">
      <div
        className="w-full h-[30vh] bg-no-repeat bg-cover bg-center text-center py-3 flex flex-col justify-end"
        style={{ backgroundImage: `url('${PetBannerImage}')` }}
      >
        <div className=" m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Pets</h2>
        </div>
      </div>
      <div>
        <BreadCrumb />
      </div>
      <div className="p-5  w-full lg:w-11/12 xl:w-10/12 mx-auto  lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="hidden lg:block lg:col-span-2">
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">PRICES</h6>
              <i className="text-xs">
                <BsDash />
              </i>
            </div>
            <ul className="list-none my-4 text-xs">
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className="   mr-2 rounded  border-.5 border-borderGrey  checked:bg-yellow  focus:outline-none "
                    type="checkbox"
                  />
                  <span>Under $50</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span> $50 - $100</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span> $100 - $200</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span> $300 - $400</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span> $400 - $600</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span> $600 - $1000</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">COLORS</h6>
              <i className="text-xs">
                <BsDash />
              </i>
            </div>
            <ul className="list-none my-4 text-xs flex">
              {colors.map((color, i) => {
                return (
                  <li key={i} className="m-1">
                    <button
                      className={`h-6 w-6 text-white text-center bg-[${color}] `}
                    >
                      <i className="">
                        <FaCheck />
                      </i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">GENDER</h6>
              <i className="text-xs">
                <BsDash />
              </i>
            </div>
            <ul className="list-none my-4 text-xs">
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className="   mr-2 rounded  border-.5 border-borderGrey  checked:bg-yellow  focus:outline-none "
                    type="checkbox"
                  />
                  <span>Male</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span>Female</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">AGE</h6>
              <i className="text-xs">
                <BsDash />
              </i>
            </div>
            <ul className="list-none my-4 text-xs">
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className="   mr-2 rounded  border-.5 border-borderGrey  checked:bg-yellow  focus:outline-none "
                    type="checkbox"
                  />
                  <span>0 - 3 Months</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span>3 - 6 Months</span>{" "}
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span>6 - 12 Months</span>{" "}
                </div>
              </li>
              <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
                    type="checkbox"
                  />
                  <span>1 - 3 Years</span>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" lg:col-span-10 mt-4">
          <div className="text-end">
            <select className="border border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none">
              <option>Sort By</option>
              <option>Price</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {featuredAdsData.map((item, i) => {
              return <FeaturedAdsCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div> 
      <div className="flex items-center justify-center my-3">
            <Pagination total={35}/>
      </div>
    </div>
  );
};

export default Pets;
