import { errorToast } from "../components/Toasts/toast";
import AxiosInstance from "./axios-instance";

const login = async (email,password) => {

    try {
    
        const response = await AxiosInstance.post("/login", {
            email: email,
            password: password,
            appType: "bookingportals",
          });
          
          console.log("Error", response);

          return response;
          
    
    } catch (error) {
        
        errorToast(error?.response?.data?.message);

        // console.log(error);
        console.error(error?.response?.data?.message);
        return error;
    }

};

export default login;
