import { useState } from "react";

const GameBar = ({ onToggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (click) => {
    setIsOpen(click);
    onToggleMenu && onToggleMenu(click);
    soundClick();
  };
  const soundClick = () => {
    const audio = new Audio("fx/select.WAV");
    audio.volume = 0.3;
    audio.play();
  };
  return (
    <div className="absolute top-0 right-0 flex items-center justify-end h-12 bg-gray-800 px-4 rounded-bl-[8px]">
      <div
        className="flex items-center mr-4 select-none cursor-pointer"
        onClick={() => {
          toggleMenu(!isOpen);
        }}
      >
        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
          <i className="fas fa-bars text-white text-md"></i>
        </div>
        <span className="text-white ml-2 font-medium text-base">Menu</span>
      </div>
    </div>
  );
};

export default GameBar;
