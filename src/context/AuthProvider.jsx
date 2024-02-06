import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const [userDetail, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function toggleLoginModal() {
  //   setLoginOpen((prev) => !prev);
  // }

  return (
    <AuthContext.Provider
      value={{ userDetail, isLoggedIn, loginOpen, setIsLoggedIn, setLoginOpen }}
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
