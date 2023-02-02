import React from "react";
import Coin from "../../assets/images/coin.png";
const Profile = ({ sellerReviews, seller }) => {
  console.log(sellerReviews, "rv");
  return (
    <>
      <div class="bg-gray-300 antialiased">
        <div class="container mx-auto my-60">
          <div>
            <div class="bg-white relative shadow rounded-lg w-full mx-auto">
              <div class="flex justify-center">
                <img
                  src={Coin}
                  alt=""
                  class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                />
              </div>

              <div class="mt-16">
                <h1 class="font-bold text-center text-3xl text-gray-900">
                  {seller?.username}
                </h1>
                <p class="text-center text-sm text-gray-400 font-medium">
                  {seller?.description}
                </p>
                <p>
                  <span></span>
                </p>
                {/* <div class="my-5 px-6">
                  <a
                    href="#"
                    class=" block rounded-lg text-center font-medium leading-6 px-6 py-3  bg-black text-white"
                  >
                    Connect with{" "}
                    <span class="font-bold">@{seller?.username}</span>
                  </a>
                </div> */}

                <div class="w-full">
                  <h3 class="font-medium text-gray-900 text-left px-6">
                    Recent Reviews
                  </h3>
                  <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    {sellerReviews.length ? (
                      sellerReviews?.map((item, index) => (
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

export default Profile;
