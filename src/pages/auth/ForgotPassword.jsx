import React from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage, Loader } from "../../components/shared";
import useForgotPassword from "../../hooks/useForgotPassword";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { forgotPassword, reset: resetForm, isLoading } = useForgotPassword();

  // function to submit form
  const onSubmit = (data) => {
    forgotPassword(data);
    if (resetForm) {
      reset();
    }
    // navigate("/dashboard");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div>
      <FormBody
        title="password assistance"
        text="Enter the email associated with your account and we'll send an email with instructions to reset your password"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
            <div className=" mb-5 w-full">
              <Input
                type="email"
                placeholder={"Email"}
                {...register("username", {
                  required: { value: true, message: " Email is required" },
                  validate: (value) =>
                    isValidEmail(value) || "Please enter a valid email address",
                })}
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div>
          </div>
          <div className="my-8 text-center" type="submit">
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              {isLoading ? <Loader /> : "Reset Password"}
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default ForgotPassword;
