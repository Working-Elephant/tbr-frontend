import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Avatar1 from "../../assets/images/avatar1.jpeg";
import { dashboardMenu } from "../../data";
import SellerInfo from "../ads/SellerInfo";
import AuthService from "../../services/user";
const DashboardLayout = ({ children }) => {
  const { getUser } = AuthService;
  const user = getUser();
  return (
    <div className="px-5 pt-5 lg:py-10 lg:px-12">
      <div className=" grid  md:grid-cols-8 md:gap-3 lg:gap-4">
        <div className="md:col-span-3 xl:col-span-2">
          <div className="lg:border-r lg:border-r-borderGrey pr-6">
            <h4 className="font-bold text-2xl mb-4">Your Dashboard</h4>

            <SellerInfo
              image={Avatar1}
              name={user?.username?.toUpperCase()}
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
                            ? "bg-yellow  px-5 py-3 rounded-lg my-3 flex items-center justify-between"
                            : "bg-[#F6F6F6] px-5 py-3 rounded-lg my-3 flex items-center justify-between"
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
        <div className="md:col-span-5 xl:col-span-6  mt-6 md:mt-0">
          <div className=" px-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
