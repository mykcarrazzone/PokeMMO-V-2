import axios from "axios";

export async function login(formData) {
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_PROD_URL}/api/login`,
    data: formData,
  };
  return await axios(config);
}
