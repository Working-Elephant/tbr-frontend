import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import useFetchBullies from "../../hooks/useFectchBullies";

const RegisteredBullies = () => {
  const { isLoading, getRegisteredBullies } = useFetchBullies();
  useEffect(() => {
    getRegisteredBullies();
  }, []);
  return (
    <>
      <div className="flex items-center justify-between mb-3 px-5">
        <h6>Your Registered Bullies({0})</h6>
        <Link to="/dashboard/bully-registration/register-bully">
          <div className="p-3 bg-black text-white text-sm rounded-md flex items-center">
            <i className="text-white mr-4">
              <BsPlusCircle />
            </i>
            <button className="mx-4"> Register Bully </button>
          </div>
        </Link>
      </div>
      {/* <div className="border-l border-l-borderGrey px-3"> */}
      {/* <div className="grid grid-cols-2 gap-3 lg:grid-cols-3  xl:grid-cols-4 place-content-center">
            {isLoading ? (
              <div className="flex justify-center items-center w-full ">
                <div className="w-fit mx-auto">
                <Loader size={60} />
                </div>
              </div>
            ) : adsData && adsData.length > 0 ? (
              adsData.map((item, i) => {
                return <PetCard key={i} item={item} />;
              })
            ) : (
              <div>
                <p>No Ads found</p>
              </div>
            )}
          </div> */}
      {/* </div> */}
    </>
  );
};

export default RegisteredBullies;
