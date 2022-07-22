import Axios, { AxiosError } from "axios";
import { BASE_API } from "./constant";

const axios = Axios.create({
  baseURL: `${BASE_API}`,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject(error);
  }
);

const axiosModules = { axios, AxiosError };

export default axiosModules;
