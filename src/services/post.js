import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const PostService = {
  getPosts: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
  addPost: async (email, password) => {
    return await axios
      .post(`${baseUrl}/signUp/${email}`, { email, password })
      .then((res) => {
        return res.data;
      });
  },
};

export default PostService;
