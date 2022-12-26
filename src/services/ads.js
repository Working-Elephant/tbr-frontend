import axios from "../config/axios";

let baseUrl = process.env.VITE_BACKEND_URL;
const AdService = {
  getAds: async () => {
    return axios.get(`${baseUrl}/PostAd/user?limit=50&page=1`).then((res) => {
      return res.data;
    });
  },
  getSingleAd: async (id) => {
    return axios.get(`${baseUrl}/PostAd/view/${id}`).then((res) => {
      return res.data;
    });
  },
  postAd: async (post) => {
    return await axios.post(`${baseUrl}/PostAd/add`, post).then((res) => {
      return res.data;
    });
  },
  getCategories: async () => {
    return await axios.get(`${baseUrl}/Category`).then((res) => {
      return res;
    });
  },
};

export default AdService;
