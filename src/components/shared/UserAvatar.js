import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const UserAvatar = (props) => {
  return (
    <div className={`w-20 h-20 rounded-full text-center ${props.image ? "" : "bg-dark"}`}>
      {props.image ? (
        <img src={props.image} alt="" className="rounded-full" />
      ) : (
        <i className="text-white  m-auto">
          <AiOutlineUser />
        </i>
      )}
    </div>
  );
};

export default UserAvatar;
