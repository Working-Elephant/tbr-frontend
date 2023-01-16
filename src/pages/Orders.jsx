import { Modal } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
//import BreadCrumb from "../../components/shared/BreadCrumb";
import { CartData } from "../data";
import useFetchOrders from "../hooks/useFetchOrders";
import Reviews from "../shared/reviews";
const AllOrders = () => {
  const imageurl = import.meta.env.VITE_IMAGE_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);
  const username = user?.user?.username;
  const { getSingleOrder, singleOrder, addReviews, isLoading } =
    useFetchOrders();
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState();
  const [review, setReview] = useState();
  const [postId, setPostId] = useState();
  useEffect(() => {
    if (!id) return navigate("/dashboard/orders");
    getSingleOrder(id);
  }, []);

  const handleChatClose = () => {
    setShowReview(false);
  };
  const addReviewModal = (id) => {
    setPostId(id);
    setShowReview(true);
  };

  const addReview = async (rev) => {
    const obj = {
      postAdId: postId,
      review: rev,
      rating: rating,
    };
    const status = await addReviews(obj);
    if (!status) {
      setShowReview(false);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    // bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
        <div className="my-4">{/* <BreadCrumb crumbs={crumbs} /> */}</div>
        <div>
          <div className=" pb-8">
            <div>
              <h3 className="font-bold my-6">
                THANK YOU {username ?? "Customer"}
              </h3>
              <p className="text-xs">
                Thank you for your order. Your order number is {id}. <br />A
                confirmation email has also been sent to the email address
                provided.
              </p>
            </div>
            <div className="flex items-center justify-between my-4">
              <h3 className="font-bold my-6">ORDER CONFIRMATION</h3>
              <span className="uppercase text-xs underline">
                PRINT ORDER CONFIRMATION
              </span>
            </div>

            <table class="table-fixed">
              <thead className="">
                <tr className="border-y-.5 border-borderGrey uppercase ">
                  <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                    S/N
                  </th>
                  <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                    Image
                  </th>
                  <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                    Item
                  </th>

                  <th className=" text-center font-normal py-5 w-1/12">
                    Description
                  </th>
                  <th className=" text-center font-normal py-5 w-2/12">
                    Unit Price
                  </th>
                  <th className=" text-center font-normal py-5 w-3/12">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleOrder?.orderItems.length
                  ? singleOrder?.orderItems?.map((item) => (
                      <tr
                        className="border-b-.5 border-borderGrey text-center align-center text-xs"
                        key={item?.id}
                      >
                        <td className="p-2 text-center ">{1}</td>
                        <td className="p-2 text-center">
                          <div className="w-full h-full ">
                            <img
                              src={`${imageurl}${item?.postAd?.postAdImages?.[0]?.url}`}
                              alt=""
                              className="rounded-xl h-full"
                            />
                          </div>
                        </td>
                        <td className="p-2 text-center">
                          <p className="uppercase font-semibold  mb-4">
                            {item?.postAd?.title}
                          </p>
                        </td>

                        <td className="p-2 w-full text-center">
                          <p className="mb-4">{item?.postAd?.description}</p>
                        </td>

                        <td className="py-4 text-center ">
                          ${item?.postAd?.amount?.toLocaleString()}
                        </td>

                        <td
                          className="py-4 text-center "
                          onClick={() => addReviewModal(item?.postAd?.id)}
                        >
                          <p className="cursor-pointer underline">Add Review</p>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="pr-10">
            <h3 className="font-bold  mb-2">PAYMENT METHOD</h3>
            <div className="flex justify-between my-8 text-sm">
              <span>Paypal</span>
            </div>
          </div>
        </div>
      </div>
      {showReview && (
        <>
          <Modal
            keepMounted
            onClose={handleChatClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showReview}
          >
            <Box sx={style}>
              <Reviews
                setRating={setRating}
                setReview={setReview}
                rating={rating}
                addReview={addReview}
                handleClose={handleChatClose}
              />
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default AllOrders;
