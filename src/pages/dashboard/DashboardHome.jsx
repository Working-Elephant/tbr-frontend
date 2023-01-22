import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { login, description } from "../../store/features/authSlice";
import { useAdsContext } from "../../hooks/useAdsContext";
import useFetchAds from "../../hooks/useFetchAds";
import Home from "../../components/dashboard/Home";
import useSignIn from "../../hooks/useSignIn";
import { useDispatch, useSelector } from "react-redux";
const DashboardHome = () => {
  const { isLoading, getSellersReviews } = useFetchAds();
  const dispatch = useDispatch();
  const { addDescription } = useSignIn();
  const { user = {} } = useSelector((state) => state.auth.user);
  const [userObj, setUserObj] = useState();
  useEffect(() => {}, []);
  const id = user?.id;
  const { sellerReviews } = useAdsContext();
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    setUserObj(user);
    getSellersReviews(id);
  }, []);
  useEffect(() => {
    if (user?.description) {
      setShowEdit(true);
    }
    setShowEdit(false);
  }, []);
  const submitData = async (data) => {
    const { description: bio } = data;
    const status = await addDescription(bio);
    if (status) {
      dispatch(description(status));
      setUserObj(status);
      setShowEdit(false);
    }
  };
  return (
    <>
      <DashboardLayout>
        <Home
          user={userObj}
          reviews={sellerReviews}
          submitData={submitData}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      </DashboardLayout>
    </>
  );
};

export default DashboardHome;
