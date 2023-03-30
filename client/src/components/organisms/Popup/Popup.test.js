import React from "react";
import renderer from "react-test-renderer";
import Popup from "./Popup";

global.window = {
  innerWidth: 1024,
  innerHeight: 768,
  addEventListener: () => {},
  removeEventListener: () => {},
};

describe("Popup", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Popup isMobile={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly popup in mobile mode", () => {
    const tree = renderer.create(<Popup isMobile={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
