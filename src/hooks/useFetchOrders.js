import { useState } from "react";
import AdService from "../services/ads";
import { warning, errorToast, success } from "../components/shared";
import { useAdsContext } from "./useAdsContext";
import OrderService from "../services/orders";
import { useNavigate } from "react-router-dom";
const useFetchOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState();
  const [singleOrder, setSingleOrder] = useState();
  const { dispatch } = useAdsContext();
  const navigate = useNavigate();

  const getOrders = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await OrderService.getOrders();

      if (result.error === false) {
        let orders = result.data;
        dispatch({ type: "GET_ORDERS", payload: orders });
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

  const getSingleOrder = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await OrderService.getSingleOrder(id);

      if (result.error === false) {
        let orders = result.data;
        // dispatch({ type: "GET_ORDERS", payload: orders });
        setSingleOrder(orders);
        setIsLoading(false);
        return result.error;
      } else {
        navigate("/dashboard/orders");
        setIsLoading(false);
        errorToast(result.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      errorToast(error.message);
    }
  };

  const addReviews = async (obj) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await OrderService.addReview(obj);

      if (result.error === false) {
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

  return {
    getOrders,
    isLoading,
    getSingleOrder,
    singleOrder,
    addReviews,
  };
};

export default useFetchOrders;
