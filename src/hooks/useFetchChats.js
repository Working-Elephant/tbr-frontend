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
        console.log(data.data, "tim");
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
        setSingleChat(data.data);

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const postAd = async (ad) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.postAd(ad);
      console.log(data);
      if (data.error === false) {
        success(data.message);
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
  };
};

export default useFetchChat;
