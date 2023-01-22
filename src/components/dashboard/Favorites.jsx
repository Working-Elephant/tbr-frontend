import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { adsData } from "../../data";
import { Loader } from "../shared";
import useFetchAds from "../../hooks/useFetchAds";
import AdCard from "../shared/AdCard";

const Favorites = ({ isLoading, favouriteAds }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-3 px-5">
        <h6>Your Favourite Ads({favouriteAds?.items?.length})</h6>
      </div>
      <div className="border-l border-l-borderGrey px-3">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3  xl:grid-cols-4 place-content-center  overflow-y-scroll">
          {isLoading ? (
            <div className="flex justify-center items-center w-full ">
              <div className="w-fit mx-auto">
                <Loader size={60} />
              </div>
            </div>
          ) : favouriteAds?.items && favouriteAds?.items?.length > 0 ? (
            favouriteAds?.items?.map((item, i) => {
              return <AdCard key={i} item={item} />;
            })
          ) : (
            <div>
              <p>No Ads found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
