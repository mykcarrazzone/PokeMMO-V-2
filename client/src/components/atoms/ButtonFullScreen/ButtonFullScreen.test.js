import React from "react";
import renderer from "react-test-renderer";
import FullScreenButton from "./ButtonFullScreen";

describe("FullScreenButton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FullScreenButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
