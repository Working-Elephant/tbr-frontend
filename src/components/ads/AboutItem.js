import React, {useContext} from "react";
import { AdContext } from "../../pages/ads/PostAd";
import {FaPlus} from 'react-icons/fa';

const AboutItem = () => {

  const { nextStep} = useContext(AdContext)
  return (
    <div>
      <div className="md:w-4/6 mx-auto py-3">
        <div className="  flex  items-center my-2">
          <p>Enter Item Category and Location</p>
        </div>
        <div className="grid grid-cols-2 gap-5 my-3">
          <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
            <option>Category</option>
            <option>Nigeria</option>
          </select>
          <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
            <option>Breed</option>
            <option>Nigeria</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <h5 className="text-center mb-4">Add Photos</h5>
        <div className="overflow-auto">
        <div className="p-10 bg-grey rounded-xl inline-block"> <i className="text-white text-2xl"><FaPlus/></i></div>
        </div>
      </div>
      <div className="text-center my-5">
      <button className="bg-yellow py-4 px-15 rounded font-semibold text-sm " onClick={nextStep} >NEXT</button>
      </div>
    </div>
  );
};

export default AboutItem;
