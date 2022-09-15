import React from "react";
import HeaderImage from "../../assets/images/home_header.jpg";
import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoPawOutline, IoLockClosedOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { searchCategories, locations } from "../../data";

const Header = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[80vh] h-[100vh]  md:h-[80vh] lg:h-[65vh]">
      <div
        className="w-full h-full  bg-no-repeat bg-cover bg-center  text-center py-3 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${HeaderImage}')`,
        }}
      >
        <div className=" mt-5">
          <h2 className="text-xl md:text-3xl font-bold text-yellow">
            Texas Bully Registry
          </h2>
          <h3 className="text-2xl  md:text-4xl font-bold text-white ">
            Bully Classifieds at Your Paws
          </h3>
          <div className="w-5/6 lg:w-4/6 mx-auto my-4 lg:my-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-2 gap-1  md:grid-cols-5 my-4">
                <div className="bg-white border border-borderGrey lg:mx-1 mb-4 rounded p-3 md:mb-2 col-span-2 md:col-span-1">
                  <select
                    className="  text-sm  border-none focus:outline-none w-full placeholder:text-textMuted"
                    {...register("category")}
                  >
                    <option>Category</option>
                    {searchCategories.map((category, i) => (
                      <option key={i} value={category.value}>
                        {category.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bg-white flex items-center py-3 px-4 mb-4  md:mb-2 rounded col-span-2">
                  <i className="text-grey">
                    <FiSearch />
                  </i>
                  <input
                    className="bg-white  focus:outline-none ml-3"
                    placeholder="Search..."
                    {...register("searchValue")}
                  />
                </div>

                <div className="bg-white border border-borderGrey lg:mx-1 mb-4 rounded p-3 md:mb-2 md:col-span-1">
                  <select
                    className="  text-sm  border-none focus:outline-none w-full"
                    {...register("location")}
                  >
                    <option>Location</option>
                    {locations.map((location, i) => (
                      <option key={i} value={location.value}>
                        {location.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-1 mb-4  md:mb-2 lg:mx-1">
                  <button
                    className=" bg-yellow py-4  rounded text-sm w-full"
                    type="submit"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="px-4 md:w-9/12 lg:w-full xl:w-5/6 mx-auto my-4 ">
            <ul className=" grid grid-cols-2    lg:grid-cols-4 ">
              <li className="col-span-1 lg:col-span-1 mb-4">
                <div className="flex items-start md:items-center">
                  <div className="bg-white text-dark rounded-3xl p-2">
                    <i className="w-10 text-xl">
                      <FaSearch />
                    </i>
                  </div>
                  <div className="flex flex-col ml-2 text-start text-white">
                    <p className="text-sm font-semibold mb-2">Bully Services</p>
                    <p className=" text-xxs md:text-xs font-light">
                      Local Dog Services
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 lg:col-span-1 mb-4">
                <div className="flex items-start  md:items-center">
                  <div className="bg-white text-dark rounded-3xl p-2">
                    <i className="w-10 text-xl">
                      <IoPawOutline />
                    </i>
                  </div>
                  <div className="flex flex-col ml-2 text-start text-white">
                    <p className="text-sm font-semibold mb-1">
                      Pedigree Certificates
                    </p>
                    <p className="text-xxs md:text-xs font-light">
                      Simple and easy to update
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 lg:col-span-1 mb-4">
                <div className="flex items-start  md:items-center">
                  <div className="bg-white text-dark rounded-3xl p-2">
                    <i className="w-10 text-xl">
                      <IoLockClosedOutline />
                    </i>
                  </div>
                  <div className="flex flex-col ml-2 text-start text-white">
                    <p className="text-sm font-semibold mb-2">Secure Payment</p>
                    <p className="text-xxs md:text-xs font-light">
                      100% secure payment
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 lg:col-span-1 mb-4">
                <div className="flex items-start  md:items-center">
                  <div className="bg-white text-dark rounded-3xl p-2">
                    <i className="w-10 text-xl">
                      <FaSearch />
                    </i>
                  </div>
                  <div className="flex flex-col ml-2 text-start text-white">
                    <p className="text-sm font-semibold mb-2">
                      Communication Hub
                    </p>
                    <p className="text-xxs md:text-xs font-light">
                      Chat with other sellers and buyers
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
