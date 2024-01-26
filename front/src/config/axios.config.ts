// import { SESSION_STORAGE_TOKEN } from "@/const/auth.const";
import axios from "axios";

//axios config
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

// const accessToken = sessionStorage.getItem(SESSION_STORAGE_TOKEN);

// if (accessToken) {
//   //interceptor for token
//   axiosInstance.interceptors.request.use((config) => {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//     return config;
//   });
// }

export default axiosInstance;
