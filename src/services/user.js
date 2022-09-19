import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AuthService = {
  signUp: async (data) => {
    return await axios
      .post(`${baseUrl}/signUp`, data)
      .then((res) => {
        return res;
      });
  },
  login: async (data) => {
    return await axios
      .post(`${baseUrl}/SignUser/authenticate`, data)
      .then((res) => {
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
  localStorage.removeItem("user")
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
