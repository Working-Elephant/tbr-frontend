import React from "react";
import { MdLocationOn } from "react-icons/md";

const PetCard = ({ item }) => {
  const { name, location, price, image, seller, sellerAvatar } = item;
  return (
    <div className="p-2 flex flex-col w-full">
      <div className="w-full">
        <img src={image} alt="" className="w-full h-36 rounded-2xl" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs mr-8">
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
              {seller}
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

export default PetCard;
