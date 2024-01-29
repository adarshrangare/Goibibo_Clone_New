import React from 'react'
import { InputField,PrimaryButton } from '../../components'


const LoginPage = () => {
  return (
    <div className="container w-10/12 mx-auto">

        <InputField
        label={"Email"}
        type="text"
        placeholder={"Enter your email"}
        />
        <InputField
        label={"Password"}
        type="password"
        placeholder={"Enter your password"}
        />
        
        <PrimaryButton label={"Log In"} className="mt-2 px-12 py-4 bg-orange-500 hover:bg-orange-600 font-semibold text-white" />

    </div>
  )
}

export default LoginPage