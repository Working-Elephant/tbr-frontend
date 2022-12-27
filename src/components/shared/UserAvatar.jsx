import React from "react";
//import { AiOutlineUser } from "react-icons/ai";

const UserAvatar = (props) => {
  return (
    <div
      className={`${props.height ? props.height : "h-20"} ${
        props.width ? props.width : "w-20"
      } rounded-full text-center ${
        props.image ? "" : "bg-dark"
      } flex items-center justify-center`}
    >
      {/* {props.image ? (
        <img src={props.image} alt="" className="rounded-full" />
      ) : (
        <i className="text-white  m-auto">
          <AiOutlineUser />
        </i>
      )} */}
      {props.image && <img src={props.image} alt="" className="rounded-full" />}
      {props.text && !props.image && (
        <div className="text-white">{props.text}</div>
      )}
    </div>
  );
};

export default UserAvatar;
