import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";
import AdService from "../services/ads";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const forgotPassword = async (Data) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const res = await AuthService.forgotPassword(Data);
  //     const data = res;
  //     if (data.error === false) {
  //     } else {
  //       errorToast(data.message);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error, "error");
  //     errorToast("An Error Occured");
  //   }
  // };

  const resetPassword = async (Data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.resetPassword(Data);
      const data = res;

      if (data.error === false) {
        success(data.message);
        navigate("/login");
        return data.error;
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

  const changePassword = async (Data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AdService.changePassword(Data);
      const data = res;

      if (data.error === false) {
        success(data.message);
        navigate("/dashboard/home");
        setIsLoading(false);
        return data.error;
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

  return { isLoading, error, resetPassword, changePassword };
};

export default useResetPassword;
