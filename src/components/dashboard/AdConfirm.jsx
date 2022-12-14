import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdConfirm = () => {
  return (
    <div>
      <div className="md:w-5/6 xl:w-4/6 mx-auto py-3 text-center">
        <div className="p-15 bg-success rounded-full inline-block mt-10">
          <i className="text-4xl text-white">
            <FaCheck />
          </i>
        </div>
        <h5 className="my-2 font-semibold">Completed</h5>
        <p className="my-2">
          You have successfully submitted your Bully for review. Kindly head
          over to payment to complete Registration{" "}
        </p>
        <div className="text-center my-5">
          <button className="bg-yellow py-4 px-15 rounded font-semibold text-sm ">
            <Link to="/dashboard/bully-registration"> FINISH</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdConfirm;
