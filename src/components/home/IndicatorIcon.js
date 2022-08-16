import React from 'react'

const IndicatorIcon = ({ data,onClick, ...rest }) => {
  // const CustomDot =  => {
    const {
      // onMove,
      // index,
      active,
      // carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      // <button
      //   className={`h-3 w-10 text-grey ${active ? "active" : "inactive"}`}
      //   onClick={() => onClick()}
      // >
       <hr  className={` w-20 border-4 border-borderGrey text-grey ${active ? "active border-dark" : "inactive "}`}
        onClick={() => onClick()}/>


     
    );
  // };
}

export default IndicatorIcon