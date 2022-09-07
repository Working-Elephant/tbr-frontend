import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageModal } from "../../components/shared";
import SellerInfo from "../../components/ads/SellerInfo";
import SimilarProducts from "../../components/ads/SimilarProducts";
import RecentlyViewed from "../../components/ads/RecentlyViewed";
import SellerAvatar1 from "../../assets/images/avatar1.jpeg";
// import { carouselImages } from "../../mockData/mockData";
import {
  BsChatText,
  BsPlus,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { FaCamera, FaBorderAll, FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/features/productSlice";

const ViewAdDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const selectedProduct = products.find((product) => product.id === Number(id));
  const thumbnailsContainer = useRef(null);
  const [ImageInView, setImageInView] = useState(1);
  const navigate = useNavigate();

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

  const goToCart = () => {
    // navigate("/cart", { state: { product: selectedProduct, quantity: 1 } });
    dispatch(addToCart(selectedProduct));
    navigate("/cart");
  };

  return (
    selectedProduct && (
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
          <div className=" col-span-12  md:col-span-7 lg:col-span-8 xl:col-span-9  px-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className=" flex flex-col px-2">
                <div className="w-full mb-4 relative">
                  <div className="absolute top-4 right-3 px-2 py-0.5 bg-black opacity-50 text-white text-sm rounded">
                    <div className="flex items-center">
                      <i className="mr-2">
                        <FaCamera />
                      </i>
                      <span className="">
                        {selectedProduct?.images?.length ?? 1}
                      </span>
                    </div>
                  </div>
                  <img
                    src={
                      selectedProduct?.images
                        ? selectedProduct.images[ImageInView]
                        : selectedProduct.image
                        ? selectedProduct.image
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
                    selectedProduct?.images
                      ? selectedProduct.images[ImageInView]
                      : selectedProduct.image
                      ? selectedProduct.image
                      : null
                  }
                  open={fullImage}
                  close={handleClose}
                />
                {selectedProduct?.images ? (
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
                      {selectedProduct?.images?.map((item, i) => {
                        return (
                          <img
                            key={i}
                            src={item.img}
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
                <p className="">{selectedProduct?.name}</p>
                <p className="my-3 pb-2 text-base font-semibold border-b border-b-borderGrey">
                  &#163;{selectedProduct?.price}
                </p>
                <p className="uppercase ">Description</p>
                <p className="border-b border-b-borderGrey py-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
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
                    <i>
                      <BsPlus />
                    </i>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-3">
                  <div>
                    <button className="w-full rounded-md py-2 border border-blue text-blue">
                      View Bully Certificate
                    </button>
                  </div>
                  <div>
                    <button className="w-full rounded-md py-2 border border-blue text-blue">
                      View Pedigree Chart
                    </button>
                  </div>
                </div>
                <div className="border-b border-b-borderGrey">
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="uppercase">DELIVERY & RETURNS</span>
                    <i>
                      <BsPlus />
                    </i>
                  </div>
                </div>
                <div className="py-3 border-b border-b-borderGrey">
                  <button
                    className="w-full rounded-md py-2 bg-blue text-white capitalize"
                    onClick={goToCart}
                  >
                    Make payment
                  </button>
                </div>
                <div className=" border-b border-b-borderGrey grid grid-cols-3 text-xs text-blue text-center cursor-pointer">
                  <div className="border-r border-borderGrey py-3">
                    <p>BULLY CODE</p>
                    <h5 className=" font-semibold">668235</h5>
                  </div>
                  <div className="py-3">
                    <p>VIEW MORE</p>
                    <h5 className=" font-semibold">Bullies</h5>
                  </div>
                  <div className="border-l border-borderGrey py-3">
                    <p>CONTACT US</p>
                    <h5 className=" font-semibold">Customer Care</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12  md:col-span-5 lg:col-span-4 xl:col-span-3 ">
            <SellerInfo
              image={SellerAvatar1}
              name="Max Bill"
              rating={4.5}
              status="online"
              blackBtnIcon={<BsChatText />}
              blackBtnText="Message Seller"
              whiteBtnText="View Merchant Profile"
            />
          </div>
        </div>
        <div className=" my-6">
          <SimilarProducts />
        </div>
        <div>
          <RecentlyViewed />
        </div>
      </div>
    )
  );
};

export default ViewAdDetails;
