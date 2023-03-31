import React from "react";
import renderer from "react-test-renderer";
import OnlineBar from "./OnlineBar";

describe("OnlineBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<OnlineBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
