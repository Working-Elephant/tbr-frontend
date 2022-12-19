import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast } from "../components/shared";
import { useDispatch } from "react-redux";
import { login } from "../store/features/authSlice";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

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

  return { isLoading, error, signIn };
};

export default useSignIn;
