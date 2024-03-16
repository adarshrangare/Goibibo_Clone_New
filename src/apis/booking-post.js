import AxiosInstance from "./axios-instance";

const confirmBooking = async (bookingType, bookingDetails, jwtToken) => {
  try {
    const response = await AxiosInstance.post(
      "/booking",
      {
        bookingType, 
        bookingDetails, 
      },
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

export default confirmBooking;