import React from "react";

const ImageContainer = ({ image, rounded, width, height }) => {
  console.log(image, "img");
  return (
    <img
      src={image}
      alt=""
      className={`${width ? width : "w-full"}  ${
        height ? height : "h-[330px]"
      }  ${rounded ? rounded : ""}`}
      height={height}
    />
  );
};

export default ImageContainer;
