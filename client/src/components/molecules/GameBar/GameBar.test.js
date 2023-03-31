import React from "react";
import renderer from "react-test-renderer";
import GameBar from "./GameBar";

describe("GameBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GameBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
