import React, { useEffect, useState } from "react";
import Header from "../components/shared/Header";
import BullyNewsCard from "../components/home/BullyNewsCard";
import IndicatorIcon from "../components/home/IndicatorIcon";
import ImageContainer from "../components/shared/ImageContainer";
import TestimonialCard from "../components/home/TestimonialCard";
import { HiUser } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import AdImage from "../assets/images/home_ad.jpg";
import HIW1 from "../assets/images/howitworks1.svg";
import HIW2 from "../assets/images/howitworks2.svg";
import HIW3 from "../assets/images/howitworks3.svg";
import Sponsor1 from "../assets/images/sponsor1.png";
import Sponsor2 from "../assets/images/sponsor2.png";
import Sponsor3 from "../assets/images/sponsor3.png";
import Sponsor11 from "../assets/images/sponsor11.jpeg";
import Sponsor12 from "../assets/images/sponsor12.jpeg";
import Sponsor13 from "../assets/images/sponsor13.jpeg";
import Sponsor4 from "../assets/images/sponsor4.png";
import dreams from "../assets/images/dreams.jpg";
import tides from "../assets/images/tide.png";
import Coin from "../assets/images/coin.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import {
  featuredAdsData,
  bullyNewsData,
  testimonialData,
  previewData,
  videoData,
} from "../data/api";
import { Link } from "react-router-dom";
import { NoEncryption } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import useFetchAds from "../hooks/useFetchAds";
import { Loader } from "../components/shared";
import ScreenLoader from "../components/shared/ScreenLoader";
import VideoImageThumbnail from "react-video-thumbnail-image";
import VideoPlayer from "simple-react-video-thumbnail";
import VideoThumbnail from "react-video-thumbnail";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1023, min: 700 },
      items: 2,
      partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
    },
  };
  const newsResponsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1439 },
      items: 1,
      partialVisibilityGutter: 500,
    },
    desktop: {
      breakpoint: { max: 1439, min: 1023 },
      items: 1,
      partialVisibilityGutter: 300, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1023, min: 700 },
      items: 1,
      partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };
  const testimonialResponsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1439 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 1439, min: 1023 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1023, min: 700 },
      items: 1,
      partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };
  const { getCategories, categories, isLoading } = useFetchAds();

  useEffect(() => {
    getCategories();
  }, []);
  const [preview, setPreview] = useState(0);
  const [video, setVideo] = useState(previewData[0]);
  return (
    <div className="bg-white m-0">
      <Header />
      {/* sponsors */}

      <div className="w-full bg-[#fff]  text-center px-5 mt-6">
        <span className="text-textMuted text-lg">Sponsors</span>
        <div className="grid grid-cols-3 md:grid-cols-9 mx-auto lg:w-4/6 items-center gap-[2.75rem]">
          <div className="col-span-1">
            <img src={Sponsor2} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={Sponsor1} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={Sponsor3} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={Sponsor11} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={Sponsor12} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={Sponsor13} alt="sponsor" className="" />
          </div>

          <div className="col-span-1">
            <img src={Coin} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={tides} alt="sponsor" className="" />
          </div>
          <div className="col-span-1">
            <img src={dreams} alt="sponsor" className="" />
          </div>
        </div>
      </div>
      {/* Popular categories */}
      <section className="p-5 ">
        <div className="md:w-10/12   mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg md:text-2xl">Popular Categories</h3>
              <p className="text-xs md:text-base text-grey">
                Our Most Popular Categories
              </p>
            </div>
            <Link
              to="/categories"
              className="text-blue flex items-center justify-center text-xs md:text-base"
            >
              <span className="">View All Categories</span>
              <i className=" text-xl">
                <IoIosArrowForward />
              </i>
            </Link>
          </div>
          {categories && (
            <div className="relative ">
              {isLoading && <Loader />}
              <Carousel
                swipeable={true}
                draggable={true}
                showDots
                customDot={<IndicatorIcon data={categories.length} />}
                arrows={false}
                responsive={responsive}
                partialVisible={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="pb-10 "
                sliderClass=""
                dotListClass=""
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside={true}
              >
                {categories.map((item, i) => (
                  <div key={i} className="mx-4 rounded-[60px] relative ">
                    <Link to={`/categories/${item.categoryName}`}>
                      <ImageContainer
                        image={`../assets/images/${item.categoryName}.jpg`}
                        rounded="rounded-[3rem]"
                      />
                      <p className="absolute bottom-4 left-8 uppercase text-white  text-xl">
                        {item.categoryName}
                      </p>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </section>
      {/* Featured Sellers section */}
      <section className="p-5 ">
        <div className=" md:w-10/12 lg:w-8/12  mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl md:text-2xl">Featured Sellers</h3>
              <p className="text-sm md:text-base text-grey">
                Shop our featured Sellers
              </p>
            </div>
            <Link
              to="/featured"
              className="text-blue flex items-center text-sm md:text-base"
            >
              <span className="">View More</span>
              <i className="ml-1 text-xl">
                <IoIosArrowForward />
              </i>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3   ">
            {isLoading && <Loader />}
            <FeaturedAdsCard />;
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="py-3 px-5  bg-black text-white text-sm rounded-md">
            Load More Featured Sellers
          </button>
        </div>
      </section>
      {/* how it works section */}
      <section className="my-10">
        <div className=" w-11/12 lg:w-9/12  mx-auto text-center">
          <h6 className=" text-xl my-1">How it Works</h6>
          <p className=" py-0 text-grey  text-xs md:text-base">
            Register. Search. Chat. Buy. Sale. Repeat
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start my-5">
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2">
              <div className="flex flex-col  p-4  ">
                <div className=" w-16 lg:w-24">
                  <img src={HIW1} alt="" />
                </div>
                <div className="">
                  <p className=" my-3 text-dark opacity-100">Register</p>
                  <p className="text-sm text-grey">
                    Register your bullies automatically at your convenience
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2">
              <div className="flex flex-col  p-4  ">
                <div className=" w-16 lg:w-24">
                  <img src={HIW2} alt="" />
                </div>
                <div className="">
                  <p className="my-3 ">Chat </p>
                  <p className="text-sm text-grey ">
                    Search bullies and instantly chat with seller
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2">
              <div className="flex flex-col  p-4 ">
                <div className=" w-16 lg:w-24">
                  <img src={HIW3} alt="" />
                </div>
                <div className="">
                  <p className=" my-3">Make Payment</p>
                  <p className="text-sm text-grey">
                    Pay securely with PayPal checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ad section */}
      <section
        className=" p-6 md:p-12 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url('${AdImage}')` }}
      >
        <div className="md:w-5/6 lg:w-4/6 xl:w-3/6 bg-black bg-opacity-50 p-10 rounded-lg mx-auto lg:my-10 text-white text-center">
          <div className=" md:w-4/6 mx-auto">
            <h2 className="font-bold text-4xl ">Bully For Sale?</h2>
            <p className="my-4">
              Increase your selling potential by advertising to our community
            </p>
            <div>
              <Link to="/ad/post-ad">
                <button className=" bg-yellow py-4 px-12 rounded text-sm text-dark font-semibold ">
                  Submit Ad
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* dog show preview section */}
      <section className="p-5">
        <div className="w-full md:w-5/6  mx-auto">
          <div className="grid grid-col-1 lg:grid-cols-12 gap-3">
            <div className="col-span-1 lg:col-span-7 overflow-auto">
              <h2 className="text-xl  md:text-2xl lg:text-3xl">
                A preview of Our Dog Shows
              </h2>
              <p className="text-textMuted my-4 text-sm md:text-lg">
                Interested in watching our dogs shows? Go right ahead to our
                Bully News. You can watch our pervious dog shows or live stream
                our events as they happen. With membership access you remain in
                the loop with our company's updates and changes.
              </p>
              <div className="bg-[#3D3D3D] p-2 overflow-auto scroll-smooth snap-x snap-mandatory touch-pan-x no-scrollbar flex gap-1 items-center lg:w-4/5 ">
                {previewData.map((item, i) => (
                  <div
                    key={i}
                    className={` min-w-[150px] h-28 ${
                      preview === i ? "border-3 border-white" : ""
                    }`}
                    onClick={() => {
                      setPreview(i);
                      setVideo(item);
                    }}
                  >
                    <VideoThumbnail
                      videoUrl={item.link}
                      thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                      width={120}
                      height={80}
                      cors
                    />
                    {/* <VideoPlayer videoUrl={item.link} snapshotAt={10} /> */}

                    {/* <VideoImageThumbnail
                      videoUrl={
                        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0"
                      }
                      thumbnailHandler={(thumbnail) =>
                        console.log("thumb", thumbnail)
                      }
                      width={120}
                      height={80}
                      alt="bully shows"
                      cors
                      snapshotAtTime={5}
                    /> */}
                    {/* <ImageContainer
                      key={i}
                      image={item.image}
                      fullHeight={false}
                      width="min-w-[144px]"
                    /> */}
                  </div>
                ))}
              </div>

              <div className="my-5">
                <button className="bg-yellow py-3 w-1/2 text-dark font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" col-span-1 lg:col-span-5">
              {/* <iframe
                className="w-full aspect-video lg:aspect-square"
                title="A preview of our dog shows"
                src="https://www.youtube.com/watch?v=g3fAq0svJ9g"
              ></iframe> */}
              <iframe
                className="w-full aspect-video lg:aspect-square"
                title="A preview of our dog shows"
                // src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                src={video?.link}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* bully new section */}
      <section className="py-10 px-5">
        <div className=" md:w-5/6  mx-auto text-center">
          <div className="mb-8">
            <h6 className=" text-lg md:text-xl my-1">Bully News</h6>
            <p className=" py-0 text-grey">Stay up to date with us</p>
          </div>
          <div>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              //  customDot={<IndicatorIcon />}
              arrows={false}
              responsive={newsResponsive}
              partialVisbile={true}
              infinite={true}
              focusOnSelect={true}
              // autoPlaySpeed={1000}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="pb-10"
              dotListClass="react-multi-carousel-dot-list"
              itemClass="carousel-item-padding-40-px"
              // renderDotsOutside={true}
            >
              {bullyNewsData.map((item, i) => (
                <div key={i} className="pr-5">
                  <BullyNewsCard item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* testimonial section */}
      <section className="py-6 lg:py-12 px-5">
        <div>
          <div className="mb-10 pl-12">
            <Carousel
              swipeable={true}
              draggable={true}
              arrows={false}
              responsive={testimonialResponsive}
              partialVisbile={true}
              infinite={false}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="mb-5"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonialData.slice(0, 4).map((item, i) => (
                <div key={i} className=" pl-4 md:pl-6 lg:pl-12">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="">
            <Carousel
              swipeable={true}
              draggable={true}
              arrows={false}
              responsive={testimonialResponsive}
              partialVisbile={true}
              infinite={false}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="mb-5"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonialData.slice(4, 8).map((item, i) => (
                <div key={i} className="pr-6 lg:pl-10">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Newsletter section */}
      <section className="py-4 px-4 lg:py-12 ">
        <div className=" md:w-5/6 lg:4/6 xl:3/6 mx-auto text-center">
          <h4 className="font-bold text-2xl md:text-3xl my-4">
            Subscribe to Our Newsletter
          </h4>
          <p className=" w-5/6 mx-auto md:w-4/6 lg:w-5/12 text-base">
            Sign up to receive Texas Registry emails, first dibs on new
            arrivals, sales, exclusive content, events and more!
          </p>
          <div className="bg-white border-.5 border-borderGrey flex items-center justify-between py-3 px-5 rounded-xl w-5/6 mx-auto my-4 md:w-4/6 lg:w-5/12">
            <input
              className="bg-white  w-5/6 focus:outline-none"
              placeholder="Enter your email"
            />
            <i className="text-grey">
              <HiUser />
            </i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
