import React from "react";
import { Link } from "react-router-dom";
import FormBody from "../../components/auth/FormBody";

const Login = () => {
  return (
    <div>
      <FormBody
        title="existing customer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <div>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase text-center">
            <input
              className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
              placeholder="Email"
            />
            <input
              className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
              placeholder="Password"
            />
            <Link to="/forgot-password">
              <span className="uppercase text-xs underline ">
                Forgot Password?
              </span>
            </Link>
          </div>
          <div className="my-8 text-center">
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              SIGN IN
            </button>
          </div>
        </div>
      </FormBody>
    </div>
  );
};

export default Login;
