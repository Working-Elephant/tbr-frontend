import React from "react";
import { GoPlusSmall } from "react-icons/go";

const ItemDetails = () => {
  return (
    <div>
      <div className="md:w-4/6 mx-auto py-3">
        <h5 className="mb-4">Enter Bully Details</h5>
        <form className="">
          <input
            className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
            placeholder="Dog's Registered Name"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
            <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full  ">
              <option>Date of Birth</option>
              <option>Nigeria</option>
            </select>
            <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
              <option>Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <input
            className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
            placeholder="Dog owner's Name"
          />
          <input
            className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
            placeholder="Address"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 md: gap-4">
            <input
              className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
              placeholder="City"
            />
            <input
              className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
              placeholder="State"
            />
            <input
              className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
              placeholder="Zip"
            />
          </div>
          <input
            className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
            placeholder="Telephone"
          />

          <div className="bg-[#ECECEC63] p-5">
            <div className="flex items-center justify-between text-dark">
              <h5 className="text-sm">Add Pedigree Information</h5>
              <i className="text-xs">
                <GoPlusSmall />
              </i>
            </div>
            <p className="text-blue text-sm my-3">Male Parent</p>
            <input
              className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
              placeholder="Dog's Registered Name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select>
              <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <p className="text-blue text-sm my-3">Female Parent</p>
            <input
              className="border-.5 border-borderGrey bg-inputBgGrey w-full  mb-4 py-2 px-3 text-sm focus:outline-none placeholder:text-textMuted placeholder:opacity-40 "
              placeholder="Dog's Registered Name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select>
              <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="text-center my-5">
            <button className="bg-yellow py-4 px-15 rounded font-semibold text-sm ">
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
