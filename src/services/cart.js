import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const CartService = {
  createCart: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  updateCart: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  createShippingAddress: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  createBillingAddress: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
};

export default CartService;
