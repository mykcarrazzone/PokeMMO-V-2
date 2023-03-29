import { useEffect, useState } from "react";
import ConfigPanel from "../../molecules/SettingItems/SettingItems";
const Popup = ({ isPopup }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeButton, setActiveButton] = useState("");

  const soundClick = () => {
    const audio = new Audio("fx/select.WAV");
    audio.volume = 0.3;
    audio.play();
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "escape") {
        setIsPopupOpen(!isPopupOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen]);

  useEffect(() => {
    setIsPopupOpen(isPopup);
  }, [isPopup]);

  useEffect(() => {
    // Vérifie si la largeur de la fenêtre est inférieure à 768px (taille mobile)
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Appel initial pour définir l'état mobile/non-mobile
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleFullscreen = () => {
  //   setIsFullscreen(!isFullscreen);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    soundClick();
  };

  const closePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    soundClick();
  };

  return (
    <>
      {isPopupOpen ? (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-1000 select-none ${
            isMobile ? "transform scale-100" : ""
          }`}
        >
          <div
            className="w-11/12 h-5/6 bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex"
            style={{
              maxWidth: "1900px",
              maxHeight: "1980px",
              boxShadow: "inset -1px 0px 15px 0px rgba(0,0,0,0.5)",
            }}
          >
            {isMenuOpen && (
              <div
                className="w-2/5 bg-gray-700 p-2 flex flex-col overflow-y-auto justify-around"
                style={{
                  boxShadow: " -1px 0px 25px 0px rgba(0,0,0,0.5)",
                  maxWidth: "200px",
                }}
              >
                <button
                  className={`flex items-center text-white mb-2 h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "profil" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("profil");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-user text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-user text-white text-lg"></i>
                  )}
                  {!isMobile && "Profil"}
                </button>

                <button
                  className={`flex items-center text-white mb-2 h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "inventaire" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("inventaire");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-box text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-box text-white text-lg"></i>
                  )}

                  {!isMobile && "Inventaire"}
                </button>
                <button
                  className={`flex items-center text-white mb-2 h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "pokemon" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("pokemon");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-gamepad text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-gamepad text-white text-lg"></i>
                  )}
                  {!isMobile && "Pokémon"}
                </button>
                <button
                  className={`flex items-center text-white mb-2 h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "amis" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("amis");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-users text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-users text-white text-lg"></i>
                  )}
                  {!isMobile && "Amis"}
                </button>
                <button
                  className={`flex items-center text-white mb-2 h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "message" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("message");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-envelope text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-envelope text-white text-lg"></i>
                  )}
                  {!isMobile && "Message"}
                </button>
                <button
                  className={`flex items-center text-white h-full bg-gray-800 p-8 rounded-xl hover:bg-gray-500 justify-center ${
                    activeButton === "parametres" ? "bg-gray-900" : ""
                  }`}
                  onClick={() => {
                    soundClick();
                    handleButtonClick("parametres");
                  }}
                >
                  {!isMobile ? (
                    <i className="fas fa-cog text-white text-lg mr-2"></i>
                  ) : (
                    <i className="fas fa-cog text-white text-lg"></i>
                  )}
                  {!isMobile && "Paramètres"}
                </button>
              </div>
            )}
            <div className="w-full flex flex-col justify-center ">
              <div className="flex flex-row w-full  h-auto">
                <div
                  className="flex w-full p-2 justify-start items-center"
                  style={{
                    color: "white",
                    backgroundColor: "rgba(1, 1, 1, 0.748)",
                  }}
                >
                  <i className="fas fa-clock text-white text-lg mr-2"></i>

                  {time}
                </div>

                <div
                  className="flex flex-row p-2 justify-end"
                  style={{
                    backgroundColor: "rgba(1, 1, 1, 0.748)",
                  }}
                >
                  {/* <button className="text-white mr-2" onClick={toggleFullscreen}>
                  <i
                    className={`fas ${
                      isFullscreen ? "fa-compress" : "fa-expand"
                    } text-lg`}
                  ></i>
                </button> */}
                  <button className="text-white" onClick={toggleMenu}>
                    <i className="fas fa-bars text-lg"></i>
                  </button>
                  <button className="text-white ml-4" onClick={closePopup}>
                    <i className="fas fa-times text-lg"></i>
                  </button>
                </div>
              </div>

              <div className="flex-grow p-4 overflow-auto">
                {/* <h2 className="text-3xl text-white font-bold mb-4">Titre</h2> */}
                {/* {activeButton === "profil" && <ProfilPanel />}
                {activeButton === "inventaire" && <InventairePanel />}
                {activeButton === "pokemon" && <PokemonPanel />}
                {activeButton === "amis" && <AmisPanel />}
                {activeButton === "message" && <MessagePanel />} */}
                {activeButton === "parametres" ? (
                  <ConfigPanel />
                ) : (
                  <>
                    <h2 className="text-3xl text-white font-bold mb-4">
                      Titre
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
