import React from "react";
import { MdLocationOn } from "react-icons/md";
import useFetchAds from "../../hooks/useFetchAds";
import useFetchBullies from "../../hooks/useFectchBullies";
import { get } from "react-hook-form";
const PetCard = ({ item, type }) => {
  const imageurl = import.meta.env.VITE_IMAGE_URL;
  const { getSingleAd } = useFetchAds();
  const { getSingleBully } = useFetchBullies();
  if (type != "bullies") {
  }
  const viewAd = (id) => {
    if (type === "bully") {
      getSingleBully(id);
    } else {
      getSingleAd(id);
    }
  };
  const { title, city, amount, postAdImages, seller, sellerAvatar, id } = item;

  return (
    <div
      className="p-2 flex flex-col  cursor-pointer"
      onClick={() => viewAd(id)}
    >
      <div className="w-full">
        {type === "bully" ? (
          <img
            src={`${imageurl}${item?.bullyImages?.[0].url}`}
            alt=""
            className="w-full h-36 rounded-2xl"
          />
        ) : (
          <img
            src={`${imageurl}${postAdImages?.[0].url}`}
            alt=""
            className="w-full h-36 rounded-2xl"
          />
        )}
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs mr-8">
          <p className="mb-1">{title}</p>
          <div className="flex items-center text-grey ">
            <i className="mr-2">
              <MdLocationOn />
            </i>
            <p>{city}</p>
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
            &#x24;{amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
