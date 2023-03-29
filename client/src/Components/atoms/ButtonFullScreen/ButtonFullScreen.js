import React, { useState } from "react";

function FullScreenButton() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        if (window.innerWidth < 764) screen.orientation.lock("landscape");
      });
      setIsFullScreen(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <button
      className="bg-[#0000001a] hover:bg-[#00000049] p-8 absolute top-14 right-4 flex items-center justify-end h-12 rounded-[8px]"
      onClick={handleFullScreen}
    >
      {isFullScreen ? (
        <i className="fas fa-compress text-white scale-150"></i>
      ) : (
        <i className="fas fa-expand text-white scale-150"></i>
      )}
    </button>
  );
}

export default FullScreenButton;
