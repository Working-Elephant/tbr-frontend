import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useNavigate } from "react-router-dom";
import ChatService from "../services/chat";
import { Chat } from "@material-ui/icons";
const useFetchChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chats, setChats] = useState([]);
  const [singleChat, setSingleChat] = useState([]);
  const [chatId, setchatId] = useState("");

  const getChats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await ChatService.getChats();
      if (data.error === false) {
        setChats(data.data);

        setIsLoading(false);
      } else {
      }
    } catch (error) {
      setIsLoading(false);
      errorToast(error.message);
    }
  };

  const getSingleChat = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await ChatService.getSingleChat(id);

      if (data.error === false) {
        setSingleChat(data.data.chatMessages);
        console.log(data.data.chatMessages, "tim");
        setIsLoading(false);
        return data.error;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const sendChat = async (message) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await ChatService.sendMessage(message);

      if (data.error === false) {
        //  success(data.message);
        return data.error;
      } else {
        errorToast(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const startChat = async (message) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await ChatService.createMessage(message);

      if (data.error === false) {
        setSingleChat(data.data.chatMessages);
        setIsLoading(false);
        const chatId = data.data.id;
        setchatId(chatId);
        //  success(data.message);
        return data.error;
      } else {
        setIsLoading(false);
        errorToast(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  return {
    getChats,
    chats,
    getSingleChat,
    singleChat,
    isLoading,
    sendChat,
    startChat,
    chatId,
  };
};

export default useFetchChat;
