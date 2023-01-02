import axios from "axios";
import { errorToast } from "../components/shared";
import { logout } from "../store/features/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // timeout: 1000,
  headers: {},
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = localStorage.getItem("user");
    if (user) {
      const { token } = JSON.parse(user);
      config.headers.credentials = "include";
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      console.log("error401");
      store.dispatch(logout());
      const obj = {
        data: errorToast("Token Expired! Kindly login again"),
      };
      return obj;
    }
    return Promise.reject(error);
  }
);

export default instance;
