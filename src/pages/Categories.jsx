import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageContainer } from "../components/shared";

import useFetchAds from "../hooks/useFetchAds";

const Categories = () => {
  const { getCategories, categories } = useFetchAds();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="p-5 w-full mx-auto md:w-11/12 lg:w-10/12 xl:9/12">
      <h2 className="font-bold text-2xl m-6">Shop by Category</h2>
      <div className="grid grid-cols-2  gap-x-4 gap-y-12  md:grid-cols-3 xl:grid-cols-4 mb-12">
        {categories.map((item, i) => (
          <Link
            key={i}
            to={`/categories/${item.categoryName}`}
            state={{ categoryName: item.categoryName }}
          >
            {
              <ImageContainer
                image={`../assets/images/${item.categoryName}.jpg`}
                rounded="rounded-[3rem]"
              />
            }

            <p className="bottom-4 left-8 uppercase text-black  text-xl">
              {item.categoryName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
