import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import useFetchAds from "../../hooks/useFetchAds";
import { useEffect } from "react";
import AdCard from "../shared/AdCard";
// import Checkbox from "@mui/material/Checkbox";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";

const FeaturedAdsCard = () => {
  const { getFeaturedAds, featuredAds } = useFetchAds();
  // const { name, location, price, image, seller, sellerAvatar, id } = item;
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFeaturedAds();
  }, []);

  const viewAd = (id) => {
    navigate(`/ad/view/${id}`);
  };
  return (
    // <div className="p-2 flex flex-col cursor-pointer">
    //   <div
    //     className="w-full relative h-52 bg-cover bg-center bg-no-repeat rounded-2xl"
    //     // onClick={() => viewAd(id)}
    //     // style={{ backgroundImage: `url('${image}')` }}
    //   >
    //     <i
    //       className="text-white text-lg absolute top-4 right-3 p-1"
    //       onClick={toggleLike}
    //     >
    //       {liked ? <BsFillHeartFill color="red" /> : <BsHeart color="white" />}
    //     </i>
    //     <div className="absolute bottom-4 right-3 py-1 px-2 bg-black opacity-60 text-white text-xs rounded">
    //       <div className="flex items-center">
    //         <i className="mr-2">
    //           <FaCamera />
    //         </i>
    //         <span className="">10</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between mt-3">
    //     <div className="text-xs">
    //       {/* <p className="mb-1">{name}</p> */}
    //       <div className="flex items-center text-grey ">
    //         <i className="mr-2">
    //           <MdLocationOn />
    //         </i>
    //         {/* <p>{location}</p> */}
    //       </div>
    //       {/* {seller ? (
    //         <div className="flex text-grey">
    //           {sellerAvatar ? (
    //             <img
    //               src={sellerAvatar}
    //               alt=""
    //               className="w-3 h-3 rounded-2xl mr-2"
    //             />
    //           ) : (
    //             ""
    //           )}
    //           By {seller}
    //         </div>
    //       ) : null} */}
    //     </div>
    //     <div className="my-2">
    //       <span className="bg-black px-3 py-1 rounded-xl text-xs text-white">
    //         {/* ${price} */}
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <>
      {featuredAds.length ? (
        featuredAds.map((ad, index) => (
          <AdCard showLike item={ad} key={index} />
        ))
      ) : (
        <h3>No Featured Ads</h3>
      )}
      {/* <div className="mt-10 text-center flex justify-center">
        <button className="py-3 px-5  bg-black text-white text-sm rounded-md">
          Load More Featured Sellers
        </button>
      </div> */}
    </>
  );
};

export default FeaturedAdsCard;
