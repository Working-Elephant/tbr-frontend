import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { MdClose } from "react-icons/md";

const ImageModal = ({ open, close, image }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={close}
    >

        <div className="flex items-center justify-end">
          <i className="text-xl text-end p-4" onClick={close}>
            <MdClose />
          </i>
        </div>
      <div className="absolute top-4 bg-white p-4 w-fit max-h-[90vh] rounded-lg">
        

        {/* <div className=""> */}
            <img src={image}  alt="" className="max-h-[85vh] rounded " />
        {/* </div> */}
      </div>
    </Backdrop>
  );
};

export default ImageModal;
