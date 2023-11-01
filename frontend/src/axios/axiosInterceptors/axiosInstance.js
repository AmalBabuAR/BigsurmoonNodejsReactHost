import axios from "axios";
import { useNavigate } from "react-router-dom";

function getUserToken() {
  const token = localStorage.getItem("auth");
  const parseData = JSON.parse(token);
  if (parseData) {
    return parseData;
  }
  return null;
}

const axiosInstance = axios.create({
  baseURL: "api/user/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.log("error in axios instance", error);
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("response in instance", response);
    return response;
  },
  function (error) {
    if (error.response.data.noToken) {
      window.location.href = "/login";
      localStorage.removeItem("auth");
      alert(error.response.data.message);
    }
    console.log("error in axios instanceddd", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
