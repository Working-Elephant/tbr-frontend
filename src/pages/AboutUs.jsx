import React from "react";
import Image from "../assets/images/about-image.svg";

const AboutUs = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-end">
        <div className="hidden md:block md:w-1/2">
          <div>
            <img src={Image} alt="" className="" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="xl:w-4/6">
            <h5 className="font-light text-lg text-textMuted mb-4">
              Texas Bully Registry
            </h5>
            <h3 className="font-bold text-2xl mb-4">About Us</h3>
            <p className="font-light text-sm">
              The mission of the Texas Bully Registry an initiative of The Robin
              Hood Foundation is to improve the quality of life for all pets and
              animals especially the Bully breeds of Texas. The Texas Bully
              Registry will assist and aid in the national, state and local
              registration of the Bully breeds of Texas. Texas Bully Registry
              will uphold and adhere to the standards of all registered breeds
              set forth by other notable registries and licensed veterinarians.
              Texas Bully Registry is here to serve the Bully community and help
              propel dogs and owners into the future of breeding.
            </p>
            <div className="my-3">
              {/* <button className="bg-yellow py-2 font-semibold text-md rounded w-full md:w-1/2">
                CONTACT US
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
