"use strict";
import { errorToast } from "../components/Toasts/toast";
import AxiosInstance from "./axios-instance";

const signUp = async (name, email, password) => {
  try {
    const response = await AxiosInstance.post("/signup", {
      name: name,
      email: email,
      password: password,
      appType: "bookingportals",
    });
    return response;
  } catch (error) {
    // console.log("Something Went Wrong", error);

    // errorToast("User is already Exist...")
    errorToast(error?.response?.data?.message);
  }
};

export default signUp;
