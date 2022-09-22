import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast } from "../components/shared";
import { useDispatch } from "react-redux";
import { login } from "../store/features/authSlice";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isAborted, setIsAborted] = useState(false);
  const [error, setError] = useState(null);
  const signIn = async (loginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.login(loginData);
      const { status, data } = res;

      if (status === 200) {
        let userObj = { token: data[0], userId: data[1] };
        dispatch(login(userObj));
        localStorage.setItem("user", JSON.stringify(userObj));

        setIsLoading(false);
        navigate("/dashboard");
      }
      setIsLoading(false);

      if (!isAborted) {
        setIsLoading(false);
        setError(null);
      }
    } catch (error) {
      setIsLoading(false);
      errorToast(error.message);

      if (!isAborted) {
        console.log(error, "error");
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    return () => {
      setIsAborted(true);
    };
  }, []);

  return { isLoading, error, signIn };
};

export default useSignIn;
