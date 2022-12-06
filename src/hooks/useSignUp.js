import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";
import useSignIn from "./useSignIn";
const useSignUp = () => {
  const navigate = useNavigate();
  const { signIn } = useSignIn();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const signUp = async (signUpData) => {
    try {
      const res = await AuthService.signUp(signUpData);

      const { status, data } = res;

      if (data == "User Added Successful") {
        // success(data);
        setIsLoading(false);

        const { username, password } = signUpData;
        const obj = { username, password };
        signIn(obj);
      } else {
        errorToast(data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      errorToast(error);
    }
  };

  return { isLoading, error, signUp };
};

export default useSignUp;
