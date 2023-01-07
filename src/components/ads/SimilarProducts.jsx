import React from "react";
import PetCard from "../shared/PetCard";
import { IoIosArrowForward } from "react-icons/io";
import { featuredAdsData } from "../../data";
import AdCard from "../shared/AdCard";
import { Link } from "react-router-dom";

const SimilarProducts = ({ adsByCategory, categoryName }) => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between mb-3 px-2">
        <div>
          <h3 className="text-xl">Similar Products</h3>
          <p className="text-grey">Check some of these out!!</p>
        </div>
        <Link to={`/categories/${categoryName}`}>
          <div className="text-blue flex items-center">
            <span className="">View All</span>
            <i className="ml-1 text-xl">
              <IoIosArrowForward />
            </i>
          </div>
        </Link>
      </div>
      <div className="flex overflow-auto no-scrollbar mx-2">
        {adsByCategory && adsByCategory.length > 0 ? (
          adsByCategory.map((item, i) => {
            return (
              <div
                className="mx-2 min-w-max "
                style={{ webkitScrollBar: "none" }}
              >
                <AdCard key={i} item={item} />
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
