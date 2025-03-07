import { API } from "../api";
import { updateStatusApi } from "../api_const";

const updateStatus = async (payload, id) => {
  console.log("check", id);
  try {
    const response = await API.patch(`${updateStatusApi}${id}`, payload);
    return response;
  } catch (e) {
    throw e;
  }
};

export const adminFormServices = {
  updateStatus,
};
