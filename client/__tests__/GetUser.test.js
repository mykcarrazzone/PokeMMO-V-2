import axios from "axios";
import { getUserById } from "../src/services/User/ServicesGetUser";

jest.mock("axios");

describe("getUserById", () => {
  const token = "fakeToken123";
  const response = { data: { id: 1, username: "test" } };

  beforeEach(() => {
    axios.mockClear();
  });

  it("should make a get request to the getUserById endpoint with provided token", async () => {
    axios.mockImplementationOnce(() => Promise.resolve(response));

    const expectedConfig = {
      method: "get",
      url: "http://localhost:3000/auth/getUserById",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const result = await getUserById(token);

    expect(axios).toHaveBeenCalledWith(expectedConfig);
    expect(result).toEqual(response);
  });

  it("should throw an error when the request fails", async () => {
    const errorMessage = "Failed to get user";
    axios.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getUserById(token)).rejects.toThrow(errorMessage);
  });
});
