import React from "react";
import Header from "../components/shared/Header";
import BullyNewsCard from "../components/home/BullyNewsCard";
import IndicatorIcon from "../components/home/IndicatorIcon";
import ImageContainer from "../components/shared/ImageContainer";
import TestimonialCard from "../components/home/TestimonialCard";
import { HiUser } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import User from "../assets/images/user.svg";
import AdImage from "../assets/images/dog_banner.jpeg";
// import Doggo1 from "../assets/images/trophy.jpeg";
// import Doggo2 from "../assets/images/peopleTalking.jpeg";
// import Doggo3 from "../assets/images/doggo3.jpeg";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedAdsCard from "../components/home/FeaturedAdsCard";
import {
  featuredAdsData,
  categoriesData,
  bullyNewsData,
  testimonialData,
} from "../mockData/mockData";
import { Link } from "react-router-dom";

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
  return (
    <div className="bg-white">
      <Header />
      {/* Popular categories */}
      <section className="p-5 ">
        <div className="md:w-10/12   mx-auto">
          <div className="mb-3">
            <h3 className="text-2xl">Popular Categories</h3>
            <p className="text-grey">Our Most Popular Categories</p>
          </div>
          <div className="relative ">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots
              customDot={<IndicatorIcon data={categoriesData} />}
              arrows={false}
              responsive={responsive}
              partialVisible={true}
              infinite={true}
              // focusOnSelect={true}
              // autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="pb-10 "
              sliderClass=""
              dotListClass=""
              itemClass="carousel-item-padding-40-px"
              renderDotsOutside={true}
            >
              {categoriesData.map((item, i) => (
                <div key={item.id} className="mx-4 rounded-[60px] relative">
                  <Link to={`${item.link}`}>
                    <ImageContainer image={item.img} rounded="rounded-[3rem]" />
                    <p className="absolute bottom-4 left-8 uppercase text-white text-xl">
                      {item.name}
                    </p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Featured Sellers section */}
      <section className="p-5 ">
        <div className=" md:w-10/12 lg:w-8/12  mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-2xl">Featured Sellers</h3>
              <p className="text-grey">Shop our featured Sellers</p>
            </div>
            <Link to="/categories" className="text-blue flex items-center">
              <span className="">View More</span>
              <i className="ml-1 text-xl">
                <IoIosArrowForward />
              </i>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3   ">
            {featuredAdsData.slice(0, 9).map((item, i) => {
              return <FeaturedAdsCard key={i} item={item} />;
            })}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="py-3 px-5  bg-black text-white text-sm rounded-md">
            Load More Featured Ads
          </button>
        </div>
      </section>
      {/* how it works section */}
      <section className="my-10">
        <div className="w-5/6  mx-auto text-center">
          <h6 className=" text-lg md:text-xl my-1">How it Works</h6>
          <p className=" py-0 text-grey">
            Register. Search. Communicate. Buy. Sale. Repeat
          </p>
          <div className="flex flex-wrap lg:flex-nowrap my-4 text-start ">
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2 grow">
              <div className="flex flex-col  p-4  ">
                <div className=" bg-black bg-opacity-20 rounded p-4 w-1/5 md:4/6">
                  <img src={User} alt="" />
                </div>
                <div className="">
                  <p className=" my-3 text-dark opacity-100">Register</p>
                  <p className="text-sm text-grey">
                    Register and create your bully's profile then receive a
                    certificate to show buyers
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2 grow">
              <div className="flex flex-col  p-4  ">
                <div className=" bg-black bg-opacity-20 rounded p-4 w-1/5">
                  <img src={User} alt="" />
                </div>
                <div className="">
                  <p className="my-3 ">Search Bullies</p>
                  <p className="text-sm text-grey ">
                    Search our classified for local bullies. View sellers
                    pedigree certificate
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow bg-opacity-20 mb-4 lg:mb-0 rounded-lg mx-2 grow">
              <div className="flex flex-col  p-4 ">
                <div className=" bg-black bg-opacity-10 rounded p-4 w-1/5">
                  <img src={User} alt="" />
                </div>
                <div className="">
                  <p className=" my-3">Make Payment</p>
                  <p className="text-sm text-grey">
                    Once you find your perfect bully check out in our secured
                    payment center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ad section */}
      <section
        className=" p-6 md:p-12 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${AdImage}')` }}
      >
        <div className="md:w-5/6 lg:w-4/6 xl:w-3/6 bg-black bg-opacity-50 p-10 rounded-lg mx-auto text-white text-center">
          <div className=" md:w-4/6 mx-auto">
            <h2 className="font-bold text-4xl ">Bully For Sale?</h2>
            <p className="my-4">
              Get your bullies seen by many local buyers and increase your
              selling potential by advertising with us today
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
          <div className="grid grid-col-1 lg:grid-cols-2 gap-3">
            <div className="col-span-1">
              <h2 className="text-xl  md:text-2xl lg:text-3xl">
                A preview of Our Dog Shows
              </h2>
              <p className="text-textMuted my-4 text-sm md:text-lg">
                Interested in watching our dogs shows? Go right ahead to our
                Bully News. You can watch our pervious dog shows or live stream
                our events as they happen. With membership access you remain in
                the loop with our company's updates and changes.
              </p>
              {/* <div className="">
             
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  arrows={false}
                  responsive={responsive}
                  partialVisible={true}
                  infinite={false}
                  // focusOnSelect={true}
                  autoPlay={false}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="bg-grey py-2 max-h-24"
                  sliderClass=""
                  dotListClass=""
                  itemClass=""
                >
                  {categoriesData.map((item, i) => (
                    <div className="mx-1 ">
                      <ImageContainer
                        key={item.id}
                        image={item.img}
                        fullHeight={false}
                      />
                    </div>
                  ))}
                </Carousel>
               
              </div> */}

              <div className="my-5">
                <button className="bg-yellow py-3 w-1/2 text-dark ">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </section>
      {/* bully new section */}
      <section className="py-10 px-5">
        <div className=" md:w-5/6  mx-auto text-center">
          <div className="mb-8">
            <h6 className=" text-lg md:text-xl my-1">Bully News</h6>
            <p className=" py-0 text-grey">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              customDot={<IndicatorIcon data={categoriesData} />}
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
                <div className="pr-5">
                  <BullyNewsCard key={i} item={item} />
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
                <div className=" pl-4 md:pl-6 lg:pl-12">
                  <TestimonialCard key={i} item={item} />
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
                <div className="pr-6">
                  <TestimonialCard key={i} item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Newsletter section */}
      <section className="py-4 px-4 lg:py-12 ">
        <div className=" md:w-5/6 lg:4/6 mx-auto text-center">
          <h4 className="font-bold text-2xl md:text-3xl my-4">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-justify w-5/6 mx-auto md:w-4/6">
            Sign up to receive Texas registry emails and get first dibs on new
            arrivals, sales, exclusive content, events and more!
          </p>
          <div className="bg-white border-.5 border-borderGrey flex items-center justify-between py-3 px-5 rounded-xl w-5/6 mx-auto my-4 md:w-4/6 ">
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
