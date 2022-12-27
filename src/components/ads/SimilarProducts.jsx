import React from "react";
import PetCard from "../shared/PetCard";
import { IoIosArrowForward } from "react-icons/io";
import { featuredAdsData } from "../../data";

const SimilarProducts = () => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between mb-3 px-2">
        <div>
          <h3 className="text-xl">Similar Products</h3>
          <p className="text-grey">Check some of these out!!</p>
        </div>
        <div className="text-blue flex items-center">
          <span className="">View All</span>
          <i className="ml-1 text-xl">
            <IoIosArrowForward />
          </i>
        </div>
      </div>
      <div className="flex overflow-auto no-scrollbar mx-2">
        {featuredAdsData && featuredAdsData.length > 0 ? (
          featuredAdsData.slice(0,7).map((item, i) => {
            return (
              <div className="mx-2 min-w-max " style={{ webkitScrollBar: "none" }}>
                <PetCard key={i} item={item} />
              </div>
            );
          })
        ) : (
          <p>No data found!!</p>
        )}
      </div>
    </div>
  );
};

export default SimilarProducts;