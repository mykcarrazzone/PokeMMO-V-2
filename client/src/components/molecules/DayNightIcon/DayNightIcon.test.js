import React from "react";
import renderer from "react-test-renderer";
import IsNight from "./DayNightIcon";

describe("IsNight", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<IsNight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
