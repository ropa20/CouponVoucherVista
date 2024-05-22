import axios from "axios";

export const executePost = async (endPoint, data) => {
  return await axios.post(process.env.REACT_APP_BACKEND_URL + endPoint, data);
};

export const executeGET = async (endPoint) => {
  return await axios.get(process.env.REACT_APP_BACKEND_URL + endPoint);
};
