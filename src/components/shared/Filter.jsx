import React, { useState } from "react";
import { BsDash } from "react-icons/bs";
import { filterColors, categories } from "../../data";
import { CustomCheckbox, CustomColorFilter } from ".";
import { MdClose } from "react-icons/md";
import Backdrop from "@mui/material/Backdrop";

const Filter = ({ showCategory }) => {
  const [filterView, setFilterView] = useState({
    prices: true,
    colors: true,
    gender: true,
    age: true,
  });
  const { prices, colors, gender, age } = filterView;
  const [mobileFilter, seMobileFilter] = useState(false);

  const handleClose = () => {
    seMobileFilter(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const toggleMenu = () => {
    seMobileFilter(!mobileFilter);
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
    <div>
      <div className="lg:hidden mb-[-2.6rem] lg:mb-0">
        <button
          className="px-4 py-2 border border-borderGrey"
          onClick={toggleMenu}
        >
          Filter
        </button>
      </div>

      <div className="hidden lg:block">
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={mobileFilter}
        // onClick={handleClose}
      >
        <div
          className={`${
            mobileFilter
              ? "flex absolute top-0 left-0 bg-white h-full w-3/5 md:w-2/6 text-[#333] shadow-lg rounded-tr-3xl rounded-br-3xl pl-5 pr-2  flex-col items-between"
              : "hidden"
          } `}
        >
          <div className="overflow-auto pb-6">
            <div className="flex items-center justify-end">
              <i className="text-xl text-end p-4" onClick={handleClose}>
                <MdClose />
              </i>
            </div>

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
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Filter;
