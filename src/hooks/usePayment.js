import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useNavigate } from "react-router-dom";
import PaymentService from "../services/payment";
import { Chat } from "@material-ui/icons";
const usePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitPayment = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await PaymentService.sendPayment(data);

      if (result.error === false) {
        success(result.message);
        navigate("/dashboard");
        return result.error;
      } else {
        errorToast(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  return {
    submitPayment,
    isLoading,
  };
};

export default usePayment;
