import DashboardLayout from "../../components/dashboard/DashboardLayout";
import React, { useRef, useState, useEffect } from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import {
  Input,
  ErrorMessage,
  errorToast,
  Loader,
} from "../../components/shared";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useResetPassword from "../../hooks/useResetPassword";
const ChangePass = () => {
  const { user = {} } = useSelector((state) => state.auth.user);
  const { changePassword, isLoading } = useResetPassword();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  // function to submit form
  const onSubmit = async (data) => {
    console.log(data, "data");
    const { password, oldPassword } = data;
    if (password === oldPassword) {
      errorToast("Please use a new password");
      return;
    }
    const obj = {
      password,
      oldPassword,
      username: user?.username,
    };

    const status = await changePassword(obj);
  };

  return (
    <>
      <div>
        <FormBody
          title="Change your Password"
          text="Your new password must be different from previously used passwords"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
              <div className=" mb-5 w-full">
                <Input
                  placeholder={"Old Password"}
                  {...register("oldPassword", {
                    required: {
                      value: true,
                      message: "Old Password is required",
                    },
                  })}
                  type="password"
                />
                {errors.password && (
                  <ErrorMessage message={errors.password?.message} />
                )}
              </div>
              <div className=" mb-5 w-full">
                <Input
                  placeholder={"New Password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
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
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
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
                {isLoading ? <Loader /> : "Submit"}
              </button>
            </div>
          </form>
        </FormBody>
      </div>
    </>
  );
};

export default ChangePass;
