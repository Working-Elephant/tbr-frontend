import React, { useState } from "react";
import { BsDash } from "react-icons/bs";
import { filterColors, categories } from "../../mockData/mockData";
import { CustomCheckbox, CustomColorFilter } from "../../components/shared";

const Filter = ({ showCategory }) => {
  const [filterView, setFilterView] = useState({
    prices: true,
    colors: true,
    gender: true,
    age: true,
  });
  const { prices, colors, gender, age } = filterView;

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
    <div>
      {showCategory && (
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
      )}
      <div className="mb-3">
        <div className="flex items-center justify-between border-b border-b-borderGrey text-[#464646]">
          <h6 className="font-semibold  ">PRICES</h6>
          <i className="text-xs" onClick={togglePriceView}>
            <BsDash />
          </i>
        </div>
        {prices && (
          <ul className="list-none my-4 text-xs">
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>Under $50</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span> $50 - $100</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span> $100 - $200</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span> $300 - $400</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span> $400 - $600</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                {/* <input
              className=" p-1  mr-2 rounded  border border-borderGrey   focus:outline-none "
              type="checkbox"
            /> */}
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
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
                  <CustomColorFilter
                    className={`bg-[${color}]`}
                    color={color}
                    style={{ backgroundColor: `${color}` }}
                  />
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
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>Male</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
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
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>0 - 3 Months</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>3 - 6 Months</span>{" "}
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>6 - 12 Months</span>{" "}
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center ">
                <div className="pr-2">
                  <CustomCheckbox />
                </div>
                <span>1 - 3 Years</span>{" "}
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
