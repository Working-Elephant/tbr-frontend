import React from 'react'
import FormBody from "../../components/auth/FormBody";


const ForgotPassword = () => {
  return (
    <div>
      <FormBody
        title="password assistance"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <div>
          <div className="w-full lg:w-2/3 mx-auto flex flex-col uppercase">
            <input className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark" placeholder="Email" />
          </div>
          <div className="my-8 text-center">
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              Reset Password
            </button>
          </div>
        </div>
      </FormBody>
    </div>
  )
}

export default ForgotPassword