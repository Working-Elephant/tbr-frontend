import React, { useState, useEffect } from "react";

import Coin from "../../assets/images/coin.png";

import { Input } from "../../components/shared";
import { useForm } from "react-hook-form";
import { Loader } from "../../components/shared";

import useSignIn from "../../hooks/useSignIn";
import { login } from "../../store/features/authSlice";
import { FaEdit } from "react-icons/fa";

const Home = ({ reviews, user, submitData, showEdit, setShowEdit }) => {
  const { isLoading } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    submitData(data);
  };

  return (
    <>
      <div class="w-full p-4  md:w-11/12 lg:w-4/6 md:mx-auto md:my15">
        <div class="container mx-auto my-20">
          <div>
            <div class="bg-white relative rounded-lg w-full mx-auto">
              <div class="flex justify-center">
                <img
                  src={Coin}
                  alt=""
                  class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md transition duration-200 transform hover:scale-110"
                />
              </div>

              <div class="mt-16 ">
                <h1 class="font-bold text-center text-3xl text-gray-900">
                  {user?.fullName}
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                    <div>
                      <span className="text-sm">Username</span>
                      <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                        <Input value={user?.username} border="border-0" />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm">Email</span>
                      <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                        <Input border="border-0" value={user?.email} />
                      </div>
                    </div>
                  </div>
                  {showEdit ? (
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="bio" className="sr-only">
                          Your Bio
                        </label>
                        <textarea
                          id="bio"
                          rows="4"
                          className="w-full px-0 text-sm text-black bg-white border-0  focus:outline-0 focus:ring-0 "
                          placeholder="Write a short Bio..."
                          {...register("description", {
                            required: {
                              value: true,
                              message: "About me..",
                            },
                          })}
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-start px-3 py-2 ">
                        <button
                          type="submit"
                          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-yellow rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                          {isLoading ? <Loader /> : "Edit Bio"}
                        </button>
                        <button
                          onClick={() => setShowEdit(false)}
                          className=" ml-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-yellow rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="text-sm">Bio</span>
                      <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit flex justify-between items-center ">
                        <div className="w-full">
                          <Input border="border-0" value={user?.description} />{" "}
                        </div>
                        <FaEdit
                          className="cursor-pointer"
                          onClick={() => setShowEdit(true)}
                        />
                      </div>
                    </div>
                  )}
                </form>
                <p>
                  <span></span>
                </p>

                <div class="w-full mt-6">
                  <h3 class="font-medium text-gray-900 text-left px-6">
                    Recent Reviews
                  </h3>
                  <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    {reviews && reviews.length ? (
                      reviews?.map((item, index) => (
                        <a
                          href="#"
                          class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                          key={index}
                        >
                          <div className="">
                            <div className="">
                              <img
                                src={Coin}
                                alt=""
                                class="rounded-full h-6 shadow-md inline-block mr-2 "
                              />
                              {[...Array(item.rating)].map((star, index) => {
                                index += 1;
                                return (
                                  <button
                                    type="button"
                                    key={index}
                                    className={`button-rating on
                                    }`}
                                  >
                                    <span className="star">&#9733;</span>
                                  </button>
                                );
                              })}
                            </div>

                            <div className="flex justify-between mt-3">
                              {item.review}
                              <span class="text-gray-500 text-xs ">
                                {item.createdAt}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))
                    ) : (
                      <p className="font-medium">No reviews for this user </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
