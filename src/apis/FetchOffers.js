import AxiosInstance from "./axios-instance";

export const fetchOffers = async (type)=>{
    console.log("fetch: ",type)
    try {
        const res = await AxiosInstance.get(`/offers?filter={"type":"${type}"}`);
        console.log(res?.data?.data?.offers);
        return res?.data?.data?.offers;
      } catch (error) {
        console.error("There is Error", error);
        throw error;
      }

}