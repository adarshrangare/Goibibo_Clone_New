import AxiosInstance from "./axios-instance";

export const fetchHotels = async (
  location,
  limit,
  page,
  jwtToken,
  sort = "{}",
  filter = "{}",
) => {
  try {
    const response = await AxiosInstance.get(
      `hotel?search={"location": "${location}"}&sort=${sort}&filter=${filter}&limit=${limit}&page=${page}`,

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
