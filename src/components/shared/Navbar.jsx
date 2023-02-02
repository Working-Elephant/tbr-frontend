import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaBell, FaEnvelope, FaCartPlus } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Backdrop from "@mui/material/Backdrop";
import { useSelector } from "react-redux";
import useLogOut from "../../hooks/useLogout";
import { FaDog } from "react-icons/fa";
import { useEffect } from "react";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnectionState,
  HttpTransportType,
} from "@microsoft/signalr";
import { useNavigate } from "react-router-dom";
const Navbar = ({ home }) => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const chaturl = import.meta.env.VITE_CHAT_URL;
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const { logOut } = useLogOut();
  const { cart } = useSelector((state) => state.product);
  const [connection, setConnection] = useState(null);
  const [newMessage, setNewMessage] = useState(false);
  const username = user?.user?.username;
  const userId = user?.user?.id;
  const handleClose = () => {
    setMobileMenu(false);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const onLogOut = () => {
    logOut();
  };

  //establish socket connection
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(`${baseUrl}/hubs/chat`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    console.log(newConnection, "new connection");
    setConnection(newConnection);
  }, []);

  //check connection and reestablish
  useEffect(() => {
    if (connection) {
      if (connection.state === HubConnectionState.Disconnected) {
        connection
          .start()
          .then((result) => {
            console.log("Connected!");
            handleListen();
          })
          .catch((e) => console.log("Connection failed: ", e));
      } else {
        console.log("Connected!");
        handleListen();
      }

      function handleListen() {
        // const intervalId = setInterval(() => {
        //assign interval to a variable to clear it.
        if (userId) {
          console.log("listeing");

          connection.on(`${userId.toString()}_message_notification`, (data) => {
            setNewMessage(true);
            console.log(data, "message");
          });
        }
        //  }, 5000);

        // return () => clearInterval(intervalId);
      }
    }
  }, [connection]);

  const gotoMessage = () => {
    setNewMessage(false);
    navigate("/dashboard/messages");
  };
  return (
    <nav
      className={`w-full bg-transparent  px-6 pb-4 pt-6 md:pt-8    ${
        home ? " absolute top-0 text-white" : "border-b-.5 border-b-borderGrey"
      } `}
    >
      <div className=" md:w-10/12  lg:w-11/12 xl:w-10/12  mx-auto flex justify-between items-center  text-xs  md:text-sm lg:text-xs xl:text-sm ">
        <div className="">
          <Link className="flex items-center  " to="/">
            <img src={Logo} alt="logo" className="w-5/6" />
          </Link>
        </div>
        {/* nav items */}
        <ul className="hidden lg:flex  whitespace-nowrap">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/categories">Listings</Link>
          </li>
          {/* <li className="mx-3">
            <Link to="/">Services</Link>
          </li> */}
          {/* <li className="mx-3">
            <Link to="/blog">Bully News</Link>
          </li> */}
          <li className="mx-3">
            <Link to="/about-us">About Us </Link>
          </li>
          <li className="mx-3">
            <Link to="/founders">Founders </Link>
          </li>
        </ul>
        {/* Search */}
        {/* {home ? null : (
          <div className="hidden px-2 md:block text-xs  xl:text-sm">
            <div className="bg-lightGrey w-full flex items-center justify-between py-3 px-5 rounded-xl ">
              <input
                className="bg-lightGrey w-5/6 focus:outline-none"
                placeholder="Search"
              />
              <i className="text-grey">
                <FiSearch />
              </i>
            </div>
          </div>
        )} */}
        {/* cart */}

        <div className=" hidden lg:flex items-center whitespace-nowrap">
          <div className="bg-black p-2 rounded-[50%] mr-3">
            {cart?.items?.length ? (
              <Link to={"/cart"}>
                <div class="inline-flex relative items-center p-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <i className="text-lg text-yellow">
                    <FaCartPlus />
                  </i>
                  <span class="sr-only">Cart</span>
                  <div class="inline-flex absolute -top-2  justify-center items-center w-6 h-6 text-xs font-bold text-primary  rounded-full dark:border-gray-900">
                    {cart?.items?.length}
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={"/cart"}>
                <i className="text-lg text-yellow">
                  <FaCartPlus />
                </i>
              </Link>
            )}
          </div>
        </div>

        {/* login and sign up buttons */}
        {isLoggedIn ? (
          <div className=" hidden lg:flex items-center whitespace-nowrap">
            <div
              className="bg-black p-1 rounded-[50%] mr-3 relative cursor-pointer"
              onClick={gotoMessage}
            >
              <div className=" inline-flex items-center p-2 text-sm font-medium text-center text-black  rounded-lg ">
                <div className="">
                  <i className="text-lg text-yellow">
                    <FaEnvelope />
                  </i>
                </div>
                {newMessage && (
                  <div
                    title="New Message"
                    class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-error border-2 border-white rounded-full -top-2 -right-2 "
                  ></div>
                )}
              </div>
            </div>

            <div className="h-9 mr-5 items-center flex">
              <Link to={"/dashboard"} className="mr-2">
                <div className="flex items-center justify-around">
                  <FaDog /> <span className="ml-2 text-muted">{username}</span>
                </div>
              </Link>
            </div>
            <Link to={"/dashboard"} className="ml-2 mr-2">
              <span className="font-medium">Dashboard</span>{" "}
            </Link>

            <span className="cursor-pointer" onClick={onLogOut}>
              Logout
            </span>
          </div>
        ) : (
          <div className=" hidden lg:flex items-center whitespace-nowrap">
            <span className="mr-5">
              <Link to="/login">Login</Link>
            </span>
            <Link to="/register">
              <button className="bg-yellow text-dark py-3 px-8 lg:px-12 rounded ">
                Sign Up
              </button>
            </Link>
          </div>
        )}

        {/*  mobile menu icon */}
        <div className="lg:hidden text-end ">
          <button className="outline-none p-2 rounded focus:outline-none  ">
            <i className="text-xl" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </i>
          </button>

          {/* Mobile menu */}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={mobileMenu}
            onClick={handleClose}
          >
            <div
              className={`${
                mobileMenu
                  ? "flex absolute top-0 right-0 bg-white h-full w-1/2 md:w-2/6 text-[#333] shadow-lg rounded-tl-3xl rounded-bl-3xl pl-8  flex-col items-between overflow-y-auto"
                  : "hidden"
              } `}
            >
              <div className="">
                <div className="flex items-center justify-end">
                  <i
                    className="text-xl text-end p-4 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    <MdClose />
                  </i>
                </div>
                <ul className="text-start  mb-3">
                  <li className="py-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/categories">Listings</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/">Services</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/">Bully News</Link>
                  </li>
                  <li className="py-3">
                    <Link to="/about-us">About Us </Link>
                  </li>
                  <li className="py-3">
                    <Link to="/founders">Founders </Link>
                  </li>
                  {isLoggedIn ? (
                    <li className="py-3">
                      <Link to="/dashboard" className="font-medium">
                        Dashboard
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
              {isLoggedIn ? (
                <div className="  items-center whitespace-nowrap">
                  {/* <div className="bg-black p-2 rounded-[50%] mr-3">
                    <i className="text-lg text-yellow"> <FaBell /> </i>
                  </div> */}

                  {/* <div className="h-9">
                    <img
                      src={UserAvatar}
                      alt=""
                      className="rounded-[50%] max-h-full"
                    />
                  </div> */}
                  <div className="justify-center flex mt-4">
                    <button
                      className="bg-yellow text-dark py-3 px-8 lg:px-12 rounded"
                      onClick={onLogOut}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className=" text-start flex flex-col text-sm pr-8">
                  <span className="mb-5">
                    <Link to="/login">Login</Link>
                  </span>
                  <button className="bg-yellow text-dark py-3 px-8 lg:px-12 rounded ">
                    <Link to="/register">Sign Up</Link>
                  </button>
                </div>
              )}
            </div>
          </Backdrop>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
