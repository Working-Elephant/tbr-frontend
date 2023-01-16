import axios from "../config/axios";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
const OrderService = {
  getOrders: async () => {
    return axios.get(`${baseUrl}/Order/all`).then((res) => {
      return res.data;
    });
  },
  getSingleOrder: async (id) => {
    return axios.get(`${baseUrl}/Order/view/${id}`).then((res) => {
      return res.data;
    });
  },
  addReview: async (obj) => {
    return axios.post(`${baseUrl}/Review/add`, obj).then((res) => {
      return res.data;
    });
  },
};

export default OrderService;
