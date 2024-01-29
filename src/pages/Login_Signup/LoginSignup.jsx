import React, { useState } from "react";
import SignTabSwitcher from "./SignTabSwitcher";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
const LoginSignup = () => {
  const [displayComponent, setDisplayComponent] = useState("Log In");

  return (
    <div className="container my-2 mx-auto ">
      <SignTabSwitcher
        onTabChange={(tab, index) => {
          setDisplayComponent(tab);
        }}
        tabs={["Log In", "Sign Up"]}
      />

      {displayComponent === "Log In"
        ? 
        <LoginPage/>
        : 
        <SignUpPage/>
        }
    </div>
  );
};

export default LoginSignup;
