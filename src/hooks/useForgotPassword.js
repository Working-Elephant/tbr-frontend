import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";

const useForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const forgotPassword = async (Data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.forgotPassword(Data);
      const data = res;
      console.log(data, "data");
      if (data.error === false) {
        success(data.message);
        setIsLoading(false);
        reset();
      } else {
        errorToast(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      errorToast("An Error Occured");
    }
  };

  const reset = () => true;

  return { isLoading, error, forgotPassword, reset };
};

export default useForgotPassword;
