import React from "react";


const AdFormBody = ({children }) => {
  return (
    <div className="w-full p-5 ">
      <div className="w-full border p-4 border-borderGrey md:w-4/6 md:mx-auto md:my-5  ">
        <h4 className="text-center my-4 font-normal text-lg">Post Ad</h4>
        <div className="flex items-center justify-center">
        <div className="bg-yellow text-sm rounded-3xl py-2 px-10"> About Item</div>
        <hr className="w-20 h-2 text-borderGrey mt-2"/>
        <div className="bg-borderGrey text-sm rounded-3xl py-2 px-10">Details</div>
        <hr className="w-20 h-2 text-borderGrey mt-2"/>
        <div className="bg-borderGrey text-sm rounded-3xl py-2 px-10">Post Ad</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdFormBody;
