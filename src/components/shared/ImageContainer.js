import React from "react";

const ImageContainer = ({ image, rounded, fullHeight }) => {
  return (
    <img
      src={image}
      alt=""
      className={`w-full ${fullHeight? "h-full" : ""}  ${rounded ? rounded : ""}`}
    />
  );
};

export default ImageContainer;
