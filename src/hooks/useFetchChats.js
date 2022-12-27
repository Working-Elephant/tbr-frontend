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
  const navigate = useNavigate();

  const getChats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await ChatService.getChats();
      if (data.error === false) {
        setChats(data.data);

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
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

  const getCategories = async () => {
    setError(null);

    try {
      const data = await AdService.getCategories();

      if (data.error === false) {
      }
    } catch (error) {
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
  };
};

export default useFetchChat;
