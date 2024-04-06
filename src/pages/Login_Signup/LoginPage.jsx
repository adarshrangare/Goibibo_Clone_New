import { LayoutTwoTone } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginAPI from "../../apis/Login";
import { PrimaryButton, Inputbox } from "../../components";
import { errorToast, successToast } from "../../components/Toasts/toast";
import { useAuth } from "../../context/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserDetails, setToken, setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;


  const location = useLocation();

  

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  function handleSignIn(e) {
    e.preventDefault();

    if (email.trim().length == 0) {
      setEmailErr(true);
      setErrorMessage("Enter Email Address");
      return;
    }
    if (password.trim().length == 0) {
      setPasswordErr(true);
      setErrorMessage("Enter a Password");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Enter Valid Email Address");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long"
      );
      return;
    }

    loginAPI(email, password).then(
      (res) => {
        
        if(res?.data){
          // console.log("responseLoginApi",res?.data);

          setUserDetails(res?.data?.data);
          setToken(res?.data?.token);
          setIsLoggedIn(true)
        successToast("User is Logged In successfully");
        // console.log("login page",location.state.previousPath.pathname)
          
        setTimeout(()=>{
          navigate(location.state.previousPath.pathname);

        },0)

        }

        
      }
    );

    setEmail("");
    setPassword("");
    setPasswordErr("");
    setEmailErr("");
    setErrorMessage("");
  }

  return (
    <div className="container w-10/12 mx-auto">
      <span className="errorMsg text-red-500 text-sm">{errorMessage} </span>
      <form onSubmit={handleSignIn}>
        <Inputbox
          label={"Email"}
          type="email"
          placeholder={"Enter your email"}
          error={emailErr}
          value={email}
          onChange={(e) => {
            setEmailErr(false);
            setEmail(e.target.value);
          }}
        />
        <Inputbox
          label={"Password"}
          type="password"
          placeholder={"Enter your password"}
          error={passwordErr}
          value={password}
          onChange={(e) => {
            setPasswordErr(false);
            setPassword(e.target.value);
          }}
        />

        <PrimaryButton
          label={"Log In"}
          
          className="mt-2 px-12 py-4 bg-orange-500 hover:bg-orange-600 font-semibold text-white"
        />
      </form>
    </div>
  );
};

export default LoginPage;
