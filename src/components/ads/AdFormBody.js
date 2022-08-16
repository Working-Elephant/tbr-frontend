import React, { useContext } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { FaCheckCircle } from "react-icons/fa";

const AdFormBody = ({ children }) => {
  const { step } = useContext(AdContext);

  return (
    <div className="w-full p-5 ">
      <div className="w-full border p-4 border-borderGrey md:w-4/6 md:mx-auto md:my-5  ">
        <h4 className="text-center my-4 font-normal text-lg">Post Ad</h4>
        <div className="flex items-center justify-center">
          <div
            className={`text-sm rounded-3xl py-2 px-10 flex items-center ${
              step > 1 ? "bg-borderGrey" : "bg-yellow"
            }`}
          >
            <span className="flex items-center">
             
              About Item
              {step > 1 ? (
                <i className="pl-3 text-end">
                  <FaCheckCircle />
                </i>
              ) : null}
            </span>
          </div>
          <hr className="w-20 h-2 text-borderGrey mt-2" />
          <div
            className={`text-sm rounded-3xl py-2 px-10 flex items-center ${
              step > 1 && step<3? "bg-yellow" : "bg-borderGrey"
            }
           `}
          >
            <span className="flex items-center">
              Details
              {step > 2 ? (
                <i className="pl-3 text-end">
                  <FaCheckCircle />
                </i>
              ) : null}
            </span>
          </div>
          <hr className="w-20 h-2 text-borderGrey mt-2" />
          <div
            className={`bg-borderGrey text-sm rounded-3xl py-2 px-10 ${
              step >=3 ? "bg-yellow" : "border-borderGrey"
            }`}
          >
            <span className="flex items-center">
              Post Ad
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdFormBody;
