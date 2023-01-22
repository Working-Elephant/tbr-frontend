import axios from "../config/axios";

let baseUrl = import.meta.env.VITE_BACKEND_URL;
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
      return res.data;
    });
  },
  getFeaturedAds: async () => {
    return axios
      .get(`${baseUrl}/PostAd/featured?limit=9&page=1`)
      .then((res) => {
        return res.data;
      });
  },
  getAdsByCategories: async (categoryName, limit, page) => {
    return axios
      .get(
        `${baseUrl}/PostAd/category/${categoryName}?limit=${limit}&page=${page}`
      )
      .then((res) => {
        return res.data;
      });
  },
  getReviews: async (id, limit, page) => {
    return axios
      .get(`${baseUrl}/Review/user/${id}?limit=${limit}&page=${page}`)
      .then((res) => {
        return res.data;
      });
  },
  favouriteAd: async (obj) => {
    return axios.post(`${baseUrl}/PostAd/user/favourite`, obj).then((res) => {
      return res.data;
    });
  },
  getfavouriteAds: async (obj = { action: "Get" }) => {
    return axios.post(`${baseUrl}/PostAd/user/favourite`, obj).then((res) => {
      return res.data;
    });
  },
  addDescription: async (description) => {
    return await axios
      .post(`${baseUrl}/Profile/description`, { description })
      .then((res) => {
        return res.data;
      });
  },
  changePassword: async (obj) => {
    return await axios.post(`${baseUrl}/Password/change`, obj).then((res) => {
      return res.data;
    });
  },
};

export default AdService;
