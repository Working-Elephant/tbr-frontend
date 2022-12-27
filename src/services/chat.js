import axios from "../config/axios";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
const ChatService = {
  getChats: async () => {
    return axios.get(`${baseUrl}/Chat/all`).then((res) => {
      return res.data;
    });
  },
  getSingleChat: async (id) => {
    return axios.get(`${baseUrl}/Chat/chat/${id}`).then((res) => {
      return res.data;
    });
  },
  sendMessage: async (message) => {
    return await axios.post(`${baseUrl}/Chat/send`, message).then((res) => {
      return res.data;
    });
  },
  createMessage: async (id) => {
    return await axios.post(`${baseUrl}/Chat/start`, id).then((res) => {
      return res.data;
    });
  },
};

export default ChatService;
