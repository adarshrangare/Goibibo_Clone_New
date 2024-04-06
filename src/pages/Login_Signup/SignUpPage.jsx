import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginAPI from "../../apis/SignUp";
import { Inputbox, PrimaryButton } from "../../components";
import { successToast } from "../../components/Toasts/toast";
import { useAuth } from "../../context/AuthProvider";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const location = useLocation();

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const fullNameRegex =
    / (^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16}) /;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  const { setToken, setUserDetails } = useAuth();

  function handleSignUp(e) {
    e.preventDefault();

    if (name.trim().length == 0) {
      setNameErr(true);
      setErrorMessage("Enter Full Name");
      return;
    }
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

    // if (!validateFullName(name)) {
    //   setErrorMessage("Enter Full Name Correctly");
    //   return;
    // }
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

    if (password !== confirmPassword) {
      setErrorMessage(
        "Passwords are not matched, Please enter Password and Confirm password same."
      );
      return;
    }

    loginAPI(name, email, password).then((res) => {
      // console.log("signup", res);
      // setToken(res);
      if (res) {
        setUserDetails(res?.data?.data?.user);
        setToken(res?.data?.token);
        successToast("Account is created successfully");
        setTimeout(() => {
          navigate(location.state.previousPath.pathname);
        }, 0);
      }
    });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordErr("");
    setEmailErr("");
    setErrorMessage("");
  }

  return (
    <div className="container w-10/12 mx-auto">
      <span className="errorMsg text-red-500 text-sm">{errorMessage} </span>
      <form onSubmit={handleSignUp}>
        <Inputbox
          label={"Full Name"}
          type="text"
          placeholder={"Enter your Full Name"}
          error={nameErr}
          value={name}
          onChange={(e) => {
            setNameErr(false);
            setName(e.target.value);
          }}
        />
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
        <Inputbox
          label={"Confirm Password"}
          type="password"
          placeholder={"Enter your password again"}
          error={passwordErr}
          value={confirmPassword}
          onChange={(e) => {
            setPasswordErr(false);
            setConfirmPassword(e.target.value);
          }}
        />

        <PrimaryButton
          label={"Sign Up"}
          className="mt-2 px-12 py-4 bg-orange-500 hover:bg-orange-600 font-semibold text-white"
        />
      </form>
    </div>
  );
};

export default SignUpPage;
