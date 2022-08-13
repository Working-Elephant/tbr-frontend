import React from "react";

const TestimonialCard = ({ item }) => {
  const { image, name, testimony, status } = item;
  return (
    <div className="pt-[40px] relative">
        <div className="w-20 h-20 border-2 border-white rounded-full shadow-[0px_10px_30px_#00000029]  mx-auto absolute top-0 left-[42%] md:left-[45%] lg:left-[48%]  ">
          <img src={image} alt="" className="w-full h-full rounded-full" />
        </div>
      <div className="bg-white shadow-[0px_15px_40px_#0000000A] pt-[45px] rounded-lg  text-center px-4 md:px-8 lg:px-12 ">
        
        <div className=" text-center">
          <h5>{name}</h5>
          <p className="text-xs my-2  ">{status}</p>
          <p className="text-xs md:text-md text-justify leading-6">
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
