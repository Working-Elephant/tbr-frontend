import React, { useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Orders from "../../components/dashboard/Orders";
import { useAdsContext } from "../../hooks/useAdsContext";
import useFetchAds from "../../hooks/useFetchAds";
import Favorites from "../../components/dashboard/Favorites";

const FavoritePage = () => {
  const { isLoading, getfavouriteAds, favouriteAds } = useFetchAds();
  useEffect(() => {
    getfavouriteAds();
  }, []);
  console.log(favouriteAds, "here");
  return (
    <>
      <DashboardLayout>
        <Favorites isLoading={isLoading} favouriteAds={favouriteAds} />
      </DashboardLayout>
    </>
  );
};

export default FavoritePage;
