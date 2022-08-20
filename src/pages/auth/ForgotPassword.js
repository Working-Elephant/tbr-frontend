import React from 'react'
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage } from "../../components/shared";



const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    // navigate("/dashboard");
  };

  return (
    <div>
      <FormBody
        title="password assistance"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
          <div className=" mb-5 w-full">
              <Input
                placeholder={"Email"}
                {...register("email", { required: true })}
              />
              {errors.password && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
            </div>
          </div>
          <div className="my-8 text-center" type="submit" >
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              Reset Password
            </button>
          </div>
        </form>
      </FormBody>
    </div>
  )
}

export default ForgotPassword