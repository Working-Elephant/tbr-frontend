import axios from "axios";
import isResponseSuccess from "../utils/successResponse";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AuthService = {
  signUp: async (data) => {
    axios.post(`${baseUrl}/signUp`, data).then((res) => {
      return res;
    });
  },
  login: async (data) => {
    return await axios
      .post(`${baseUrl}/SignUser/authenticate`, data)
      .then((res) => {
        if (isResponseSuccess(res.status)) {
          let userObj = { token: res.data[0], userId: res.data[1] };
          localStorage.setItem("user", JSON.stringify(userObj));
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
  // forgotPassword: async (email) => {
  //   return await axios
  //     .post(`${baseUrl}/signUp/${email}`, { email})
  //     .then((res) => {
  //       return res.data;
  //     });
  // },
};

export default AuthService;
