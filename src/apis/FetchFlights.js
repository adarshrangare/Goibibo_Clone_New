import AxiosInstance from "./axios-instance";

export const fetchFlights = async (
  source,
  destination,
  day,
  limit,
  page,
  sort = undefined,
  filter = undefined
) => {
  try {
    if (sort) {
      const res = await AxiosInstance.get(
        `/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&sort={${sort}}&limit=${limit}&page=${page}`
      );
      //  console.log(res?.data);
      return res?.data;
    } else if (filter) {
      const res = await AxiosInstance.get(
        `/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&sort={${sort}}&filter=${filter}&limit=${limit}&page=${page}`
      );
      //  console.log(res?.data);
      
      return res?.data;
    } else {
      const res = await AxiosInstance.get(
        `/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=${limit}&page=${page}`
      );
      // console.log(res?.data);
      return res?.data;
    }
  } catch (error) {
    console.error("There is Error", error);
    throw error;
  }
};


