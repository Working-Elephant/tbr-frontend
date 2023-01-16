import React, { useContext } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { FaCheckCircle } from "react-icons/fa";

const StepIndicator = () => {
  const { step } = useContext(BullyRegistrationContext);

  return (
    <div>
      <div className=" lg:hidden mt-6  mx-auto flex items-center flex-wrap justify-center text-xs xl:text-17 text-dark">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`  rounded-[50%] ${
              step >= 1 ? "bg-yellow p-2" : "bg-white border border-yellow p-3"
            } ${step === 1 ? "p-3" : ""}`}
          >
            {step > 1 ? (
              <i>
                <FaCheckCircle />
              </i>
            ) : null}
          </div>
          <span className="text-[#B1B1B1] font-bold mt-2 ">1</span>{" "}
        </div>

        <hr className="grow h-4 text-yellow mb-2" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`  rounded-[50%] ${
              step >= 2 ? "bg-yellow p-2" : "bg-white border border-yellow p-3"
            } ${step === 2 ? "p-3" : ""}`}
          >
            {step > 2 ? (
              <i>
                <FaCheckCircle />
              </i>
            ) : null}
          </div>
          <span className="text-[#B1B1B1] font-bold mt-2 ">2</span>
        </div>

        <hr className="grow h-4 text-yellow mb-2" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={` rounded-[50%] ${
              step >= 3 ? "bg-yellow p-2" : "bg-white border border-yellow p-3"
            } ${step === 3 ? "p-3" : ""}`}
          >
            {step > 3 ? (
              <i>
                <FaCheckCircle />
              </i>
            ) : null}
          </div>
          <span className="text-[#B1B1B1] font-bold mt-2 ">3</span>
        </div>
      </div>
      {/* lg view */}
      <div className="hidden mt-6 xl:w-5/6 mx-auto lg:flex items-center justify-center">
        <div
          className={`text-sm rounded-3xl py-2 px-5 md:px-8 flex items-center ${
            step > 1 ? "bg-borderGrey" : "bg-yellow"
          }`}
        >
          <span className="flex items-center text-xs md:text-base whitespace-nowrap">
            About
            {step > 1 ? (
              <i className="pl-3 text-end">
                <FaCheckCircle />
              </i>
            ) : null}
          </span>
        </div>
        <hr className="grow h-4 text-borderGrey mt-4" />
        <div
          className={`text-sm rounded-3xl py-2 px-5 md:px-8 flex items-center ${
            step > 1 && step < 3 ? "bg-yellow" : "bg-borderGrey"
          }
           `}
        >
          <span className="flex items-center text-xs md:text-base whitespace-nowrap">
            Details
            {step > 2 ? (
              <i className="pl-3 text-end">
                <FaCheckCircle />
              </i>
            ) : null}
          </span>
        </div>
        <hr className="grow h-4 text-borderGrey mt-4" />
        <div
          className={`text-sm rounded-3xl py-2 px-5 md:px-8 flex items-center ${
            step > 2 && step < 4 ? "bg-yellow" : "bg-borderGrey"
          }
           `}
        >
          <span className="flex items-center text-xs md:text-base whitespace-nowrap">
            Pedigree
            {step > 3 ? (
              <i className="pl-3 text-end">
                <FaCheckCircle />
              </i>
            ) : null}
          </span>
        </div>
        <hr className="grow h-4 text-borderGrey mt-4" />
        <div
          className={`text-sm rounded-3xl py-2 px-5 md:px-8 ${
            step >= 4 ? "bg-yellow" : "bg-borderGrey"
          }`}
        >
          <span className="flex items-center text-xs  md:text-base whitespace-nowrap">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
