import { useState } from "react";
import BullyService from "../services/bully";
// import { useDispatch } from "react-redux";
import { warning, errorToast, success } from "../components/shared";

const useFetchBullies = () => {
//   const  dispatch  = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [bullies, setBullies]= useState([])
  const [error, setError] = useState(null);

  const getRegisteredBullies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await BullyService.getRegisteredBullies()
      if (res) {
        const response = await res;
        console.log('response',response)
        const { status, data  } = response;

        if (status === 200) {
          // success(data)
          setBullies(data)
          setIsLoading(false);
          return status;
        } else {
          warning(`Unable to fetch registered Bullies`);
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
    console.log(obj, 'object')
    setIsLoading(true);
    setError(null);

    try {
      const res = await BullyService.registerBully(obj)
      if (res) {
        const response = await res;
        const { status, data  } = response;

        if (status === 200) {
          success(data)
          setIsLoading(false);
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
 

  return { getRegisteredBullies, registerBully,  isLoading,bullies, error };
};

export default useFetchBullies;
