
import AxiosInstance from "./axios-instance";

export const fetchFlights = async (source,destination,day,limit,page) => {
  try {
    const res = await AxiosInstance.get(`/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=${limit}&page=${page}`);
    console.log(res?.data);
    return res?.data;
  } catch (error) {
    console.error("There is Error", error);
    throw error;
  }
};