import axios from "../config/axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const BullyService = {
  getRegisteredBullies: async () => {
    return await axios.get(`${baseUrl}/Register`).then((res) => {
      // console.log('res', res.data)
      // checkToken(res.data);
      return res.data;
    });
    // .catch((err)=>{
    //   console.log('err',err.response)
    //   checkToken(err.response)
    //   return err
    // })
  },
  getBreedType: async () => {
    return await axios
      .get(`${baseUrl}/BreedType`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
  registerBully: async (post) => {
    return await axios.post(`${baseUrl}/Register`, post).then((res) => {
      // checkToken(res);
      return res.data;
    });
  },
};

export default BullyService;
