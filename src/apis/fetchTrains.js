import AxiosInstance from "./axios-instance";

export const fetchTrains = async (
  source,
  destination,
  day,
  sort = {},
  filter = {},
  limit = 10,
  page = 1
) => {
  try {
    const res = await AxiosInstance.get(`/train`, {
      params: {
        search: JSON.stringify({ source, destination }),
        day: day,
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
    });
    // console.log(res?.data);
    return res?.data;
  } catch (error) {
    // console.error("There is Error", error);
    throw error;
  }
};
