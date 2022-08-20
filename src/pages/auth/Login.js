import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBody from "../../components/auth/FormBody";
import { Input, ErrorMessage } from "../../components/shared";

const Login = () => {
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
        title="existing customer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase text-center">
            <div className=" mb-5 w-full">
              <Input
                placeholder={"Email"}
                {...register("email", { required: true })}
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
              SIGN IN
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  );
};

export default Login;
