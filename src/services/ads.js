import axios from "../config/axios";


let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AdService = {
  getAds: async () => {
    return await axios.get(`${baseUrl}/PostAdd`).then((res) => {
      return res;
    });
  },
  postAd: async (post) => {
    return await axios.post(`${baseUrl}/PostAdd`, post).then((res) => {
      return res;
    });
  },
};

export default AdService;
