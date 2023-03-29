import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import GameBar from "../../molecules/GameBar/GameBar";
import OnlineBar from "../../molecules/OnlineBar/OnlineBar";
import LatencyPlayer from "../../molecules/LatencyBar/LatencyBar";
import FullScreenButton from "../../atoms/ButtonFullScreen/ButtonFullScreen";
import Gamepad from "../../molecules/GamePad/GamePad";
import IsNight from "../../molecules/DayNightIcon/DayNightIcon";
import React from "react";
// import FullScreenPrompt from "./fullScreenPrompt";
const Interface = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  //GAME BAR TOGGLE TO OPEN POPUP
  const handleToggleMenu = (isOpen) => {
    console.log(`Menu is ${isOpen ? "open" : "closed"}`);
    setIsOpen(isOpen);
  };

  useEffect(() => {
    setIsMobileView(
      window.innerWidth < 768 ||
        (window.innerWidth < 900 && window.innerHeight < 500)
    );
  }, []);

  return (
    <>
      <div className="absolute top-0 right-0 z-10 w-1/2 sm:w-auto">
        <GameBar onToggleMenu={handleToggleMenu} />
      </div>

      {isMobileView ? (
        <div className="absolute top-2 left-56 scale-100 z-10 w-1/2 sm:w-auto">
          <IsNight />
        </div>
      ) : (
        <div className="absolute top-1 left-56 scale-150 z-10 w-1/2 sm:w-auto">
          <IsNight />
        </div>
      )}

      {isMobileView ? (
        <div className="absolute bottom-0 left-24 z-10 w-1/2 sm:w-auto">
          <Gamepad />
        </div>
      ) : null}

      {/* <div className="absolute top-0 right-0 z-10 w-1/2 sm:w-auto">
        <FullScreenPrompt />
      </div>
       */}

      <div className="absolute top-0 right-0 z-10 w-1/2 sm:w-auto">
        <FullScreenButton />
      </div>

      <div className="absolute top-0 left-0 z-10 w-1/2 sm:w-auto">
        <OnlineBar />
      </div>

      {!isMobile ? (
        <div className="absolute top-0 left-0 z-10 w-1/2 sm:w-auto">
          <LatencyPlayer />
        </div>
      ) : null}

      <div
        className="absolute top-0 left-0 w-1/2 sm:w-auto"
        style={{
          zIndex: 40099,
        }}
      >
        <Popup isPopup={isOpen} />
      </div>
    </>
  );
};

export default Interface;
