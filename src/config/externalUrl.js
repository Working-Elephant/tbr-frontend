const { REACT_APP_BACKEND_URL } = process.env;

// Base External URL
const baseURL = REACT_APP_BACKEND_URL;

// Signup URL
export const signup = (email = '') => baseURL + `/signUp${email}`;
