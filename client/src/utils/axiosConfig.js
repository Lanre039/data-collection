import axios from "axios";

let apiBaseUri = process.env.REACT_APP_API_BASE_URL;

const axiosDefaultInstance = axios.create({
  baseURL: apiBaseUri,
  // timeout: 10000,
  headers: {
    //initialize default application headers here
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export default axiosDefaultInstance;
