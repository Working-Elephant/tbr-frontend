import React from "react";
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
    navigate("/login");
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
              <Input
                placeholder={"Full Name"}
                {...register("fullName", { required: "fullName is required" })}
              />
              {errors.fullName && (
                <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Email"}
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Password"}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Confirm Password"}
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword && (
                <ErrorMessage>{errors.confirmpassword?.message}</ErrorMessage>
              )}
            </div>
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
