import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import useFetchAds from "../../hooks/useFetchAds";
import useFetchBullies from "../../hooks/useFectchBullies";
import { get } from "react-hook-form";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
const AdCard = ({ item, showLike = false }) => {
  const imageurl = import.meta.env.VITE_IMAGE_URL;
  const { getSingleAd, favouriteAd } = useFetchAds();
  const [liked, setLiked] = useState(false);
  const viewAd = (id) => {
    getSingleAd(id);
  };
  const {
    title,
    city,
    amount,
    postAdImages,
    seller,
    sellerAvatar,
    id,
    featured,
  } = item;
  const toggleLike = async (evt) => {
    // alert('fired')
    const obj = {
      postAdId: id,
      action: liked ? "REMOVE" : "ADD",
    };
    const status = await favouriteAd(obj);
    if (status === false) {
      setLiked(!liked);
    } else {
      return;
    }
    // evt.stopPropagation();
  };
  return (
    <div className="p-2 flex flex-col  cursor-pointer relative">
      <div class="inline-flex absolute mt-2 -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold   rounded-full">
        {!showLike &&
          (featured === false ? (
            <span class="bg-yellow  text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
              Regular
            </span>
          ) : (
            <span class="bg-success  text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 ">
              featured
            </span>
          ))}
      </div>
      {showLike && (
        <i
          className="text-white text-lg absolute top-4 right-3 p-1"
          onClick={toggleLike}
        >
          {liked ? <BsFillHeartFill color="red" /> : <BsHeart color="white" />}
        </i>
      )}
      <div className="w-full" onClick={() => viewAd(id)}>
        <img
          src={`${imageurl}${postAdImages?.[0].url}`}
          alt=""
          className="w-full h-36 rounded-2xl"
        />
      </div>
      <div
        className="flex items-center justify-between mt-3"
        onClick={() => viewAd(id)}
      >
        <div className="text-xs mr-8">
          <p className="mb-1">{title}</p>
          <div className="flex items-center text-grey ">
            <i className="mr-2">
              <MdLocationOn />
            </i>
            <p>{city}</p>
          </div>
          {/* {seller ? (
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
          ) : null} */}
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

export default AdCard;
