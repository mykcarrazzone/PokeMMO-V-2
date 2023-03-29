import React from "react";
import renderer from "react-test-renderer";
import Launcher from "./Launcher";

describe("Launcher", () => {
  it("rendre correctement", async () => {
    const userData = {
      socket: {
        on: jest.fn(),
      },
      user: {
        // ajoutez des données utilisateur fictives si nécessaire
        on: jest.fn(),
      },
    };

    const tree = await renderer
      .create(<Launcher userData={userData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
