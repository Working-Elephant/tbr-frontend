import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto my-5">
      <div>
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-1   lg:grid-cols-2 lg:gap-6 ">
        <div className="grid grid-cols-3 px-4 md:px-8 lg:px-4">
          <div className="col-span-1 flex flex-col ">
            <span className="my-5">
              TITLE<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">
              FIRST NAME<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">
              LAST NAME<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">
              COUNTRY<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">
              ADDRESS LINE 1<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">ADDRESS LINE 2</span>
            <span className="my-5">
              COUNTRY<sup className="text-sm">*</sup>
            </span>
            <span className="my-5">CITY</span>
            <span className="my-5">PROVINCE</span>
            <span className="my-5">
              POSTCODE/ZIP<sup className="text-sm">*</sup>
            </span>
            <span className="my-6">
              MOBILE<sup className="text-sm">*</sup>
            </span>
            <span className="mt-15 py-15">
              <sup className="text-sm">*</sup>REQUIRED
            </span>
          </div>
          <div className="col-span-2 flex flex-col">
            {/* <input className="border-.5 border-borderGrey mt-4 mb-8 py-2 px-3 text-sm focus:outline-none " /> */}
            <select className="border-.5 border-borderGrey mt-4 mb-8 py-2 px-3 text-sm focus:outline-none">
              <option></option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Dr</option>
            </select>
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none">
              <option></option>
              <option>Nigeria</option>
            </select>
            {/* <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " /> */}
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />
            <input className="border-.5 border-borderGrey  mb-8 py-2 px-3 text-sm focus:outline-none " />

            <div class="flex items-center pl-3">
              <input
                id="list-radio-address"
                type="radio"
                value=""
                name="list-radio"
                className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow  "
              />
              <label
                for="list-radio-address"
                className="py-3 ml-2 w-full text-sm font-medium text-dark"
              >
                Use shipping address as billing address
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="list-radio-address"
                type="radio"
                value=""
                name="list-radio"
                className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow "
              />
              <label
                for="list-radio-address"
                className="py-3 ml-2 w-full text-sm font-medium  text-dark"
              >
                Enter seperate billing address
              </label>
            </div>
          </div>
        </div>
        <div className="px-3 md:px-5 lg:px-0">
          <div className="bg-yellow mt-4 ">
            <div className="border-b border-black py-5">
              <h3 className=" text-center font-bold">
                SHIPPING RESTRICTIONS AND DUTIES MAY APPLY
              </h3>
            </div>
            <div className="py-5">
              <p className="text-center leading-loose">
                <span className="font-bold"> NEED HELP?</span> <br />
                CALL US: +44 (0)10 2345 6789 <br />
                EMAIL CUSTOMER CARE | SHIPPING INFORMATION <br />
                RETURNS & EXCHANGES
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
      <button className="bg-yellow py-4 px-15 rounded font-semibold text-sm "><Link to="/cart/shipping/billing">NEXT</Link></button>
      </div>
    </div>
  );
};

export default Shipping;
