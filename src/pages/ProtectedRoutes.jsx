import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const user = useSelector((state) => state.user);

  const { isLoggedIn } = useAuth();
    // console.log({isLoggedIn});
    let location = useLocation();

    // if(localStorage.getItem("token")){

    //   return (
    //     <Navigate to="/login-signup" state={{ previousPath: location }} replace />
    //   );

    // }


  // console.log({location});

  if (!(localStorage.getItem("token"))) {
    return (
      <Navigate to="/login-signup" state={{ previousPath: location }} replace />
    );
  }
  return children;
};

export default ProtectedRoute;
