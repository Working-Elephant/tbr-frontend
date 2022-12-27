import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import UserAvatar from "../shared/UserAvatar";
import { userMessages } from "../../data/api";
import useFetchChat from "../../hooks/useFetchChats";
import { useEffect } from "react";
import { findUpper } from "../../utils/Utils";
import { useForm } from "react-hook-form";
const ChatComponent = ({ singleChat, showMessage, activeUser }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { chatId } = activeUser;
    const obj = { ...data, chatId };
  };

  return (
    <div className="">
      <div className=" h-[100vh] grid grid-cols-12 ">
        <div
          className={`${
            showMessage ? "col-span-12" : "hidden"
          }   xl:block  xl:col-span-7    relative overflow-auto no-scrollbar scroll-smooth`}
        >
          {singleChat ? (
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
                  {activeUser?.image ? (
                    <UserAvatar
                      image={activeUser?.image}
                      width="w-12"
                      height="h-10"
                    />
                  ) : (
                    <UserAvatar
                      text={activeUser?.username}
                      width="w-12"
                      height="h-10"
                    />
                  )}

                  <span className="ml-3 text-xs"> {activeUser?.username}</span>
                </div>
              </div>
              <div className="  px-4 h-[75%] overflow-auto no-scrollbar">
                {singleChat?.chatMessages?.map((chatMessages, i) => (
                  <div
                    key={i}
                    className={`px-5 py-3  mt-4 rounded-3xl w-fit max-w-[70%] ${
                      activeUser.userId === chatMessages?.senderId
                        ? "bg-borderGrey ml-auto "
                        : "bg-[#FFFCF2] mr-auto"
                    } `}
                  >
                    <p className="text-xs text-textMuted leading-6">
                      {chatMessages?.message}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-.5 border-borderGrey rounded p-3 flex justify-between absolute bottom-0 left-0 right-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-[70%]">
                    <textarea
                      className="w-full text-xs text-textMuted resize-none max-h-[5rem] focus:outline-none placeholder:text-xs "
                      placeholder="Write your message here..."
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Type a message",
                        },
                      })}
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-end ">
                    <i className="mr-5">
                      <GrAttachment />
                    </i>
                    <button
                      className=" bg-yellow px-6 py-2 rounded-3xl text-xs "
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <Navigate to={"/dashboard/messages"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
