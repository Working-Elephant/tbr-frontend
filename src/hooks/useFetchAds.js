import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import { useAdsContext } from "./useAdsContext";
import _ from "lodash";
const useFetchAds = () => {
  const { dispatch } = useAdsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ads, setAds] = useState([]);
  const [singleAds, setSingleAd] = useState();
  const [sellersReviews, setSellersReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [featuredAds, setFeaturedAds] = useState([]);
  const [favouriteAds, setFavouriteAds] = useState([]);
  const [adsByCategory, setAdsByCategory] = useState([]);
  const navigate = useNavigate();
  const getAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getAds();

      if (data?.error === false) {
        setAds(data.data.items);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const getSingleAd = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getSingleAd(id);

      if (data?.error === false) {
        const single = data.data.postAd;
        const seller = data.data.user;
        console.log(seller, "seller");

        setSingleAd(single);
        dispatch({ type: "GET_SELLER", payload: seller });
        dispatch({ type: "GET_SINGLE_AD", payload: single });
        const categoryName = data?.data?.postAd?.category?.categoryName;
        setCategoryName(categoryName);
        getAdsByCategories(categoryName);
        getSellersReviews(seller?.id);
        navigate(`/ad/view/${id}`);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const postAd = async (ad) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.postAd(ad);
      console.log(data);
      if (data?.error === false) {
        success(data.message);
        return data.error;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const getCategories = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const data = await AdService.getCategories();

      if (data?.error === false) {
        const rawCategories = data.data;
        const sortedCategories = _.sortBy(rawCategories, [
          (category) => category.categoryName === "Shop Tbr",
          (category) => category.categoryName === "Pets",
          (category) => category.categoryName,
        ]).reverse();

        setCategories(sortedCategories);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
      errorToast(error.message);
    }
  };
  const getFeaturedAds = async (limit = 10, page = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getFeaturedAds();

      if (data?.error === false) {
        const featured = data.data.items;
        dispatch({ type: "GET_FEATURED_ADS", payload: featured });
        setFeaturedAds(featured);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const getAdsByCategories = async (categoryName, limit = 10, page = 1) => {
    setError(null);
    setIsLoading(true);
    try {
      const data = await AdService.getAdsByCategories(
        categoryName,
        limit,
        page
      );
      if (data?.error === false) {
        const ads = data.data;
        dispatch({ type: "GET_ADS_BY_CATEGORY", payload: ads });
        setAdsByCategory(data.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
      errorToast(error.message);
    }
  };
  const getSellersReviews = async (id, limit = 10, page = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getReviews(id, limit, page);

      if (data?.error === false) {
        const reviews = data.data.items;
        dispatch({ type: "GET_SELLER_REVIEWS", payload: reviews });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const favouriteAd = async (obj) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.favouriteAd(obj);

      if (data?.error === false) {
        setIsLoading(false);
        return data.error;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log(error, "e");
      errorToast(error.message);
    }
  };
  const getfavouriteAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getfavouriteAds();

      if (data?.error === false) {
        setIsLoading(false);
        const fav = data?.data?.posts;
        console.log(fav, "fav");
        setFavouriteAds(fav);
        return data.error;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log(error, "e");
      errorToast(error.message);
    }
  };

  return {
    getAds,
    postAd,
    isLoading,
    error,
    ads,
    getCategories,
    getSingleAd,
    singleAds,
    getFeaturedAds,
    featuredAds,
    categories,
    getAdsByCategories,
    adsByCategory,
    categoryName,
    sellersReviews,
    getSellersReviews,
    favouriteAd,
    getfavouriteAds,
    favouriteAds,
  };
};

export default useFetchAds;
