import { API } from "../api";
import { getAdminVerifyFormApi } from "../api_const";

const getAdminVerifyForm = async () => {
  try {
    const response = await API.get(getAdminVerifyFormApi);
    return response;
  } catch (e) {
    throw e;
  }
};

export const kycServices = {
  getAdminVerifyForm,
};
