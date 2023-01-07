import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Avatar1 from "../../assets/images/avatar1.jpeg";
import Coin from "../../assets/images/coin.png";
import { dashboardMenu } from "../../data";
import SellerInfo from "../ads/SellerInfo";
import AuthService from "../../services/user";
import { useSelector } from "react-redux";
const DashboardLayout = ({ children }) => {
  //const { getUser } = AuthService;
  // const user = getUser();
  const user = useSelector((state) => state?.auth?.user);
  const loggedInUser = user?.user;

  return (
    <div className="px-5 pt-5 lg:py-5 lg:px-5 h-[90vh] ">
      <div className=" grid  md:grid-cols-8 md:gap-3 lg:gap-4">
        <div className="md:col-span-3 xl:col-span-2">
          <div className="lg:border-r lg:border-r-borderGrey pr-6">
            <h4 className="font-bold text-2xl mb-4">Your Dashboard</h4>

            <SellerInfo
              image={Coin}
              name={loggedInUser?.username?.toUpperCase()}
              rating={4.5}
              status="online"
              blackBtnText="Edit Profile"
              whiteBtnText="Settings"
            />
            <div>
              <ul className="list-none my-4 text-sm">
                {dashboardMenu.map((item, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={`${item.link}`}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-yellow  px-5 py-3 rounded-lg my-3 flex items-center justify-between mt-5"
                            : "bg-[#F6F6F6] px-5 py-3 rounded-lg my-3 flex items-center justify-between mt-5"
                        }
                      >
                        <div className="flex items-center">
                          <div className="mr-6">
                            <img
                              src={item.icon}
                              alt="icon"
                              className="w-4 h-4"
                            />
                          </div>
                          <span>{item.name}</span>
                        </div>
                        <i className="text-lg">
                          <IoIosArrowForward />
                        </i>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 xl:col-span-6  mt-3 md:mt-0">
          <div className=" px-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
