import React from "react";

const ImageContainer = ({ image, rounded, width, height }) => {
  return (
    <img
      src={image}
      alt=""
      className={`${width ? width : "w-full"}  ${height ? height : "h-full"}  ${
        rounded ? rounded : ""
      }`}
    />
  );
};

export default ImageContainer;
