import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useNavigate } from "react-router-dom";
import PaymentService from "../services/payment";
import { Chat } from "@material-ui/icons";
import { useAdsContext } from "./useAdsContext";
const usePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState();
  const { dispatch } = useAdsContext();
  const navigate = useNavigate();

  const submitPayment = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await PaymentService.sendPayment(data);

      if (result.error === false) {
        success(result.message);
        navigate("/dashboard");
        setIsLoading(false);
        return result.error;
      } else {
        setIsLoading(false);
        errorToast(result.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const createOrder = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await PaymentService.createOrder(data);

      if (result.error === false) {
        success(result.message);
        navigate("/cart/shipping/billing");
        const order = result.data.order.orderId;
     dispatch({ type: "GET_ORDER_ID", payload: order });
        setOrderId(order);
        setIsLoading(false);
        return result.error;
      } else {
        errorToast(data.message);
        setIsLoading(false);
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
    createOrder,
    orderId,
  };
};

export default usePayment;
