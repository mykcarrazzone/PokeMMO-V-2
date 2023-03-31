import React from "react";
import renderer from "react-test-renderer";
import SettingItems from "./SettingItems";
describe("SettingItems", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SettingItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
