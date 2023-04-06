import axios from "axios";

export async function login(formData) {
  const config = {
    method: "post",
    url: "http://109.208.107.116:4129/api/login",
    data: formData,
  };
  return await axios(config);
}
