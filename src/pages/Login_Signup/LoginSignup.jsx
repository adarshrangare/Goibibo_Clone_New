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
import { useAuth } from "../../context/AuthProvider";
const LoginSignup = () => {
  const [displayComponent, setDisplayComponent] = useState("Log In");

  const isLoggedIn = useAuth();

  
  

  return (
      <div className="container bg-white my-4 mx-auto md:max-w-[550px] border py-6 rounded-md shadow-sm">
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
