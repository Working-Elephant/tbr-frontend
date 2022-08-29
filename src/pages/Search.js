import React, { useState, useEffect } from "react";
import { featuredAdsData } from "../mockData/mockData";
import { Pagination, BreadCrumb, Filter } from "../components/shared";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";

const Search = () => {
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Search",
      link: "search",
    },
  ];

  const [perPage] = useState(7);
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
      <div className="  w-full md:w-11/12 xl:w-10/12 mt-3 mx-auto">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="p-4  w-full md:w-11/12 xl:w-10/12 mx-auto  md:grid md:grid-cols-12 md:gap-6 ">
        <div className="hidden md:block md:col-span-4 lg:col-span-2 md:mt-[5rem]">
          <Filter showCategory={true} />
        </div>
        <div className=" md:col-span-8 lg:col-span-10 mt-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <span className="font-bold">{featuredAdsData.length}</span>{" "}
              Results for
              <span className="font-bold">Bulldog</span>
            </p>
            <select className="border border-borderGrey mb-5 py-2 px-3 text-sm focus:outline-none">
              <option>Sort By</option>
              <option>Price</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
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

export default Search;
