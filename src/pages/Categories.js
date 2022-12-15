import React from "react";
import { Link } from "react-router-dom";
import { ImageContainer } from "../components/shared";
import { categoriesData } from "../data";

const Categories = () => {
  return (
    <div className="p-5 w-full mx-auto md:w-11/12 lg:w-10/12 xl:9/12">
      <h2 className="font-bold text-2xl m-6">Shop by Category</h2>
      <div className="grid grid-cols-2  gap-x-4 gap-y-12  md:grid-cols-3 xl:grid-cols-4 mb-12">
        {categoriesData.map((data, i) =>
          data.link ? (
            <Link to={data.link}>
              <div key={`km${i}`} className="mx-4  relative  lg:h-72">
                <ImageContainer
                  image={data.img}
                  rounded="rounded-[2rem]"
                  fullHeight={true}
                />
                <p className="absolute bottom-4 left-6 uppercase text-lg">
                  {data.name}
                </p>
              </div>
            </Link>
          ) : (
            <a href={data.externalLink}>
              <div key={`km${i}`} className="mx-4  relative  lg:h-72">
                <ImageContainer
                  image={data.img}
                  rounded="rounded-[2rem]"
                  fullHeight={true}
                  height="330px"
                />
                <p className="absolute bottom-4 left-6 uppercase text-lg">
                  {data.name}
                </p>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Categories;
