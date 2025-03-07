import { message } from "antd";
import axios from "axios";
import nookies from "nookies";
const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const { jwt } = nookies.get("jwt");
    if (jwt) {
      config.headers["Authorization"] = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      nookies.destroy(null, "jwt");
      message.warning("Session Expired");
      window.location.href = "/auth";
    }
    return Promise.reject(error.response);
  }
);

export { API };
