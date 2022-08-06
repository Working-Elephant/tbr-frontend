import React from "react";
import Header from "../components/shared/Header";
import BullyNewsCard from "../components/home/BullyNewsCard";
import IndicatorIcon from "../components/home/IndicatorIcon";
import { HiUser } from "react-icons/hi";
import User from "../assets/images/user.svg";
import AdImage from "../assets/images/header1.jpeg";
import Doggo1 from "../assets/images/trophy.jpeg";
import Doggo2 from "../assets/images/peopleTalking.jpeg";
import Doggo3 from "../assets/images/doggo3.jpeg";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const carouselImages = [
    {
      title: "Our Latest Shows",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: Doggo1,
      link: "",
    },
    {
      title: "Bully News",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: Doggo2,
      link: "",
    },
    {
      title: "More Bully News",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: Doggo3,
      link: "",
    },
  ];
  return (
    <div className="bg-white">
      <Header />
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
              <button className=" bg-yellow py-4 px-12 rounded text-sm text-dark font-semibold ">
                Submit Ad
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* dog show preview section */}
      <section></section>
      {/* bully new section */}
      <section className="py-10">
        <div className="w-5/6  mx-auto text-center">
          <div className="mb-8">
            <h6 className=" text-lg md:text-xl my-1">Bully News</h6>
            <p className=" py-0 text-grey">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div>
            <Carousel
              IndicatorIcon={<IndicatorIcon />}
              indicatorContainerProps=" bg-yellow flex justify-end"
              activeIndicatorProps="opacity-20 bg-black text-dark "
              interval={6000}
            >
             
              {carouselImages.map((item, i) => (
                <BullyNewsCard
                  key={i}
                  item={item}
                  title={item.title}
                  image={item.image}
                  text={item.text}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* testimonial section */}
      <section className="py-6">
        <div></div>
      </section>
      {/* Newsletter section */}
      <section className="py-12 ">
        <div className="w-5/6 md:w-4/6 mx-auto text-center">
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
