import React from "react";
import renderer from "react-test-renderer";
import Gamepad from "./GamePad";

describe("Gamepad", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Gamepad />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
