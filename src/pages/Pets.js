import React, { useState, useEffect } from "react";
import PetBannerImage from "../assets/images/dog_banner.jpeg";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { Filter } from "../components/shared";
import {  featuredAdsData } from "../mockData/mockData";

const Pets = () => {
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Pets",
      link: "pets",
    },
  ];

  const [perPage] = useState(6);
  const [firstIndex, setFirstIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [selected, setSelected] = useState(0);
  const total = Math.ceil(featuredAdsData.length / perPage);

  useEffect(() => {
    const lastIndex = firstIndex + perPage;
    setCurrentData(featuredAdsData.slice(firstIndex, lastIndex));
  }, [perPage, firstIndex]);

  const paginate = (ev) => {
    console.log(ev.selected, "selected");
    let newOffSet = (ev.selected * perPage) % featuredAdsData.length;
    setFirstIndex(newOffSet);
    setSelected(ev.selected);
  };

  return (
    <div className="">
      <div
        className="w-full h-[30vh] bg-no-repeat bg-cover bg-center text-center py-3 flex flex-col justify-end"
        style={{ backgroundImage: `url('${PetBannerImage}')` }}
      >
        <div className=" m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Pets</h2>
        </div>
      </div>
      <div className="my-4 px-5 lg:w-11/12 xl:w-10/12 mx-auto ">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="p-5  w-full lg:w-11/12 xl:w-10/12 mx-auto lg:grid lg:grid-cols-12 lg:gap-6">
        <div className=" lg:block lg:col-span-2">
          <Filter showCategory={false}/>
          
        </div>
        <div className=" lg:col-span-10 lg:mt-4">
          <div className="text-end">
            <select className="border border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none">
              <option>Sort By</option>
              <option>Price</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {currentData.map((item, i) => {
              return <FeaturedAdsCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <Pagination
          total={total}
          perPage={perPage}
          paginate={paginate}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default Pets;
