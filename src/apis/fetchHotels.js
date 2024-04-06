import AxiosInstance from "./axios-instance";

export const fetchHotels = async (
  location,
  sort = {},
  filter = {},
  limit = 10,
  page = 1,
  jwtToken
) => {
  try {
    const res = await AxiosInstance.get(`/hotel`, {
      params: {
        search: JSON.stringify({ location }),
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    // console.log(res?.data);
    return res?.data;
  } catch (error) {
    // console.error("There is Error", error);
    throw error;
  }
};
