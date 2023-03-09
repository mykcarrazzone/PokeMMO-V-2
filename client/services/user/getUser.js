import axios from "axios";

export const getUserById = async (token) => {
  const config = {
    method: "get",
    url: "http://localhost:3000/auth/getUserById",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios(config);
};
