"use strict";
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
    console.log("Something Went Wrong", error);

    alert("User is already Exist...")
  }
};

export default signUp;
