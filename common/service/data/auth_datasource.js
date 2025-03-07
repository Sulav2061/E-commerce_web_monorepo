import { API } from "../api";
import { loginApi } from "../api_const";

const userLogin = async (payload) => {
  try {
    const response = await API.post(loginApi, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const authServices = {
  userLogin,
};
