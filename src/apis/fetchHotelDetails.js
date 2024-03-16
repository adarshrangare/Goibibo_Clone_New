import AxiosInstance from "./axios-instance";

const fetchHotelDetails = async (hotelId, jwtToken) => {
  try {
    const response = await AxiosInstance.get(`/hotel/${hotelId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchHotelDetails;
