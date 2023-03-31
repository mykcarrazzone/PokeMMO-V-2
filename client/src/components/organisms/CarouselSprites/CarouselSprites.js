import React, { useState } from "react";
import Image from "next/image";

const SpritesCarousel = ({ onSpriteSelect }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sprites = [
    "/assets-web/images/register/sprites/hero_01_red_m_walk.png",
    "/assets-web/images/register/sprites/hero_01_white_f_walk.png",
  ];

  const selectedSpriteByIndex = (path) => {
    const imagePath = path;
    const pathParts = imagePath.split("/");
    const pathAfterFifthSlash = pathParts.slice(5).join("/");
    const spriteName = pathAfterFifthSlash.replace(".png", "");
    onSpriteSelect(spriteName);
  };

  const handlePrevClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(sprites.length - 1);
      selectedSpriteByIndex(sprites[sprites.length - 1]);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
      selectedSpriteByIndex(sprites[currentImageIndex - 1]);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex === sprites.length - 1) {
      setCurrentImageIndex(0);
      selectedSpriteByIndex(sprites[0]);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
      selectedSpriteByIndex(sprites[currentImageIndex + 1]);
    }
  };

  return (
    <div className="relative w-64 h-64">
      <Image
        src={sprites[currentImageIndex]}
        width={96}
        height={96}
        alt="sprite"
        className="object-cover w-full h-full"
      />
      <div
        className="absolute top-0 left-0 mt-32 ml-10 bg-red-500 rounded-full scale-75 pl-4 pr-4 pt-2 pb-2 hover:bg-red-800"
        onClick={handlePrevClick}
      >
        <i className="fas fa-chevron-left text-3xl text-white"></i>
      </div>
      <div
        className="absolute top-0 right-0 mt-32 mr-10 bg-red-500 rounded-full scale-75 pl-4 pr-4 pt-2 pb-2 hover:bg-red-800"
        onClick={handleNextClick}
      >
        <i className="fas fa-chevron-right text-3xl text-white"></i>
      </div>
    </div>
  );
};

export default SpritesCarousel;
