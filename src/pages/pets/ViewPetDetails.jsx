import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageModal, Loader } from "../../components/shared";
import SellerInfo from "../../components/ads/SellerInfo";
import SimilarProducts from "../../components/ads/SimilarProducts";
import RecentlyViewed from "../../components/ads/RecentlyViewed";
import SellerAvatar1 from "../../assets/images/avatar1.jpeg";
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
import { addBullyToCart } from "../../store/features/productSlice";
import AuthService from "../../services/user";
import ChatComponent from "../../components/dashboard/ChatComponent";
import useFetchChat from "../../hooks/useFetchChats";
import { success } from "../../components/shared";
import useFetchBullies from "../../hooks/useFectchBullies";

const ViewPetDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getSingleBully, bully, postBully, isLoading } = useFetchBullies();
  const user = useSelector((state) => state?.auth?.user);
  const userID = user?.userId;
  const thumbnailsContainer = useRef(null);
  const csId = useRef(null);
  const [ImageInView, setImageInView] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!bully.length) {
      getSingleBully(id);
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
    chatId: bully?.userId,
  };

  const imageurl = import.meta.env.VITE_IMAGE_URL;

  const goToCart = () => {
    if (!bully) return;

    dispatch(addBullyToCart(bully));
    navigate(`/pet/billing/${id}`);
  };

  const postAd = async () => {
    if (!bully) return;
    const obj = {
      Price: bully?.price,
      BullyId: bully?.id,
    };
    const status = await postBully(obj);
  };
  // address
  // :
  // "Lumis student living  Tyndall Street  North building room 709"
  // breed
  // :
  // "wolf"
  // breedTypeId
  // :
  // 3
  // bullyImages
  // :
  // [{id: 3, bullyId: 2,…},…]
  // 0
  // :
  // {id: 3, bullyId: 2,…}
  // 1
  // :
  // {id: 7, bullyId: 2, url: "276a17bc-7a4e-4dbf-95b3-2b7fe34ee166_pizza-Large.png"}
  // bullyId
  // :
  // 2
  // id
  // :
  // 7
  // url
  // :
  // "276a17bc-7a4e-4dbf-95b3-2b7fe34ee166_pizza-Large.png"
  // 2
  // :
  // {id: 8, bullyId: 2, url: "b65d28cd-8d94-4891-817c-b73aa9dccedb_logo_white_background-(1).jpg"}
  // bullyPedigrees
  // :
  // []
  // bullyRegId
  // :
  // "AKI-D-00000000"
  // bullyType
  // :
  // {id: 3, breedTypeName: "Akita Inu"}
  // breedTypeName
  // :
  // "Akita Inu"
  // id
  // :
  // 3
  // city
  // :
  // "Cardiff"
  // color
  // :
  // "#000"
  // createdAt
  // :
  // "12/30/2022 22:55:23"
  // description
  // :
  // "wolfie"
  // dob
  // :
  // "Sun Nov 27 2022 00:00:00 GMT+0100 (West Africa Standard Time)"
  // dogOwnerName
  // :
  // "lkmlkmlkm"
  // dogRegisterName
  // :
  // "lm;"
  // id
  // :
  // 2
  // price
  // :
  // "10000"
  // sex
  // :
  // "Female"
  // state
  // :
  // "Akwa Ibom"
  // status
  // :
  // "PENDING"
  // telephone
  // :
  // "(074)383-4959"
  // userId
  // :
  // 2
  // zip
  // :
  // "CF10 4BZ"
  const callCustomerService = () => {
    let id = document.getElementById("hubspot-messages-iframe-container");
    csId.current = id;
    console.log(csId.current);
    csId.current.focus();
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
                        {bully?.bullyImages?.length ?? 1}
                      </span>
                    </div>
                  </div>
                  <img
                    src={
                      bully?.bullyImages?.length
                        ? `${imageurl}${bully?.bullyImages?.[ImageInView]?.url}`
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
                    bully?.bullyImages?.length
                      ? `${imageurl}${bully?.bullyImages?.[ImageInView]?.url}`
                      : null
                  }
                  open={fullImage}
                  close={handleClose}
                />
                {bully?.bullyImages?.length ? (
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
                      {bully?.bullyImages?.map((item, i) => {
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
                <p className="">{bully?.bully}</p>
                <p className="my-3 pb-2 text-base font-semibold border-b border-b-borderGrey">
                  ${bully?.price}
                </p>
                <p className="uppercase ">Description</p>
                <p className="border-b border-b-borderGrey py-2">
                  {bully?.description}
                </p>

                <div className="border-b border-b-borderGrey">
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="uppercase">BULLY AGE</span>
                    {/* <i>
                          <BsPlus />
                        </i> */}
                    {bully?.dob}
                  </div>
                </div>
                <div className="border-b border-b-borderGrey">
                  {/* <div className="flex items-center justify-between text-xs py-2">
                    <span className="uppercase">DETAILS & CARE</span>
                     <i>
                          <BsPlus />
                        </i> 
                  </div> */}
                </div>
                <div className="grid grid-cols-2 gap-4 py-3">
                  {/* <div>
                        <button className="w-full rounded-md py-2 border border-blue text-blue whitespace-nowrap">
                          View Bully Certificate
                        </button>
                      </div> */}
                  {/* <div>
                        <button className="w-full rounded-md py-2 border border-blue text-blue">
                          View Pedigree Chart
                        </button>
                      </div> */}
                </div>

                {/* <div className="border-b border-b-borderGrey">
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="uppercase">DELIVERY & RETURNS</span>
                    <i>
                      <BsPlus />
                    </i>
                  </div>
                </div> */}

                <div className="py-3 border-b border-b-borderGrey">
                  {/* <button
                    className="w-full rounded-md py-2 bg-blue text-white capitalize"
                    onClick={addItemToCart}
                  >
                    Add to Cart
                  </button> */}
                  {bully?.status === "REGISTERED" ? (
                    <button
                      className="w-full rounded-md py-2 bg-blue text-white capitalize"
                      onClick={postAd}
                    >
                      {isLoading ? <Loader size={20} /> : "Post Ad"}
                    </button>
                  ) : (
                    <button
                      className="w-full rounded-md py-2 bg-blue text-white capitalize"
                      onClick={goToCart}
                    >
                      Register Pet
                    </button>
                  )}
                </div>

                <div className=" border-b border-b-borderGrey grid grid-cols-3 text-xs text-blue text-center cursor-pointer">
                  <div className="border-r border-borderGrey py-3">
                    <p>PET CODE</p>
                    <h5 className=" font-semibold">{bully?.bullyRegId}</h5>
                  </div>
                  <div className="py-3">
                    <p>Status</p>
                    <h5 className=" font-semibold">{bully?.status}</h5>
                  </div>
                  <div className="py-3" onClick={callCustomerService}>
                    <p>Contact Us</p>
                    <h5 className=" font-semibold">Customer Service</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {userID && userID !== bully?.userId ? (
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
      </div>
    </>
  );
};

export default ViewPetDetails;
