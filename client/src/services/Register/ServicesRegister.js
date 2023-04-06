import axios from "axios";

export async function register(formData, character) {
  const randomColorExceptYellow = () => {
    const colors = ["blue", "green", "purple", "orange", "pink", "grey"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };
  console.log("Registering user...");
  console.log(character);
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_PROD_URL}/api/createUser`,
    data: {
      email: formData.email,
      password: formData.password,
      username: formData.username,
      character: {
        baseTexture: character.character.baseTexture,
        chatColor: randomColorExceptYellow(),
      },
    },
  };
  return await axios(config);
}
