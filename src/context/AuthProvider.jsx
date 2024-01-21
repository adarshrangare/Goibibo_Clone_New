import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
