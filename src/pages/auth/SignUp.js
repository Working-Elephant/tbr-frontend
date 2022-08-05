import React from 'react'
import FormBody from "../../components/auth/FormBody";


const SignUp = () => {
  return (
    <div>
      <FormBody
        title="New customer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"
      >
        <div>
          <div className="w-2/3 mx-auto flex flex-col uppercase">
          <input className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark" placeholder="Full Name" />
            <input className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark" placeholder="Email" />
            <input className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark" placeholder="Password" />
            <input className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark" placeholder="Confirm Password" />
          </div>
          <div className="my-8">
            <button className=" bg-yellow py-4 px-10 rounded text-sm">
              REGISTER
            </button>
          </div>
        </div>
      </FormBody>
    </div>
  )
}

export default SignUp