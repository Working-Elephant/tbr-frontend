import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AuthService = {
  signUp: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  login: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  getUser: () => {
    let user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    return user;
  },
  logout: async () => {
    return await axios
      .post(`${baseUrl}/signUp`)
      .then((res) => {
        return res.data;
      });
  },
  forgotPassword: async (email) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email})
      .then((res) => {
        return res.data;
      });
  },
};

export default AuthService;
