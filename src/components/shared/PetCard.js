import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PetCard = ({ item }) => {
  const navigate = useNavigate();

  const viewAd=(id)=>{
    navigate(`/ad/view/${id}`)
  }

  const { name, location, price, image, seller, sellerAvatar, id } = item;
  return (
    <div className="p-2 flex flex-col w-full cursor-pointer" onClick={()=>viewAd(id)} >
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
