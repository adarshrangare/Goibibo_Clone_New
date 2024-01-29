import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userDetail, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AuthContext.Provider value={{userDetail}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
