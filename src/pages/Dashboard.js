import React from "react";
import PetCard from "../components/shared/PetCard";
import UserAvatar from "../components/shared/UserAvatar";
import { BsPlusCircle, BsStar, BsHeart } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import Avatar1 from "../assets/images/avatar1.jpeg";
import { dashboardMenu } from "../mockData/mockData";
import { adsData } from "../mockData/mockData";

const Dashboard = () => {
  return (
    <div className="p-5  lg:py-10 lg:px-12">
      <div className=" grid  md:grid-cols-8 md:gap-3 lg:gap-4">
        <div className="md:col-span-3 xl:col-span-2">
          <h4 className="font-bold text-2xl mb-4">Your Dashboard</h4>
          <div className="bg-[#FEFFD9] p-4">
            <div className="flex items-center">
              <div className="w-auto mr-3 ">
                <UserAvatar image={Avatar1} />
              </div>
              <div className=" w-auto flex flex-col justify-between ">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Max Bill</span>
                  <div className="flex items-center text-sm bg-white rounded p-1">
                    <i className="text-success ">
                      <GoPrimitiveDot />
                    </i>
                    <span className="text-success uppercase text-xs px-1">
                      online
                    </span>
                    <i className="text-dark">
                      <IoIosArrowDown />
                    </i>
                  </div>
                </div>
                <div className="flex text-xs ">
                  <i className="mr-2">
                    <BsStar />
                  </i>
                  <span> {4.5}</span>
                </div>
                <p className="text-xs text-blue ">
                  View Full Ratings and Reviews
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-1">
            <div className="my-3">
              <button className="p-3 w-full bg-black text-white text-sm rounded-md">
                Edit Profile
              </button>
            </div>
            <div className="my-3">
              <button className="p-3 w-full bg-white text-dark text-sm rounded-md">
                Settings
              </button>
            </div></div>
          </div>
          <div>
            <ul className="list-none my-4 text-sm">
              {dashboardMenu.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="bg-[#F6F6F6] px-5 py-3 rounded-lg my-3 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <i className="mr-6 text-dark">
                        <BsHeart />
                      </i>
                      <span>{item.name}</span>
                    </div>
                    <i className="text-lg">
                      <IoIosArrowForward />
                    </i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 xl:col-span-6">
          <div className="flex items-center justify-between mb-3 px-5">
            <h6>Your Ads(10)</h6>
            <div className="p-3 bg-black text-white text-sm rounded-md flex items-center">
              <i className="text-white mr-4">
                <BsPlusCircle />
              </i>
              <button className="mx-4"> Post Ad </button>
            </div>
          </div>
          <div className="border-l border-l-borderGrey px-3">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3  xl:grid-cols-4 ">
              {adsData.map((item, i) => {
                return <PetCard key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
