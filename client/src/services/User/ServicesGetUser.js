import axios from "axios";

export const getUserById = async (token) => {
  const config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_API_PROD_URL}/auth/getUserById`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios(config);
};
