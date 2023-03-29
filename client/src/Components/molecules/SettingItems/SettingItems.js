import { useState } from "react";

const ConfigPanel = () => {
  const [volume, setVolume] = useState(50);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [category, setCategory] = useState("audio");

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleMusicToggle = () => {
    setMusicEnabled(!musicEnabled);
  };

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleCategoryChange = (categoryName) => {
    setCategory(categoryName);
  };

  const renderCategoryContent = () => {
    switch (category) {
      case "audio":
        return (
          <div className="flex flex-col w-auto">
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-lg font-bold mr-4 self-center">
                Volume:
              </span>
              <div className="md:w-full flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            <div className="flex flex-row items-center mt-4">
              <span className="text-lg font-bold mr-4">Musique :</span>
              <button
                className={`w-8 h-8 rounded-full ${
                  musicEnabled ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={handleMusicToggle}
              >
                <i
                  className={`fas ${
                    musicEnabled ? "fa-volume-up" : "fa-volume-mute"
                  } text-white text-lg`}
                ></i>
              </button>
            </div>
            <div className="flex flex-row items-center mt-4">
              <span className="text-lg font-bold mr-4">Sons :</span>
              <button
                className={`w-8 h-8 rounded-full ${
                  soundEnabled ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={handleSoundToggle}
              >
                <i
                  className={`fas ${
                    soundEnabled ? "fa-volume-up" : "fa-volume-mute"
                  } text-white text-lg`}
                ></i>
              </button>
            </div>
          </div>
        );
      case "graphics":
        return (
          <div className="flex flex-col text-white w-auto">
            <p className="text-lg font-bold mb-2 m-auto">Résolution :</p>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="low"
                  name="resolution"
                  value="low"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="low" className="text-lg font-bold">
                  Basse
                </label>
              </div>
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="medium"
                  name="resolution"
                  value="medium"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="medium" className="text-lg font-bold">
                  Moyenne
                </label>
              </div>
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="high"
                  name="resolution"
                  value="high"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="high" className="text-lg font-bold">
                  Haute
                </label>
              </div>
            </div>
            <p className="text-lg font-bold m-auto mt-4 mb-2">Qualité :</p>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="quality-low"
                  name="quality"
                  value="low"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="quality-low" className="text-lg font-bold">
                  Basse
                </label>
              </div>
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="quality-medium"
                  name="quality"
                  value="medium"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="quality-medium" className="text-lg font-bold">
                  Moyenne
                </label>
              </div>
              <div className="flex items-center mr-2 mb-2">
                <input
                  type="radio"
                  id="quality-high"
                  name="quality"
                  value="high"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="quality-high" className="text-lg font-bold">
                  Haute
                </label>
              </div>
            </div>
            <p className="text-lg font-bold m-auto mt-4 mb-2">
              Anti-aliasing :
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                <input
                  type="radio"
                  id="aliasing-off"
                  name="aliasing"
                  value="off"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="aliasing-off" className="text-lg font-bold">
                  Désactivé
                </label>
              </div>
              <div className="flex items-center sm:mr-4">
                <input
                  type="radio"
                  id="aliasing-on"
                  name="aliasing"
                  value="on"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="aliasing-on" className="text-lg font-bold">
                  Activé
                </label>
              </div>
            </div>
            <p className="text-lg font-bold m-auto mt-4 mb-2">Vsync :</p>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                <input
                  type="radio"
                  id="vsync-off"
                  name="vsync"
                  value="off"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="vsync-off" className="text-lg font-bold">
                  Désactivé
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="vsync-on"
                  name="vsync"
                  value="on"
                  className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none mr-2"
                />
                <label htmlFor="vsync-on" className="text-lg font-bold">
                  Activé
                </label>
              </div>
            </div>
          </div>
        );
      case "controls":
        return (
          <div className="flex flex-col text-white">
            <p className="text-lg font-bold mb-2">Sensibilité :</p>
            <div className="flex flex-row items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full appearance-none h-4 bg-gray-300 rounded-full mt-1 mr-4 overflow-hidden"
              />
              <span className="text-lg font-bold">{volume}</span>
            </div>
            <p className="text-lg font-bold mt-4 mb-2">
              Réassigner les touches :
            </p>
            <div className="flex flex-col items-center">
              <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-700">
                Configurer
              </button>
            </div>
          </div>
        );
      case "language":
        return (
          <div className="flex flex-col p-4 rounded-lg ">
            <p className="text-lg font-bold mb-2 text-white">Langue :</p>
            <div className="flex flex-row items-center">
              <select className="text-lg font-bold p-2 bg-gray-600 text-white rounded-md border border-gray-500">
                <option value="fr" className="text-white">
                  Français
                </option>
                <option value="en" className="text-white">
                  Anglais
                </option>
                <option value="es" className="text-white">
                  Espagnol
                </option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-auto h-full flex flex-col p-4 text-white overflow-auto">
      <div className="flex items-center justify-center text-3xl font-bold mb-8">
        <i className="fas fa-cogs mr-4"></i>
        Paramètres
      </div>
      <div className="flex flex-col w-full items-center mb-4">
        <div className="flex flex-col w-full items-center justify-center  lg:flex-row sm:justify-center">
          <button
            className={`text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 ${
              category === "audio" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleCategoryChange("audio")}
          >
            Audio
          </button>
          <button
            className={`text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 ${
              category === "graphics" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleCategoryChange("graphics")}
          >
            Graphismes
          </button>
          <button
            className={`text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 ${
              category === "controls" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleCategoryChange("controls")}
          >
            Contrôles
          </button>
          <button
            className={`text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 ${
              category === "language" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleCategoryChange("language")}
          >
            Langue
          </button>
        </div>
        <div className="flex flex-col w-full items-center mt-12">
          {renderCategoryContent()}
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
