import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [userDetail, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(true);

  const [token,setToken] = useLocalStorage("token",null);

  function logOutFunc(){
    if(localStorage.getItem("token"))

    localStorage.removeItem("token");

    alert("user is Logged Out");

    setIsLoggedIn(false);
    setUserDetails({});
  }

  console.log({token});

  

  useEffect(()=>{
    if(token){
      setIsLoggedIn(true);
      setLoginOpen(false)
    }

  },[token])

  

  return (
    <AuthContext.Provider
      value={{ setToken,userDetail, isLoggedIn, loginOpen, setIsLoggedIn, setLoginOpen,setUserDetails, logOutFunc }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
