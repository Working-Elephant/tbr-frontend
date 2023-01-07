import React, { useState, useEffect } from "react";
import PetBannerImage from "../assets/images/home_header.jpg";
import BreadCrumb from "../components/shared/BreadCrumb";
import Pagination from "../components/shared/Pagination";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import { Filter, Loader } from "../components/shared";
// import {  featuredAdsData } from "../mockData/mockData";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsSlice } from "../store/features/productSlice";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useFetchAds from "../hooks/useFetchAds";
import AdCard from "../components/shared/AdCard";
import { useAdsContext } from "../hooks/useAdsContext";
// import { isResponseSuccess } from "../utils";

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryName } = location?.state || {};
  const { adsByCategory } = useAdsContext();
  const { isLoading, getAdsByCategories } = useFetchAds();
  // useEffect(() => {
  //   dispatch(fetchPostsSlice());
  // }, [dispatch]);

  useEffect(() => {
    if (!category) return navigate("/categories");
    getAdsByCategories(category);
  }, []);
  const { loading, products } = useSelector((state) => state.product);
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: category ?? "Category",
    },
  ];
  // const [perPage] = useState(6);
  // const [firstIndex, setFirstIndex] = useState(0);
  // const [currentData, setCurrentData] = useState([]);
  // const [selected, setSelected] = useState(0);
  // const total = Math.ceil(products.length / perPage);

  // useEffect(() => {
  //   const lastIndex = firstIndex + perPage;
  //   setCurrentData(products.slice(firstIndex, lastIndex));
  // }, [products, perPage, firstIndex]);

  // const paginate = (ev) => {
  //   console.log(ev.selected, "selected");
  //   let newOffSet = (ev.selected * perPage) % products.length;
  //   setFirstIndex(newOffSet);
  //   setSelected(ev.selected);
  // };

  return (
    <div className="">
      <div
        className="w-full h-[40vh] bg-no-repeat bg-cover bg-center text-center py-3 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${PetBannerImage}')`,
        }}
      >
        <div className=" m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {category}
          </h2>
        </div>
      </div>
      <div className="my-4 px-5 lg:w-11/12 xl:w-10/12 mx-auto ">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="p-5  w-full lg:w-11/12 xl:w-10/12 mx-auto lg:grid lg:grid-cols-12 lg:gap-6">
        <div className=" lg:block lg:col-span-2">
          <Filter showCategory={false} type={category} />
        </div>
        <div className=" lg:col-span-10 lg:mt-4">
          <div className="flex justify-end">
            <div className="border border-borderGrey mb-8 py-2 px-3 w-fit">
              <select className="pr-5 text-sm focus:outline-none">
                <option>Sort By</option>
                <option>Price</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {isLoading && <Loader />}
            {adsByCategory?.items?.length ? (
              adsByCategory?.items?.map((item, i) => {
                return <AdCard key={i} item={item} showLike />;
              })
            ) : (
              <p>No Data Available</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        {/* <Pagination
          total={total}
          perPage={perPage}
          paginate={paginate}
          selected={selected}
        /> */}
      </div>
    </div>
  );
};

export default SingleCategory;
