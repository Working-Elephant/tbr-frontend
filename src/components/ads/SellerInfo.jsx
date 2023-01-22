import React from "react";
import { BsStar } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import UserAvatar from "../shared/UserAvatar";
import { Loader } from "../shared";

const SellerInfo = (props) => {
  return (
    <div className="bg-[#FEFFD9] p-4">
      <div className="flex items-center">
        <div className="w-auto mr-3 ">
          <UserAvatar image={props.image} width="w-16" height="h-16" />
        </div>
        <div className=" w-full flex flex-col justify-between ">
          <div className="flex items-center justify-between ">
            <span className="text-xs lg:text-sm">{props.name}</span>
            <div className="flex items-center text-sm bg-white rounded p-1">
              <i
                className={`${
                  props.status === "online" ? "text-success" : "text-yellow"
                }`}
              >
                <GoPrimitiveDot />
              </i>
              <span
                className={`text-success uppercase text-xs px-1 ${
                  props.status === "online" ? "text-success" : "text-yellow"
                }`}
              >
                {props.status}
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
            <span> {props.rating}</span>
          </div>
          <p className="text-xxs text-blue ">View Full Ratings and Reviews</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-1"> */}
      <div className="my-3">
        {props?.blackBtnText ? (
          <button
            className="p-3 w-full bg-black text-white text-sm rounded-md flex items-center justify-center"
            onClick={() => props.action1()}
          >
            {props.blackBtnIcon ? (
              <i className="mx-3">{props.blackBtnIcon}</i>
            ) : null}{" "}
            {props.isLoading ? <Loader /> : props.blackBtnText}
          </button>
        ) : null}
      </div>
      <div className="my-3">
        {props?.whiteBtnText ? (
          <button
            className="p-3 w-full bg-white text-dark text-sm rounded-md"
            onClick={() => props.action2()}
          >
            {props.whiteBtnText}
          </button>
        ) : null}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SellerInfo;
