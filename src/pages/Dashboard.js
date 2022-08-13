import React from "react";
import PetCard from "../components/shared/PetCard";
import UserAvatar from "../components/shared/UserAvatar";
import { BsPlusCircle, BsStar, BsHeart } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import Avatar1 from "../assets/images/avatar1.jpeg";
import { dashboardMenu } from "../mockData/mockData";
import { adsData } from "../mockData/mockData";
import SellerInfo from "../components/ads/SellerInfo";

const Dashboard = () => {
  return (
    <div className="p-5  lg:py-10 lg:px-12">
      <div className=" grid  md:grid-cols-8 md:gap-3 lg:gap-4">
        <div className="md:col-span-3 xl:col-span-2">
          <h4 className="font-bold text-2xl mb-4">Your Dashboard</h4>
          
          <SellerInfo image={Avatar1} name="Max Bill" rating={4.5} status="online" blackBtnText="Edit Profile" whiteBtnText="Settings" />
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
