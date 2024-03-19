import AxiosInstance from "./axios-instance";

const getBooking = async (jwtToken) => {
  try {
    console.log({jwtToken});
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
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getBooking;
