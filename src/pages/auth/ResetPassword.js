import React, { useRef, useState } from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage } from "../../components/shared";

const ResetPassword = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    // navigate("/dashboard");
  };
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div>
      <FormBody
        title="Create new Password"
        text="Your new password must be different from previously used passwords"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
            <div className=" mb-5 w-full">
              <Input
                placeholder={"New Password"}
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
                type="password"
              />
              {errors.password && (
                <ErrorMessage message={errors.password?.message} />
              )}
            </div>

            <div className=" mb-5 w-full">
              <Input
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
                type="password"
              />

              {errors.confirmpassword && (
                <ErrorMessage message={errors.confirmpassword?.message} />
              )}
            </div>
          </div>
          <div className="my-8 text-center" type="submit">
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              Reset Password
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default ResetPassword;
