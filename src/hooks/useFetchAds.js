import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast } from "../components/shared";
import isResponseSuccess from "../utils/successResponse";

const useFetchAds = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ads, setAds] = useState([]);

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
  const postAd = async (ad) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.postAd(ad);
      console.log(data, "data");
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const getCategories = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.getCategories();

      if (data.error === false) {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  return { getAds, postAd, isLoading, error, ads, getCategories };
};

export default useFetchAds;
