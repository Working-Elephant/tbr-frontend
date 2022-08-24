import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import UserAvatar from "../shared/UserAvatar";
import { userMessages } from "../../data/api";

const MessagesComponent = () => {
  const [users, setUsers] = useState(userMessages);
  const [activeUser, setActiveUser] = useState();
  const [showMessage, setShowMessage] = useState(false);

  const setUser = (user) => {
    setActiveUser(user);
  };

  return (
    <div className="">
      <div className=" h-[100vh] grid grid-cols-12 ">
        <div
          className={` ${
            showMessage ? "hidden" : "col-span-12 "
          } xl:block  xl:col-span-5 relative  overflow-auto no-scrollbar scroll-smooth`}
        >
          <div className="bg-[#FFFCF2] py-3  px-2 text-xs w-full sticky top-0">
            <i className="absolute top-5 left-4 text-grey text-base">
              <RiSearchLine />
            </i>
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 rounded-xl py-2 w-full border-.5 border-borderGrey focus:outline-none"
            />
          </div>
          <ul className="">
            {users.map((user) => (
              <li
                key={user.id}
                className={`border-.5 border-borderGrey rounded ${
                  activeUser?.user?.id === user.id ? "bg-borderGrey" : ""
                }`}
                onClick={() => {
                  setUser(user);
                  setShowMessage(true);
                }}
              >
                <div className="flex  px-4 py-6">
                  <div className="w-1/6">
                    <UserAvatar image={user.image} width="w-12" height="h-12" />
                  </div>
                  <div className="flex flex-col ml-4 w-5/6">
                    <h4 className="text-sm font-semibold">{user.name} </h4>
                    <p className="text-xxs text-blue font-semibold">
                      Skull Candy Headphones
                    </p>
                    <p className="text-xs text-grey truncate pr-6  ">
                      {user.messages[0].message}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${
            showMessage ? "col-span-12" : "hidden"
          }   xl:block  xl:col-span-7    relative overflow-auto no-scrollbar scroll-smooth`}
        >
          {activeUser ? (
            <>
              <div className="bg-[#FFFCF2] pt-2 pb-3 sticky top-0 flex items-center">
                {showMessage ? (
                  <i
                    className=" mx-2 xl:hidden"
                    onClick={() => {
                      setShowMessage(false);
                    }}
                  >
                    <FaChevronLeft />
                  </i>
                ) : null}

                <div className=" flex items-center justify-center mx-auto ">
                  <UserAvatar
                    image={activeUser?.image}
                    width="w-12"
                    height="h-10"
                  />
                  <span className="ml-3 text-xs"> {activeUser?.name}</span>
                </div>
              </div>
              <div className="  px-4 h-[75%] overflow-auto no-scrollbar">
                {activeUser.messages?.map((message, i) => (
                  <div
                    key={i}
                    className={`px-5 py-3  mt-4 rounded-3xl w-fit max-w-[70%] ${
                      message.sent
                        ? "bg-borderGrey ml-auto "
                        : "bg-[#FFFCF2] mr-auto"
                    } `}
                  >
                    <p className="text-xs text-textMuted leading-6">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-.5 border-borderGrey rounded p-3 flex justify-between absolute bottom-0 left-0 right-0">
                <div className="w-[70%]">
                  <textarea
                    className="w-full text-xs text-textMuted resize-none max-h-[5rem] focus:outline-none placeholder:text-xs "
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <div className="flex items-center justify-end ">
                  <i className="mr-5">
                    <GrAttachment />
                  </i>
                  <button className=" bg-yellow px-6 py-2 rounded-3xl text-xs ">
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-15">
              <p className="text-center my-auto">Open a message</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesComponent;
