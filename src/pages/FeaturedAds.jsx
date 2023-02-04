import React, { useState, useEffect } from "react";
import PetBannerImage from "../assets/images/home_header.jpg";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { Filter, Loader } from "../components/shared";
// import {  featuredAdsData } from "../mockData/mockData";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsSlice } from "../store/features/productSlice";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useFetchAds from "../hooks/useFetchAds";
import AdCard from "../components/shared/AdCard";
import { useAdsContext } from "../hooks/useAdsContext";
// import { isResponseSuccess } from "../utils";

const FeaturedAds = () => {
  const { featuredAds } = useAdsContext();
  const { isLoading, getFeaturedAds } = useFetchAds();

  useEffect(() => {
    if (!featuredAds) {
      getFeaturedAds();
    }
  }, []);
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Featured",
    },
  ];

  return (
    <div className="">
      <div
        className="w-full h-[40vh] bg-no-repeat bg-cover bg-center text-center py-3 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${PetBannerImage}')`,
        }}
      >
        <div className=" m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured Ads
          </h2>
        </div>
      </div>
      <div className="my-4 px-5 lg:w-11/12 xl:w-10/12 mx-auto ">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="p-5  w-full lg:w-11/12 xl:w-10/12 mx-auto lg:grid lg:grid-cols-12 lg:gap-6">
        <div className=" lg:block lg:col-span-2">
          <Filter showCategory={false} />
        </div>
        <div className=" lg:col-span-10 lg:mt-4">
          <div className="flex justify-end">
            <div className="border border-borderGrey mb-8 py-2 px-3 w-fit">
              <select className="pr-5 text-sm focus:outline-none">
                <option>Sort By</option>
                <option>Price</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {isLoading && <Loader />}
            {featuredAds?.length ? (
              featuredAds?.map((item, i) => (
                <AdCard key={i} item={item} showLike />
              ))
            ) : (
              <p>No Data Available</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3"></div>
    </div>
  );
};

export default FeaturedAds;
