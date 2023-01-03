import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageModal, Loader } from "../../components/shared";
import SellerInfo from "../../components/ads/SellerInfo";
import SimilarProducts from "../../components/ads/SimilarProducts";
import RecentlyViewed from "../../components/ads/RecentlyViewed";
import SellerAvatar1 from "../../assets/images/avatar1.jpeg";
// import { carouselImages } from "../../mockData/mockData";
import useFetchAds from "../../hooks/useFetchAds";
import {
  BsChatText,
  BsPlus,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import { MdClose } from "react-icons/md";
import { FaCamera, FaBorderAll, FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addFeatured } from "../../store/features/productSlice";
import AuthService from "../../services/user";
import ChatComponent from "../../components/dashboard/ChatComponent";
import useFetchChat from "../../hooks/useFetchChats";
import { success } from "../../components/shared";

const ViewAdDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getSingleAd, singleAds } = useFetchAds();
  const { startChat, isLoading, singleChat } = useFetchChat();
  // const { getUser } = AuthService;
  // const user = getUser();
  // const userID = user ? user.user.id : null;

  const user = useSelector((state) => state?.auth?.user);
  const userID = user?.user?.id;

  const thumbnailsContainer = useRef(null);
  const [ImageInView, setImageInView] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!singleAds.length) {
      getSingleAd(id);
    }
  }, []);

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const setImage = (i) => {
    setImageInView(i);
  };
  const goBack = () => {
    navigate(-1);
  };
  const [fullImage, setFullImage] = useState(false);
  // const [viewAge, setViewAge] = useState(false);

  const handleClose = () => {
    setFullImage(!fullImage);
  };
  const handleChatClose = () => {
    setShowChat(false);
  };
  const activeUser = {
    chatId: singleAds?.userId,
  };
  const openChat = async () => {
    if (userID) {
      const status = await startChat(singleAds?.userId);
      if (!status) {
        setShowChat(true);
      }
    } else {
      navigate("/login");
    }
  };
  const imageurl = import.meta.env.VITE_IMAGE_URL;

  const addItemToCart = () => {
    if (!singleAds) return;
    success("Item Added to Cart");
    dispatch(addToCart(singleAds));
    console.log("here");
  };
  const goToCart = () => {
    if (!singleAds) return;
    dispatch(addToCart(singleAds));
    navigate("/cart");
  };

  const makeFeatured = () => {
    if (!singleAds) return;
    dispatch(addFeatured(singleAds));
    navigate(`/featured/billing/${id}`);
  };

  return (
    <>
      <div className="p-5  lg:py-10 lg:px-12">
        <div className="px-6 mb-4">
          {/* <BreadCrumb crumbs={crumbs} /> */}
          <div className="inline-flex cursor-pointer">
            <div
              className="py-2 px-3 bg-borderGrey rounded-lg flex items-center text-xs "
              onClick={goBack}
            >
              <i className="mr-3">
                <FaArrowLeft />
              </i>
              <span>Back</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-8 mb-6">
          <div className=" col-span-12    xl:col-span-9  px-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className=" flex flex-col px-2">
                <div className="w-full mb-4 relative">
                  <div className="absolute top-4 right-3 px-2 py-0.5 bg-black opacity-50 text-white text-sm rounded">
                    <div className="flex items-center">
                      <i className="mr-2">
                        <FaCamera />
                      </i>
                      <span className="">
                        {singleAds?.postAdImages?.length ?? 1}
                      </span>
                    </div>
                  </div>
                  <img
                    src={
                      singleAds?.postAdImages?.length
                        ? `${imageurl}${singleAds?.postAdImages?.[ImageInView]?.url}`
                        : null
                    }
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                  <div className="absolute bottom-4 right-3 px-2 py-0.5 bg-black opacity-50 text-white text-sm rounded">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => setFullImage(true)}
                    >
                      <i className="mr-2">
                        <FaBorderAll />
                      </i>
                      <span className="">View Full Size</span>
                    </div>
                  </div>
                </div>
                <ImageModal
                  image={
                    singleAds?.postAdImages?.length
                      ? `${imageurl}${singleAds?.postAdImages?.[ImageInView]?.url}`
                      : null
                  }
                  open={fullImage}
                  close={handleClose}
                />
                {singleAds?.postAdImages?.length ? (
                  <div
                    ref={thumbnailsContainer}
                    className="flex items-center  "
                  >
                    <i
                      className=" p-1 border border-dark rounded-full bg-text-grey text-lg"
                      onClick={() =>
                        sideScroll(thumbnailsContainer.current, 25, 100, -10)
                      }
                    >
                      <BsArrowLeftShort />
                    </i>
                    <div
                      className="flex overflow-auto scroll-m-4 mx-4"
                      style={{ webkitScrollBar: "none" }}
                    >
                      {singleAds?.postAdImages?.map((item, i) => {
                        return (
                          <img
                            key={i}
                            src={`${imageurl}${item?.url}`}
                            alt=""
                            className="h-15 w-15 rounded-md mx-1"
                            onClick={() => setImage(i)}
                          />
                        );
                      })}
                    </div>
                    <i
                      className=" p-1 border border-dark rounded-full bg-text-grey text-lg"
                      onClick={() =>
                        sideScroll(thumbnailsContainer.current, 25, 100, -10)
                      }
                    >
                      <BsArrowRightShort />
                    </i>
                  </div>
                ) : null}
              </div>
              <div className=" px-2 text-xs">
                <p className="">{singleAds?.title}</p>
                <p className="my-3 pb-2 text-base font-semibold border-b border-b-borderGrey">
                  ${singleAds?.amount}
                </p>
                <p className="uppercase ">Description</p>
                <p className="border-b border-b-borderGrey py-2">
                  {singleAds?.description}
                </p>
                {singleAds?.bully && (
                  <>
                    <div className="border-b border-b-borderGrey">
                      <div className="flex items-center justify-between text-xs py-2">
                        <span className="uppercase">BULLY AGE</span>
                        <i>
                          <BsPlus />
                        </i>
                      </div>
                    </div>
                    <div className="border-b border-b-borderGrey">
                      <div className="flex items-center justify-between text-xs py-2">
                        <span className="uppercase">DETAILS & CARE</span>
                        {/* <i>
                          <BsPlus />
                        </i> */}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div>
                        <button className="w-full rounded-md py-2 border border-blue text-blue whitespace-nowrap">
                          View Bully Certificate
                        </button>
                      </div>
                      <div>
                        <button className="w-full rounded-md py-2 border border-blue text-blue">
                          View Pedigree Chart
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {/* <div className="border-b border-b-borderGrey">
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="uppercase">DELIVERY & RETURNS</span>
                    <i>
                      <BsPlus />
                    </i>
                  </div>
                </div> */}
                <div className="py-3 border-b border-b-borderGrey">
                  {userID && userID !== singleAds?.userId ? (
                    <>
                      <button
                        className="w-full rounded-md py-2 bg-blue text-white capitalize"
                        onClick={addItemToCart}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="w-full rounded-md py-2 bg-white text-blue capitalize"
                        onClick={goToCart}
                      >
                        Proceed to Checkout
                      </button>
                    </>
                  ) : (
                    <>
                      {singleAds?.featured === false ? (
                        <button
                          className="w-full rounded-md py-2 bg-blue text-white capitalize"
                          onClick={makeFeatured}
                        >
                          Make Featured
                        </button>
                      ) : null}
                    </>
                  )}
                </div>
                {singleAds?.bully && (
                  <div className=" border-b border-b-borderGrey grid grid-cols-3 text-xs text-blue text-center cursor-pointer">
                    <div className="border-r border-borderGrey py-3">
                      <p>BULLY CODE</p>
                      <h5 className=" font-semibold">
                        {singleAds?.bully?.bullyRegId}
                      </h5>
                    </div>
                    <div className="py-3">
                      <p>Status</p>
                      <h5 className=" font-semibold">
                        {singleAds?.featured ? "Featured Ad" : "Regular Ad"}
                      </h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {userID && userID !== singleAds?.userId ? (
            <div className="col-span-12 md:col-span-6    xl:col-span-3 ">
              <SellerInfo
                image={SellerAvatar1}
                name="Max Bill"
                rating={4.5}
                status="online"
                blackBtnIcon={<BsChatText />}
                blackBtnText="Message Seller"
                whiteBtnText="View Merchant Profile"
                openChat={openChat}
              />
            </div>
          ) : null}
        </div>
        <div className=" my-6">
          <SimilarProducts />
        </div>
        <div>
          <RecentlyViewed />
        </div>
      </div>
      {showChat && (
        <>
          <Backdrop
            // sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            {isLoading ? <Loader /> : null}
            <div className="absolute top-4 bg-white p-4 w-[50%] max-h-[90vh] rounded-lg">
              <div className="flex items-center justify-end">
                <i className="text-xl text-end p-4" onClick={handleChatClose}>
                  <MdClose />
                </i>
              </div>
              <ChatComponent
                singleChat={singleChat}
                activeUser={activeUser}
                showMessage={true}
              />
            </div>
          </Backdrop>
        </>
      )}
    </>
  );
};

export default ViewAdDetails;
