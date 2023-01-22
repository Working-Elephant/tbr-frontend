import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBody from "../../components/auth/FormBody";
import {
  Input,
  ErrorMessage,
  Loader,
  success,
  errorToast,
} from "../../components/shared";
import useSignIn from "../../hooks/useSignIn";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const message = new URLSearchParams(location.search).get("message");

  const { isLoading, signIn } = useSignIn();
  console.log(message, "message");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (message === "Account verified successfully") {
      success(message);
    } else {
      errorToast(message);
    }
  }, []);
  // function to submit form
  const onSubmit = (data) => {
    signIn(data);
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  return (
    <div>
      <FormBody
        title="Existing Customer"
        text="Login to your Texas Bully Registry Account
"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase text-center">
            <div className=" mb-5 w-full">
              <Input
                type="text"
                placeholder={"Email"}
                {...register("username", {
                  required: { value: true, message: "Email is required" },
                  validate: (value) =>
                    isValidEmail(value) || "Please enter a valid email address",
                })}
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div>

            <div className=" mb-5 w-full">
              <Input
                type="password"
                placeholder={"Password"}
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 8,
                    message: "Username must be at least 8 Characters",
                  },
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
