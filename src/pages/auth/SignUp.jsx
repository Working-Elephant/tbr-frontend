import React, { useRef } from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage, Loader } from "../../components/shared";
// import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
const SignUp = () => {
  // const navigate = useNavigate();
  const { signUp, isLoading } = useSignUp();
  // const dispatch = useDispatch();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const password = useRef({});
  password.current = watch("password", "");

  // function to submit form
  const onSubmit = (data) => {
    const submitData = {
      fullName: data.fullName,

      email: data.email,
      password: data.password,
    };
    signUp(submitData);
  };
  return (
    <div>
      <FormBody
        title="New Customer"
        text="Signup to register, shop, and buy bullies within minutes."
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Full Name"}
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
              {errors.fullName && (
                <ErrorMessage message={errors.fullName?.message} />
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                type="text"
                placeholder={"Email"}
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                  validate: (value) =>
                    isValidEmail(value) || "Please enter a valid email address",
                })}
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div>

            <div className=" mb-5 w-full">
              <Input
                label="Password"
                type="password"
                placeholder={"Password"}
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 Characters",
                  },
                })}
              />
              {errors.password && (
                <ErrorMessage message={errors.password?.message} />
              )}
            </div>
            <div className=" mb-5 w-full">
              <Input
                type="password"
                placeholder={"Confirm Password"}
                {...register("confirmpassword", {
                  required: { value: true, message: "This field is required" },
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 Characters",
                  },
                })}
              />
              {errors.confirmpassword && (
                <ErrorMessage message={errors.confirmpassword?.message} />
              )}
            </div>
          </div>
          <div className="my-8 text-center">
            <button
              type="submit"
              className=" bg-yellow py-4 px-10 rounded text-sm"
            >
              {isLoading ? <Loader /> : "REGISTER"}
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default SignUp;
