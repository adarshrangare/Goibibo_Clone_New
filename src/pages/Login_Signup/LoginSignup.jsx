import React, { useState } from "react";
import SignTabSwitcher from "./SignTabSwitcher";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
  useNavigationType,
} from "react-router-dom";
const LoginSignup = () => {
  const [displayComponent, setDisplayComponent] = useState("Log In");

  // const navigate = useNavigate();
  // const navigation = useNavigation();
  const location = useLocation();
  console.log(location.state?.previousPath);
  // console.log({navigate,navigation})

  return (
    <div className="container my-2 mx-auto ">
      <SignTabSwitcher
        onTabChange={(tab, index) => {
          setDisplayComponent(tab);
        }}
        tabs={["Log In", "Sign Up"]}
      />

      {displayComponent === "Log In" ? <LoginPage /> : <SignUpPage />}
    </div>
  );
};

export default LoginSignup;
