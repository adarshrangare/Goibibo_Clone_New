import React from 'react'
import { InputField,PrimaryButton } from '../../components'

const SignUpPage = () => {
  return (
    <div className="container w-10/12 mx-auto">

        <InputField
        label={"Full Name"}
        type="text"
        placeholder={"Enter your Full Name"}
        />
        <InputField
        label={"Email"}
        type="email"
        placeholder={"Enter your email"}
        />
        <InputField
        label={"Password"}
        type="password"
        placeholder={"Enter your password"}
        />
        <InputField
        label={"Confirm Password"}
        type="password"
        placeholder={"Enter your password again"}
        />
        
        <PrimaryButton label={"Sign up"} className="mt-2 px-12 py-4 bg-orange-500 hover:bg-orange-600 font-semibold text-white" />

    </div>
  )
}

export default SignUpPage