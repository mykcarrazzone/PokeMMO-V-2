import axios from "axios";

export async function login(formData) {
  const config = {
    method: "post",
    url: "http://localhost:3000/api/login",
    data: formData,
  };
  return await axios(config);
}
