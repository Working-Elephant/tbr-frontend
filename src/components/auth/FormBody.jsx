import React from "react";

const FormBody = ({ children, ...props }) => {
  return (
    <div className="my-8 p-6">
      <div className="w-6/8 md:w-2/3   xl:w-1/2 mx-auto">
        <h4 className="uppercase font-bold my-10 text-lg text-center">{props.title}</h4>
        <hr className="border-.5 border-borderGrey" />
        <div className="w-full md:w-5/6 mx-auto">
          <p className="text-justify text-sm my-5">{props.text}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormBody;
