import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";

global.window = {
  innerWidth: 1024,
  innerHeight: 768,
  addEventListener: () => {},
  removeEventListener: () => {},
};

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout isMobile={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly in mobile mode", () => {
    const tree = renderer.create(<Layout isMobile={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
