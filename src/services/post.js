import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const PostService = {
  getPosts: async () => {
    return await axios
      .get(`${baseUrl}/PostAdd`)
      .then((res) => {
        return res.data;
      });
  },
  addPost: async (post) => {
    return await axios
      .post(`${baseUrl}/PostAdd`, post)
      .then((res) => {
        return res.data;
      });
  },
};

export default PostService;
