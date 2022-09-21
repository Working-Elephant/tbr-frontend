import axios from "axios";
import authHeader from "./auth-header";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AdService = {
  getAds: async () => {
    return await axios
      .get(`${baseUrl}/PostAdd`, {
        headers: authHeader(),
      })
      .then((res) => {
        return res;
      });
  },
  postAd: async (post) => {
    return await axios.post(`${baseUrl}/PostAdd`, post , {
      headers: authHeader(),
    }).then((res) => {
      return res;
    });
  },
};

export default AdService;
