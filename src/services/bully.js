import axios from "../config/axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const BullyService = {
  getRegisteredBullies: async () => {
    return await axios.get(`${baseUrl}/Bully/all`).then((res) => {
      return res.data;
    });
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
    return await axios.post(`${baseUrl}/Bully/register`, post).then((res) => {
      // checkToken(res);
      return res.data;
    });
  },
};

export default BullyService;
