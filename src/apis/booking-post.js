import AxiosInstance from "./axios-instance";

const confirmBooking = async (bookingType, bookingDetails, jwtToken) => {
  try {
    console.log({jwtToken});
    const response = await AxiosInstance.post(
      "/booking",
      {
        bookingType : bookingType,
        bookingDetails : bookingDetails,
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
