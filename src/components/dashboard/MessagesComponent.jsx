import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import UserAvatar from "../shared/UserAvatar";
import useFetchChat from "../../hooks/useFetchChats";
import { useEffect } from "react";
import { findUpper } from "../../utils/Utils";
import ChatComponent from "./ChatComponent";

const MessagesComponent = () => {
  const { getChats, chats, isLoading, getSingleChat, singleChat } =
    useFetchChat();
  const [activeUser, setActiveUser] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState(null);
  const [chatObject, setChatObject] = useState(null);
  useEffect(() => {
    getChats();
  }, []);

  const setUser = (user) => {
    getSingleChat(user.chatId);
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
            <div className="">
              {chats &&
                chats?.map(({ chatParticipants, chatMessages }) => (
                  <li
                    key={chatParticipants?.[0].id}
                    className={`border-.5 border-borderGrey rounded ${
                      activeUser?.chatParticipants?.[0].id ===
                      chatParticipants?.[0].id
                        ? "bg-borderGrey"
                        : ""
                    }`}
                    onClick={() => {
                      setUser(chatParticipants?.[0]);
                      setShowMessage(true);
                    }}
                  >
                    <div className="flex  px-4 py-6">
                      <div className="w-1/6">
                        <UserAvatar
                          text={chatParticipants?.[0].username}
                          width="w-12"
                          height="h-12"
                        />
                      </div>
                      <div className="flex flex-col ml-4 w-5/6">
                        <h4 className="text-sm font-semibold">
                          {chatParticipants?.[0]?.username}{" "}
                        </h4>
                        <p className="text-xxs text-blue font-semibold">TBR</p>
                        <p className="text-xs text-grey truncate pr-6  ">
                          {chatMessages?.[0]?.message}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </div>
          </ul>
        </div>

        <div
          className={`${
            showMessage ? "col-span-12" : "hidden"
          }   xl:block  xl:col-span-7    relative overflow-auto no-scrollbar scroll-smooth`}
        >
          {
            singleChat && singleChat.length ? (
              <ChatComponent
                singleChat={chat}
                showMessage={showMessage}
                activeUser={activeUser}
              />
            ) : null
            //  setShowMessage(false)
          }
        </div>
      </div>
    </div>
  );
};

export default MessagesComponent;
