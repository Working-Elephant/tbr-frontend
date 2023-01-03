import axios from "axios";
import { logout } from "../store/features/authSlice";
import isResponseSuccess from "../utils/successResponse";
import useLogOut from "../hooks/useLogout";
let baseUrl = import.meta.env.VITE_BACKEND_URL;

const AuthService = {
  signUp: async (data) => {
    return axios
      .post(`${baseUrl}/SignUp`, data)
      .then((res) => {
        return res.data;
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
    const { logOut } = useLogOut();
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return logOut();
    }
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
