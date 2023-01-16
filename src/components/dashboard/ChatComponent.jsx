import React, { useState, useRef } from "react";

import { FaChevronLeft } from "react-icons/fa";
import UserAvatar from "../shared/UserAvatar";
import useFetchChat from "../../hooks/useFetchChats";
import { useEffect } from "react";
import { findUpper } from "../../utils/Utils";
import { useForm } from "react-hook-form";
import DropZone from "./Dropzone";
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
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const chaturl = import.meta.env.VITE_CHAT_URL;
  const { register, handleSubmit, reset } = useForm();
  const { sendChat } = useFetchChat();
  const [chat, setChat] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [connection, setConnection] = useState(null);
  const [files, setFiles] = useState([]);
  const latestChat = useRef(null);
  const bottomRef = useRef(null);
  latestChat.current = chat;
  const { chatId } = activeUser;
  const onSubmit = async (data) => {
    const { message } = data;
    setDisabled(true);

    const formdata = new FormData();
    if (files.length) {
      for (var i = 0; i < files.length; i++) {
        console.log([files[i]], "tim");
        formdata.append("images", files[i]);
      }
    }

    formdata.append("chatId", chatId);
    formdata.append("message", message);

    const status = await sendChat(formdata);
    if (!status) {
      resetForm();
    }
  };

  const resetForm = () => {
    setDisabled(false);
    setFiles([]);
    reset();
  };
  useEffect(() => {
    setChat(singleChat);
  }, [singleChat]);
  //establish socket connection
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(`${baseUrl}/hubs/chat`)
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
        if (chatId) {
          connection.on(`${chatId.toString()}_chat_channel`, (message) => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);
            const newList = new Set([...updatedChat]);

            setChat([...newList]);
          });
        }
      }
    }
  }, [connection]);

  const onerror = (data) => {
    console.log(data);
  };
  // 👇️ scroll to bottom every time messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>
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
            <div className="  px-4 h-[75%] overflow-auto no-scrollbar">
              {chat?.map((chatMessages, i) => (
                <div
                  key={i}
                  className={`px-5 py-3  mt-4 rounded-3xl w-fit max-w-[70%] ${
                    activeUser.userId === chatMessages?.senderId
                      ? "bg-borderGrey ml-auto "
                      : "bg-[#FFFCF2] mr-auto"
                  } `}
                >
                  {chatMessages?.message ? (
                    <p className="text-xs text-textMuted leading-6">
                      {chatMessages?.message}
                    </p>
                  ) : null}

                  {chatMessages?.chatMessageImages?.length ? (
                    <img
                      src={`${chaturl}${chatMessages?.chatMessageImages?.[0]?.url}`}
                      //style={img}
                      // Revoke data uri after image is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(
                          `${chaturl}${chatMessages?.chatMessageImages?.[0]?.url}`
                        );
                      }}
                    />
                  ) : null}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="border-.5 border-borderGrey rounded p-3  absolute bottom-0 left-0 right-0">
              <form onSubmit={handleSubmit(onSubmit, onerror)}>
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
                    <DropZone setFiles={setFiles} files={files} />
                  </i>
                  <button
                    className=" bg-yellow px-6 py-2 rounded-3xl text-xs   "
                    type="submit"
                    disabled={isDisabled}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
