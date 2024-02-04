
import AxiosInstance from "./axios-instance";

export const fetchFlightDetails = async (flightId) => {
  try {
    const res = await AxiosInstance.get(`/flight/${flightId}`);
    // console.log(res?.data);
    return res?.data;
  } catch (error) {
    console.error("There is Error", error);
    throw error;
  }
};
