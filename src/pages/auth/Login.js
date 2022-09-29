import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBody from "../../components/auth/FormBody";
import { Input, ErrorMessage, Loader } from "../../components/shared";
import useSignIn from "../../hooks/useSignIn";

const Login = () => {
  const { isLoading, signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <div>
      <FormBody
        title="Existing Customer"
        text="Login to your Texas Bully Registry Account
"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase text-center">
            {/* <div className=" mb-5 w-full">
              <Input
                type="text"
                placeholder={"Email"}
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  validate: (value) =>
                    isValidEmail(value) || "Please enter a valid email address",
                })}
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div> */}
            <div className=" mb-5 w-full">
              <Input
                type="text"
                placeholder={"Username"}
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              {errors.username && (
                <ErrorMessage message={errors.username?.message} />
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Password"}
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              />
              {errors.password && (
                <ErrorMessage message={errors.password?.message} />
              )}
            </div>

            <Link to="/forgot-password">
              <span className="uppercase text-xs underline ">
                Forgot Password?
              </span>
            </Link>
          </div>
          <div className="my-8 text-center">
            <button
              className=" bg-yellow py-4 px-10 rounded text-sm"
              type="submit"
            >
              {isLoading ? <Loader /> : "SIGN IN"}
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default Login;
