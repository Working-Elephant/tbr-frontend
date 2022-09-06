const { REACT_APP_BACKEND_URL } = process.env;

// Base External URL
const baseURL = REACT_APP_BACKEND_URL;

// Signup URL
export const signup = () => baseURL + `/signUp`;
// login url
export const login = (email = '') => baseURL + `/signUp/${email}`;
// add post url
export const post = baseURL + `/PostAdd`;
// get posts
// export const getposts = () => baseURL + `/PostAdd`;
