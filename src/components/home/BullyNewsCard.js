import React from "react";
import { FaArrowRight } from "react-icons/fa";
const BullyNewsCard = ({ item }) => {
  const { image, text, title } = item;
  return (
    <div className="bg-[#313131] flex ">
      <div className="w-1/3">
        <img src={image} alt="title" className="w-full h-full" />
      </div>
      <div className=" w-2/3 flex flex-col text-white relative">
        <h3 className="text-start px-6 my-4 font-semibold text-xl md:text-2xl">{title}</h3>
        <p className="text-justify px-6 mb-12  leading-loose text-xs md:text-sm ">{text}</p>
        <div className=" absolute bottom-0 right-0">
          <button className="bg-yellow py-3 px-6 text-dark flex items-center justify-end">
            Read More
            <i className="text-dark ml-2 font-bold">
              <FaArrowRight />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BullyNewsCard;
