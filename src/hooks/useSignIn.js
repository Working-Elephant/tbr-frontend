import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";
import { useDispatch } from "react-redux";
import { login } from "../store/features/authSlice";
import AdService from "../services/ads";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [descriptionData, setDescription] = useState(false);

  const [error, setError] = useState(null);
  const signIn = async (loginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.login(loginData);
      const { data } = res;
      if (data.error === false) {
        let userObj = { token: data.message, user: data.data };
        console.log(userObj, "obj");
        dispatch(login(userObj));
        localStorage.setItem("user", JSON.stringify(userObj));
        setIsLoading(false);
        navigate("/dashboard");
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

  const addDescription = async (obj) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await AdService.addDescription(obj);

      if (data?.error === false) {
        setIsLoading(false);
        success(data.message);
        setDescription(data.data);
        return data.data;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);

      errorToast(error.message);
    }
  };

  return { isLoading, error, signIn, addDescription, descriptionData };
};

export default useSignIn;
