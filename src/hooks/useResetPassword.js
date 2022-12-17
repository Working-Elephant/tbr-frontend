import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast } from "../components/shared";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const forgotPassword = async (Data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.forgotPassword(Data);
      const { data } = res;
      if (data.error === false) {
        console.log(data);
      } else {
        errorToast(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error, "error");
      errorToast("An Error Occured");
    }
  };

  return { isLoading, error, forgotPassword };
};

export default useResetPassword;
