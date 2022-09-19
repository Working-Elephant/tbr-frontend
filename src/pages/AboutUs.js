import React from "react";
import Image from "../assets/images/favourites.svg";

const AboutUs = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-end">
        <div className="hidden md:w-1/2">
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="xl:w-4/6">
            <h5 className="font-light text-lg text-textMuted mb-4">
              Texas Bully Registry
            </h5>
            <h3 className="font-bold text-2xl mb-4">About Us</h3>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo sapien sed risus tincidunt, in viverra dolor
              ornare. Sed quis dolor et enim convallis dapibus. Ut rutrum mauris
              vitae mi ultricies, hendrerit fringilla felis congue. Nunc est
              ante, imperdiet sed mollis blandit, hendrerit vitae lorem.
              Suspendisse nec nisi tellus. Quisque laoreet nunc quis justo
              ultrices cursus. Sed lorem nibh, sollicitudin nec iaculis cursus,
              auctor id odio. Vestibulum elementum fermentum mattis. Mauris arcu
              purus, auctor a massa ac, commodo consequat tellus. Etiam vitae
              egestas tortor. Vestibulum iaculis luctus pulvinar.
            </p>
            <div className="my-3">
              <button className="bg-yellow py-2 font-semibold text-md rounded w-full md:w-1/2">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
