import axios from "axios"
// import { SignOut } from "@slices/user-slice";
// import { SignInUrl } from "@config/app-url";

let store

export const injectStore = _store => {
  store = _store
}

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // timeout: 1000,
    headers: {}
});  

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = JSON.parse(localStorage.getItem("token"))
    if (token) {
        config.headers.credentials = 'include';
        config.headers.common["x-access-token"] = token;
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
        store.dispatch(SignOut()).then(() => {
            window.location = SignInUrl
        });        
    }  
    return Promise.reject(error);
});
  
export default instance