import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useNavigate } from "react-router-dom";
const useFetchAds = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ads, setAds] = useState([]);
  const [singleAds, setSingleAd] = useState([]);
  const [featuredAds, setFeaturedAds] = useState([]);
  const navigate = useNavigate();
  const getAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getAds();

      if (data.error === false) {
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

      if (data.error === false) {
        setSingleAd(data.data.postAd);
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
      if (data.error === false) {
        success(data.message);
        return data.error;
      } else {
        errorToast(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const getCategories = async () => {
    setError(null);

    try {
      const data = await AdService.getCategories();

      if (data.error === false) {
      }
    } catch (error) {
      setError(error);
      errorToast(error.message);
    }
  };
  const getFeaturedAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getFeaturedAds();

      if (data.error === false) {
        setFeaturedAds(data.data.items);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
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
  };
};

export default useFetchAds;
