import React from "react";
import renderer from "react-test-renderer";
import LatencyBar from "./LatencyBar";

describe("LatencyBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LatencyBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
