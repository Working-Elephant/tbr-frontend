import React, { useRef,useState } from "react";
import SellerInfo from "../../components/ads/SellerInfo";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SimilarProducts from "../../components/ads/SimilarProducts";
import RecentlyViewed from "../../components/ads/RecentlyViewed";
import Doggo2 from "../../assets/images/doggo2.jpeg";
import Doggo3 from "../../assets/images/doggo3.jpeg";
import Doggo1 from "../../assets/images/doggo1.jpeg";
import SellerAvatar1 from "../../assets/images/avatar1.jpeg";
import { carouselImages } from "../../mockData/mockData";
import {
  BsChatText,
  BsPlus,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { FaCamera, FaBorderAll } from "react-icons/fa";

const ViewAdDetails = () => {
  const thumbnailsContainer = useRef(null);
  const [ImageInView, setImageInView] = useState(1)
//   const scroll = (scrollOffset) => {
//     thumbnailsContainer.current.scrollLeft += scrollOffset;
//   };
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
//   const carouselImages = [
//     { id: 1, img: Doggo2 },
//     { id: 2, img: Doggo3 },
//     { id: 3, img: Doggo1 },
//     { id: 4, img: Doggo2 },
//     { id: 5, img: Doggo3 },
//     { id: 6, img: Doggo2 },
//     { id: 7, img: Doggo1 },
//     { id: 8, img: Doggo3 },
//   ];

  const setImage=(i)=>{
    setImageInView(i)
  }
  return (
    <div className="p-5  lg:py-10 lg:px-12">
      <div>
        <BreadCrumb />
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
                      <span className="">{carouselImages.length}</span>
                    </div>
                  </div>
                  <img
                    src={carouselImages[ImageInView].img}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                  <div className="absolute bottom-4 right-3 px-2 py-0.5 bg-black opacity-50 text-white text-sm rounded">
                    <div className="flex items-center">
                      <i className="mr-2">
                        <FaBorderAll />
                      </i>
                      <span className="">View Full Size</span>
                    </div>
                  </div>
                </div>
                <div ref={thumbnailsContainer} className="flex items-center  ">
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
                  {carouselImages.map((item, i) => {
                    return (
                      <img
                        key={i}
                        src={item.img}
                        alt=""
                        className="h-15 w-15 rounded-md mx-1"
                        onClick={()=> setImage(i)}
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
            </div>
            <div className=" px-2 text-xs">
              <p className="">Cane Corso</p>
              <p className="my-3 pb-2 text-base font-semibold border-b border-b-borderGrey">
                &#163;2,750
              </p>
              <p className="uppercase ">Description</p>
              <p className="border-b border-b-borderGrey py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
                <button className="w-full rounded-md py-2 bg-blue text-white capitalize">
                  Make payment
                </button>
              </div>
              <div className=" border-b border-b-borderGrey grid grid-cols-3 text-xs text-blue text-center">
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
        <SimilarProducts/>
      </div>
      <div>
        <RecentlyViewed/>
      </div>
    </div>
  );
};

export default ViewAdDetails;
