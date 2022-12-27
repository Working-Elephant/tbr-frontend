import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import UserAvatar from "../shared/UserAvatar";
import useFetchChat from "../../hooks/useFetchChats";
import { useEffect } from "react";
import { findUpper } from "../../utils/Utils";
import ChatComponent from "./ChatComponent";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnectionState,
} from "@microsoft/signalr";

const MessagesComponent = () => {
  const { getChats, chats, isLoading, getSingleChat, singleChat } =
    useFetchChat();
  const [activeUser, setActiveUser] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const [chatObject, setChatObject] = useState(null);
  const latestChat = useRef(null);
  latestChat.current = chat;
  //get all chats
  useEffect(() => {
    getChats();
  }, []);
  useEffect(() => {
    setChat(singleChat);
  }, [singleChat]);
  //set recipient
  const setUser = async (user) => {
    const status = await getSingleChat(user.chatId);
    setActiveUser(user);
    if (!status) {
      setShowMessage(true);
      // setChat(singleChat);
    }
  };

  //const goBack = () => setShowMessage(false);

  //  //start chat
  //  useEffect(() => {
  //    const requestOptions = {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify({ RecipientId: 2 }),
  //    };
  //    fetch(
  //      "https://da16-154-160-9-103.eu.ngrok.io/api/Chat/start",
  //      requestOptions
  //    )
  //      .then((response) => response.json())
  //      .then((data) => {
  //        // console.log(data.data)
  //        setChatObject(data.data);
  //      });
  //  }, []);

  //establish socket connection
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://da16-154-160-9-103.eu.ngrok.io/hubs/chat")
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    setConnection(newConnection);
  }, []);

  //check connection and reestablish
  useEffect(() => {
    if (connection) {
      if (connection.state === HubConnectionState.Disconnected) {
        connection
          .start()
          .then((result) => {
            handleListen();
          })
          .catch((e) => console.log("Connection failed: ", e));
      } else {
        console.log("Connected!");
        handleListen();
      }

      function handleListen() {
        if (activeUser?.chatId) {
          connection.on(activeUser?.chatId.toString(), (message) => {
            console.log(message, "io");
            const updatedChat = [...latestChat.current];
            console.log(updatedChat, "updated");
            updatedChat.push(message);
            const newList = new Set(updatedChat);

            setChat([...newList]);
          });
        }
      }
    }
  }, [connection, chat]);
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
                    className={`border-.5 border-borderGrey rounded cursor-pointer ${
                      activeUser?.chatParticipants?.[0].id ===
                      chatParticipants?.[0].id
                        ? "bg-borderGrey"
                        : ""
                    }`}
                    onClick={() => {
                      setUser(chatParticipants?.[0]);
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
            chat && chat?.length ? (
              <ChatComponent
                singleChat={chat}
                showMessage={showMessage}
                activeUser={activeUser}
                setShowMessage={setShowMessage}
              />
            ) : null
            //
          }
        </div>
      </div>
    </div>
  );
};

export default MessagesComponent;
