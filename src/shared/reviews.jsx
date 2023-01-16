import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { Loader } from "../components/shared";
import useFetchOrders from "../hooks/useFetchOrders";
import "./input.css";
const Reviews = ({ setRating, rating, handleClose, addReview }) => {
  const [hover, setHover] = useState(0);
  const { isLoading } = useFetchOrders();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "dt");
    let review = data.review;

    addReview(review);
  };
  return (
    <>
      <div className=" relative mx-auto bg-white shadow-lg rounded-lg my-32 px-4 py-4 max-w-sm ">
        {/* <div className="absolute top-10 right-55 text-lg">
          <MdClose />
        </div> */}

        <div className="w-full px-4">
          <h3 className="font-medium tracking-tight">Review this item</h3>
          <p className="text-gray-700 text-sm py-1">
            Give your opinion about this item.
          </p>
          <div className="flex justify-center items-center mt-4">
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`button-rating ${
                      index <= (hover || rating) ? "on" : "off"
                    }`}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-0 text-sm text-black bg-white border-0  focus:outline-0 focus:ring-0 "
                    placeholder="Write a comment..."
                    {...register("review", {
                      required: {
                        value: true,
                        message: "Review is Required",
                      },
                    })}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 ">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-yellow rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    {isLoading ? <Loader /> : "Submit Feedback"}
                  </button>
                </div>
              </div>
            </form>
          </>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export default Reviews;
