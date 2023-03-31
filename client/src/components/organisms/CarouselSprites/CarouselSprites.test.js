import React from "react";
import renderer from "react-test-renderer";
import SpritesCarousel from "./CarouselSprites";

describe("SpritesCarousel", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpritesCarousel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
