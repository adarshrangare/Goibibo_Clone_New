import { errorToast } from "../components/Toasts/toast";
import AxiosInstance from "./axios-instance";

const getBooking = async (jwtToken) => {
  try {
    // console.log({jwtToken});
    const response = await AxiosInstance.get(
      "/booking",
      
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // console.error("Error fetching data:", error);
    const msg = error?.response?.data?.message || "Something Went Wrong"
    errorToast(msg);
    throw error;
  }
};

export default getBooking;
