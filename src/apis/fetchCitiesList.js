import AxiosInstance from "./axios-instance";


export async function fetchCities(cityName, jwtToken) {
  try {
    const response = await AxiosInstance.get(
      `city?search={"cityState": "${cityName}"}`,
      
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
}
