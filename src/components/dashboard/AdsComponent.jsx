import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { adsData } from "../../data";
import { Loader, PetCard } from "../shared";
import useFetchAds from "../../hooks/useFetchAds";

const AdsComponent = () => {
  const { isLoading, getAds, ads } = useFetchAds();

  useEffect(() => {
    getAds();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-3 px-5">
        <h6>Your Ads({ads?.length})</h6>
        <Link to="/ad/post-ad">
          {" "}
          <div className="p-3 bg-black text-white text-sm rounded-md flex items-center">
            <i className="text-white mr-4">
              <BsPlusCircle />
            </i>
            <button className="mx-4"> Post Ad </button>
          </div>
        </Link>
      </div>
      {/* <div className="border-l border-l-borderGrey px-3"> */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3  xl:grid-cols-4 place-content-center  overflow-y-scroll">
        {isLoading ? (
          <div className="flex justify-center items-center w-full ">
            <div className="w-fit mx-auto">
              <Loader size={60} />
            </div>
          </div>
        ) : ads && ads.length > 0 ? (
          ads?.map((item, i) => {
            return <PetCard key={i} item={item} />;
          })
        ) : (
          <div>
            <p>No Ads found</p>
          </div>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default AdsComponent;
