
import AxiosInstance from "./axios-instance";

export const fetchAirports = async () => {
  try {
    const res = await AxiosInstance.get("/airport?limit=30");
    // console.log(res?.data?.data?.airports);
    return res?.data?.data?.airports;
  } catch (error) {
    // console.error("There is Error", error);
    throw error;
  }
};
