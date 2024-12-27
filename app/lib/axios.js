import axios from "axios";

let accessToken = null;

if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("token");
}

console.log("access Token", accessToken)
export const axiosPrivateForm = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    "x-auth-token": accessToken,
    Accept: "application/json",
  },
});
