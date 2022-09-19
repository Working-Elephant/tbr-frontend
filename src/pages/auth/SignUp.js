import React, { useRef } from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage, Loader } from "../../components/shared";
// import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
// import { useDispatch } from "react-redux";
// import { SignUpSlice } from "../../store/features/authSlice";
// import { isResponseSuccess } from "../../utils";
import { isValidEmail } from "../../utils";
// import { login as LoginUrl } from "../../config/internalUrl";



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

  const password = useRef({});
  password.current = watch("password", "");

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    const submitData = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    console.log(submitData);
    signUp(submitData);
    // dispatch(SignUpSlice(data))
    //   .then((res) => {
    //     if (res.payload.status >= 200 && res.payload.status <= 300) {
    //       navigate(LoginUrl);
    //     }
    //     throw new Error("error submitting form");
    //   })
    //   .catch((err) => {
    //     // return toast.error(err.message);
    //   });
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
                type="password"
                placeholder={"Password"}
                {...register("password", {
                  required: { value: true, message: "This field is required" },
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
