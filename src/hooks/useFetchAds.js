import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast } from "../components/shared";
import isResponseSuccess from "../utils/successResponse";

const useFetchAds = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { status, } = await AdService.getAds();
      if (isResponseSuccess(status)) {
        // success(data)
        setIsLoading(false);
        return status;
      }
      throw new Error("Unable to fetch ads");
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
      const { status,  } = await AdService.postAd(ad);
      if (isResponseSuccess(status)) {
        // success(data);
        setIsLoading(false);
        return status;
      }
      warning("unable to post ad")
      throw new Error("Unable to fetch ads");
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  return { getAds, postAd, isLoading, error };
};

export default useFetchAds;
