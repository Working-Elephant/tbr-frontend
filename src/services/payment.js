import axios from "../config/axios";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
const PaymentService = {
  sendPayment: async (data) => {
    return axios.post(`${baseUrl}/Payment/submit`, data).then((res) => {
      return res.data;
    });
  },
  createOrder: async (data) => {
    return axios.post(`${baseUrl}/Order/create`, data).then((res) => {
      return res.data;
    });
  },
};

export default PaymentService;
