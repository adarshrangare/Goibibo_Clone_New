import { errorToast } from "../components/Toasts/toast";
import AxiosInstance from "./axios-instance";


export const fetchBookings = async (jwtToken) => {
    try {
      const res = await AxiosInstance.get("/booking",
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      );
      // console.log(res?.data);
      return res?.data
    } catch (error) {
      // console.error("There is Error", error);
      
      throw error;
    }
  };
  