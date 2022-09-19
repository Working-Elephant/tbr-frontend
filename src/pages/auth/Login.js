import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBody from "../../components/auth/FormBody";
import { Input, ErrorMessage, Loader } from "../../components/shared";
import useSignIn from "../../hooks/useSignIn";

const Login = () => {

  const {loading, signIn} = useSignIn();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    if (!isValidEmail(data.email)) {
      return;
    } else {
      signIn(data);
    }
  };

  return (
    <div>
      <FormBody
        title="existing customer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase text-center">
            <div className=" mb-5 w-full">
              <Input
                type="email"
                placeholder={"Email"}
                {...register("email", {
                  required: { value: true, message: " Email is required" },
                })}
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
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
              {loading ? <Loader /> : "SIGN IN"}
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default Login;
