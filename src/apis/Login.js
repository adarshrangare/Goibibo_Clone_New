import AxiosInstance from "./axios-instance";

const login = async (email,password) => {

    try {
    
        const response = await AxiosInstance.post("/login", {
            email: email,
            password: password,
            appType: "bookingportals",
          });

          return response;
          
    
    } catch (error) {
        
        console.error(error);
        return error;
    }

};

export default login;
