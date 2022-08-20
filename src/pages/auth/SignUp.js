import React from "react";
// import { Link } from "react-router-dom";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage } from "../../components/shared";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div>
      <FormBody
        title="New customer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
            <div className=" mb-5 w-full">
              <input
                className="border-.5 border-borderGrey w-full py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
                placeholder="Full Name"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p className="text-error text-xs mt-1">
                  Full Name is required.
                </p>
              )}
            </div>
            <div className=" mb-5 w-full">
              <input
                className="border-.5 border-borderGrey w-full py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-error text-xs mt-1">Email is required.</p>
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input placeholder={"Password"} {...register("password", { required: true })} />
              {errors.password && (<ErrorMessage>{errors.password?.message}</ErrorMessage>)}
            </div>
            
            <div className=" mb-5 w-full">
              <input
                className="border-.5 border-borderGrey w-full py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
                placeholder="Confirm Password"
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword && (
                <p className="text-error text-xxs mt-1">
                  Password is required.
                </p>
              )}
            </div>
            {/* <input
              className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
              placeholder="Password"
            /> */}
            {/* <input
              className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
              placeholder="Confirm Password"
            /> */}
          </div>
          <div className="my-8 text-center">
            <button
              type="submit"
              className=" bg-yellow py-4 px-10 rounded text-sm"
            >
              REGISTER
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default SignUp;
