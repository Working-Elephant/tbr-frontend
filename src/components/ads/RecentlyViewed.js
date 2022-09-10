import React from "react";
import { carouselImages } from "../../data";

const RecentlyViewed = () => {
  return (
    <div className="my-12">
      <div className="text-center mb-4 px-2">
        <h3 className="text-xl capitalize">Recently Viewed</h3>
        <p className="text-grey text-lg">Some of your recently viewed items</p>
      </div>
      <div className="w-full mx-auto  flex items-center justify-center my-3 lg:w-10/12">
        {carouselImages && carouselImages.length > 0 ? (
          carouselImages.slice(5, 9).map((item) => {
            return (
              <div key={item.id} className="w-full h-20 md:h-36 lg:h-48 xl:h-60">
                <img src={item.img} alt=""  className='rounded-2xl md:rounded-[2.5rem] w-10/12 h-full mx-auto' />
                <p className="my-2 text-center text-sm">Dog</p>
              </div>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default RecentlyViewed;
