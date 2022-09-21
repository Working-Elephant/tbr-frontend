import axios from "axios";
import authHeader from "./auth-header";
import { checkToken } from "../utils/Utils";

let baseUrl = process.env.REACT_APP_BACKEND_URL;
const AdService = {
  getAds: async () => {
    return await axios
      .get(`${baseUrl}/PostAdd`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log('res', res)
        checkToken(res);
        return res;
      })
      // .catch((err)=>{
      //   console.log('err',err)
      //   checkToken(err)
      //   return err
      // })
  },
  postAd: async (post) => {
    return await axios
      .post(`${baseUrl}/PostAdd`, post, {
        headers: authHeader(),
      })
      .then((res) => {
        checkToken(res);
        return res;
      });
  },
};

export default AdService;
