import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const FullScreenPrompt = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const handleFullScreenChange = () => {
    setIsFullScreen(!isFullScreen);
    Cookies.set("fullscreen", !isFullScreen, { expires: 365 });
  };

  const handleLandscapeChange = () => {
    setIsLandscape(!isLandscape);
    Cookies.set("landscape", !isLandscape, { expires: 365 });
  };

  const handleSubmit = () => {
    Cookies.set("fullscreen-prompt", true, { expires: 365 });
    setHasConfirmed(true);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    }

    if (isLandscape) {
      screen.orientation.lock("landscape");
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const hasConfirmed = Cookies.get("fullscreen-prompt");
    setHasConfirmed(hasConfirmed);

    if (hasConfirmed && screenWidth <= 768) {
      document.documentElement.requestFullscreen();
      screen.orientation.lock("landscape");
    }
  }, []);

  return (
    <>
      {screenWidth <= 768 && !hasConfirmed && (
        <div className="fixed bottom-0 right-0 m-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-white">
              Pour une meilleure expérience, passez en mode plein écran et
              paysage
            </h3>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                  checked={isFullScreen}
                  onChange={handleFullScreenChange}
                />
                <span className="ml-2 text-white">Plein écran</span>
              </label>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                  checked={isLandscape}
                  onChange={handleLandscapeChange}
                />
                <span className="ml-2 text-white">Paysage</span>
              </label>
            </div>
            <div className="mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={handleSubmit}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenPrompt;
