import axios from "../config/axios";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
const PaymentService = {
  sendPayment: async (data) => {
    return axios.post(`${baseUrl}/Payment/submit`, data).then((res) => {
      return res.data;
    });
  },
};

export default PaymentService;
