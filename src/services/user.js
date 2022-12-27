import axios from "axios";
import isResponseSuccess from "../utils/successResponse";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
console.log(baseUrl, "base");
const AuthService = {
  signUp: async (data) => {
    return axios
      .post(`${baseUrl}/SignUp`, data)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  login: async (data) => {
    return await axios
      .post(`${baseUrl}/Login/authenticate`, data)
      .then((res) => {
        if (isResponseSuccess(res.status)) {
          return res;
        }
        return res;
      });
  },
  getUser: () => {
    let user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    return user;
  },
  logout: async () => {
    localStorage.removeItem("user");
  },
  forgotPassword: async (data) => {
    return await axios.post(`${baseUrl}/Password/forgot`, data).then((res) => {
      return res.data;
    });
  },
  resetPassword: async (username) => {
    return await axios
      .post(`${baseUrl}/Password/reset`, { username })
      .then((res) => {
        return res.data;
      });
  },
};

export default AuthService;
