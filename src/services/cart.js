import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const CartService = {
  createCart: async (cartData) => {
    return await axios.post(`${baseUrl}/Cart`, cartData).then((res) => {
      return res.data;
    });
  },
  createShippingAddress: async (address) => {
    return await axios
      .post(`${baseUrl}/ShippingAddress`, address)
      .then((res) => {
        return res.data;
      });
  },
  createBillingAddress: async (address) => {
    return await axios
      .post(`${baseUrl}/BillingAddress`, address)
      .then((res) => {
        return res.data;
      });
  },
  createBillingDetails: async (billingDetails) => {
    return await axios
      .post(`${baseUrl}/Billing`, billingDetails)
      .then((res) => {
        return res.data;
      });
  },
  createOrderSummary: async (summary) => {
    return await axios
      .post(`${baseUrl}/OrderSummary`, summary)
      .then((res) => {
        return res.data;
      });
  },
};

export default CartService;
