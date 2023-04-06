import axios from "axios";

export const getUserById = async (token) => {
  const config = {
    method: "get",
    url: "http://109.208.107.116:4129/auth/getUserById",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios(config);
};
