import React from "react";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import { BsDash } from "react-icons/bs";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { featuredAdsData, colors, categories } from "../mockData/mockData";
import { FaCheck } from "react-icons/fa";

const Search = () => {
  return (
    <div className="">
      <div>
        <BreadCrumb />
      </div>
      <div className="p-5  w-full md:w-11/12 xl:w-10/12 mx-auto  md:grid md:grid-cols-12 md:gap-6 ">
        <div className="hidden md:block md:col-span-4 lg:col-span-2 md:mt-[5rem]">
        <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">CATEGORIES</h6>
              <i className="text-xs">
                <BsDash />
              </i>
            </div>
            <ul className="list-none my-4 text-xs ">
              {categories.map((category, i) => {
                return (
                  <li className="mb-3">
                <div className="flex items-center ">
                  <input
                    className="   mr-2 rounded  border-.5 border-borderGrey  checked:bg-yellow  focus:outline-none "
                    type="checkbox"
                  />
                  <span>{category}</span>
                </div>
              </li>
                );
              })}
            </ul>
          </div>
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
        <div className=" md:col-span-8 lg:col-span-10 mt-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm"><span className="font-bold">3030</span> Results for <span className="font-bold">Bulldog</span></p>
            <select className="border border-borderGrey mb-5 py-2 px-3 text-sm focus:outline-none">
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
  )
}

export default Search