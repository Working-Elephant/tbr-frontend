import React, { useState, useRef } from "react";

import { RiSearchLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import UserAvatar from "../shared/UserAvatar";
import useFetchChat from "../../hooks/useFetchChats";
import { useEffect } from "react";
import { findUpper } from "../../utils/Utils";
import { useForm } from "react-hook-form";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnectionState,
} from "@microsoft/signalr";
const ChatComponent = ({
  singleChat,
  showMessage,
  setShowMessage,
  activeUser,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const { sendChat } = useFetchChat();
  const [chat, setChat] = useState([]);
  const [connection, setConnection] = useState(null);
  const [chatObject, setChatObject] = useState(null);
  const latestChat = useRef(null);
  const bottomRef = useRef(null);
  latestChat.current = chat;
  const onSubmit = async (data) => {
    const { chatId } = activeUser;
    const obj = { ...data, chatId };
    const status = await sendChat(obj);
    if (!status) reset();
  };
  useEffect(() => {
    setChat(singleChat);
  }, [singleChat]);
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
            const updatedChat = [...latestChat.current];

            updatedChat.push(message);
            const newList = new Set([...updatedChat]);

            console.log(newList, "newlist");
            setChat([...newList]);
          });
        }
      }
    }
  }, [connection]);

  // 👇️ scroll to bottom every time messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="">
      <div className=" h-[100vh] grid grid-cols-12 ">
        <div
          className={`${
            showMessage ? "col-span-12" : "hidden"
          }   xl:block  xl:col-span-12    relative overflow-auto no-scrollbar scroll-smooth`}
        >
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
                    text={findUpper(activeUser?.username)}
                    width="w-12"
                    height="h-10"
                  />
                )}

                <span className="ml-3 text-xs"> {activeUser?.username}</span>
              </div>
            </div>
            <div className="  px-4 h-[70%] overflow-auto no-scrollbar">
              {chat?.map((chatMessages, i) => (
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
              <div ref={bottomRef} />
            </div>
            <div className="border-.5 border-borderGrey rounded p-3  absolute bottom-0 left-0 right-0">
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
                <div className="flex items-center  ">
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
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
