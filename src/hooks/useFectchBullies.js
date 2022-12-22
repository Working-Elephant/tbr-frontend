import { useState } from "react";
import BullyService from "../services/bully";
// import { useDispatch } from "react-redux";
import { warning, errorToast, success } from "../components/shared";
import { data } from "autoprefixer";

const useFetchBullies = () => {
  //   const  dispatch  = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [bullies, setBullies] = useState([]);
  const [breedType, setBullyType] = useState([]);
  const [error, setError] = useState(null);

  const getRegisteredBullies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await BullyService.getRegisteredBullies();

      const response = await res;
      console.log("response", response);

      if (response.error === false) {
        // success(data)
        setBullies(response.data.items);
        setIsLoading(false);
      } else {
        errorToast(response.message || `Unable to fetch registered Bullies`);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const getBreedType = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await BullyService.getBreedType();
      if (res) {
        const response = await res;
        console.log("response", response);

        if (response.error === false) {
          // success(data)
          // console.log(response.data, "tim");
          setBullyType(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };
  const registerBully = async (obj) => {
    console.log(obj, "object");
    setIsLoading(true);
    setError(null);

    try {
      const res = await BullyService.registerBully(obj);
      if (res) {
        const response = await res;

        if (response.error === false) {
          success(response.message);
          setIsLoading(false);
          return response.error;
        } else {
          warning(`Unable to register bully`);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  return {
    getRegisteredBullies,
    registerBully,
    isLoading,
    bullies,
    error,
    getBreedType,
    breedType,
  };
};

export default useFetchBullies;
