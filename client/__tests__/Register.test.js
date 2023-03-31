import axios from "axios";
import { register } from "../src/services/Register/ServicesRegister";

jest.mock("axios");

describe("registerService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call axios with the correct data", async () => {
    const formData = {
      email: "test@test.com",
      password: "password",
      username: "testuser",
    };
    const character = {
      character: {
        baseTexture: "baseTexture",
      },
    };
    const expectedData = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
      character: {
        baseTexture: character.character.baseTexture,
        chatColor: expect.any(String),
      },
    };
    axios.mockResolvedValueOnce({ data: "success" });

    const result = await register(formData, character);

    expect(axios).toHaveBeenCalledWith({
      method: "post",
      url: "http://localhost:3000/api/createUser",
      data: expectedData,
    });
    expect(result).toEqual({ data: "success" });
  });
});
