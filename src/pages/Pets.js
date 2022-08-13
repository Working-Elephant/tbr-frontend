import React, { useState, useEffect } from "react";
import PetBannerImage from "../assets/images/dog_banner.jpeg";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import { BsDash } from "react-icons/bs";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { FaCheck } from "react-icons/fa";
// import CustomCheckbox from "../components/shared/CustomCheckbox";
import { filterColors, featuredAdsData } from "../mockData/mockData";

const Pets = () => {
  const [filterView, setFilterView] = useState({
    prices: true,
    colors: true,
    gender: true,
    age: true,
  });
  const { prices, colors, gender, age } = filterView;

  const [perPage, setPerPage] = useState(5);
  const [firstIndex, setFirstIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  const total = Math.ceil(featuredAdsData.length / perPage);

  useEffect(() => {
    const lastIndex = firstIndex + perPage;
    setCurrentData(featuredAdsData.slice(firstIndex, lastIndex));
  }, [perPage, firstIndex]);

  const paginate = (ev) => {
    let newOffSet = (ev.selected * perPage) % featuredAdsData.length;
    setFirstIndex(newOffSet);
  };

  const togglePriceView = () => {
    setFilterView((filterView) => ({
      ...filterView,
      prices: !prices,
    }));
  };
  const toggleColorView = () => {
    setFilterView((filterView) => ({
      ...filterView,
      colors: !colors,
    }));
  };
  const toggleGenderView = () => {
    setFilterView((filterView) => ({
      ...filterView,
      gender: !gender,
    }));
  };
  const toggleAgeView = () => {
    setFilterView((filterView) => ({
      ...filterView,
      age: !age,
    }));
  };
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
              <i className="text-xs" onClick={togglePriceView}>
                <BsDash />
              </i>
            </div>
            {prices && (
              <ul className="list-none my-4 text-xs">
                <li className="mb-3">
                  <div className="flex items-center ">
                    <input
                      className="   mr-2 rounded  border-.5 border-borderGrey  checked:bg-yellow  focus:outline-none "
                      type="checkbox"
                    />
                    {/* <CustomCheckbox/> */}
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
            )}
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">COLORS</h6>
              <i className="text-xs" onClick={toggleColorView}>
                <BsDash />
              </i>
            </div>
            {colors && (
              <ul className="list-none my-4 text-xs flex">
                {filterColors.map((color, i) => {
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
            )}
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">GENDER</h6>
              <i className="text-xs" onClick={toggleGenderView}>
                <BsDash />
              </i>
            </div>
            {gender && (
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
            )}
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between border-b border-b-borderGrey">
              <h6 className="font-semibold  ">AGE</h6>
              <i className="text-xs" onClick={toggleAgeView}>
                <BsDash />
              </i>
            </div>
            {age && (
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
            )}
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
            {currentData.map((item, i) => {
              return <FeaturedAdsCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <Pagination total={total} perPage={perPage} paginate={paginate} />
      </div>
    </div>
  );
};

export default Pets;
