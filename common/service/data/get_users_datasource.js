import { API } from "../api";
import { getUsersDetailApi } from "../api_const";

const getUserData = async () => {
  try {
    const response = await API.get(getUsersDetailApi);
    return response;
  } catch (e) {
    throw e;
  }
};

export const userServices = {
  getUserData,
};
