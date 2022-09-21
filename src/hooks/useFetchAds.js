import { useState } from "react";
import AdService from "../services/ads";
// import { useDispatch } from "react-redux";
import { warning, errorToast, success } from "../components/shared";

const useFetchAds = () => {
//   const  dispatch  = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAds = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AdService.getAds();
      if (res) {
        const response = await res;
        console.log('response',response)
        const { status,  data } = response;

        if (status === 200) {
          // success(data)
          setIsLoading(false);
        } else {
          warning(`Unable to fetch ads`);
          setIsLoading(false);
        }
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
      const res = await AdService.postAd(ad);
      if (res) {
        const response = await res;
        const { status, data  } = response;

        if (status === 200) {
          success(data)
          setIsLoading(false);
        } else {
          warning(`Unable to post ad`);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
 

  return { getAds, postAd,  isLoading, error };
};

export default useFetchAds;
