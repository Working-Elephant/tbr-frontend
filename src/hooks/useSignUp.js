import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";


const useSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isAborted, setIsAborted] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (signUpData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.signUp(signUpData);
      const { status, data  } = res;

      if (status === 200) {
        success(data)
        setIsLoading(false)
        navigate("/login")
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

  return { isLoading, error, signUp };
};

export default useSignUp;
