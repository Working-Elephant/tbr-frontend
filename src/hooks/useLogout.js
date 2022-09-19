import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";


const useLogOut = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isAborted, setIsAborted] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const logOut = () => {
    setIsLoading(true);
    setError(null);

    try {
      AuthService.logout();
      dispatch(logout());

      if (!isAborted) {
        setIsLoading(false);
        setError(null);
        navigate(`/home`)
      }
    } catch (error) {
      if (!isAborted) {
        setError(error);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    return () => {
      setIsAborted(true);
    };
  }, []);

  return { isLoading, error, logOut };
};

export default useLogOut;
