import React, { useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Orders from "../../components/dashboard/Orders";
import { useAdsContext } from "../../hooks/useAdsContext";
import useFetchOrders from "../../hooks/useFetchOrders";

const OrdersPage = () => {
  const { isLoading, getOrders } = useFetchOrders();
  const { orders } = useAdsContext();
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <DashboardLayout>
        <Orders orders={orders} isLoading={isLoading} />
      </DashboardLayout>
    </>
  );
};

export default OrdersPage;
