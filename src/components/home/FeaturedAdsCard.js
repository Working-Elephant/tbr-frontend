import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";

const FeaturedAdsCard = ({ item }) => {
  const { name, location, price, image, seller, sellerAvatar } = item;
  return (
    <div className="p-2 flex flex-col ">
      <div className="w-full relative h-52 bg-cover bg-center bg-no-repeat rounded-2xl"   style={{ backgroundImage: `url('${image}')` }}>
        <i className="text-white text-lg absolute top-4 right-3"> 
          <FiHeart />
        </i>
        {/* <img src={image} alt="" className="w-full h-full rounded-2xl" /> */}
        <div className="absolute bottom-4 right-3 px-2 py-0.5 bg-black opacity-50 text-white text-xs rounded">
          <div className="flex items-center">
            <i className="mr-2" >
              <FaCamera /> 
            </i>
            <span className="">10</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs">
          <p className="mb-1">{name}</p>
          <div className="flex items-center text-grey ">
            <i className="mr-2">
              <MdLocationOn />
            </i>
            <p>{location}</p>
          </div>
          {seller ? (
            <div className="flex text-grey">
              {sellerAvatar ? (
                <img
                  src={sellerAvatar}
                  alt=""
                  className="w-3 h-3 rounded-2xl mr-2"
                />
              ) : (
                ""
              )}
              By {seller}
            </div>
          ) : null}
        </div>
        <div className="my-2">
          <span className="bg-black px-3 py-1 rounded-xl text-xs text-white">
            &#x24;{price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAdsCard;
