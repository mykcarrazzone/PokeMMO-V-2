import React, { useState, useContext } from "react";
import { SocketContext } from "../../../context/ContextSocket";

const Gamepad = () => {
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRightBtn] = useState(false);
  const [upBtn, setUpBtn] = useState(false);
  const [downBtn, setDownBtn] = useState(false);
  const [stopBtn, setStopBtn] = useState(false);
  const socket = useContext(SocketContext);
  const [isCross, setIsCross] = useState(false);
  const [isRun, setIsRun] = useState(false);

  const handleLeftBtn = () => {
    if (socket) {
      socket.emit("padLeft", `${leftBtn ? false : true}`);
      setLeftBtn(!leftBtn);
    }
  };

  const handleRightBtn = () => {
    if (socket) {
      socket.emit("padRight", `${rightBtn ? false : true}`);
      setRightBtn(!rightBtn);
    }
  };

  const handleUpBtn = () => {
    if (socket) {
      socket.emit("padUp", `${upBtn ? false : true}`);
      setUpBtn(!upBtn);
    }
  };

  const handleDownBtn = () => {
    if (socket) {
      socket.emit("padDown", `${downBtn ? false : true}`);
      setDownBtn(!downBtn);
    }
  };

  const handleStopBtn = () => {
    if (socket) {
      socket.emit("padStop", true);
      setStopBtn(!true);
    }
  };

  const handleRunBtn = () => {
    if (socket) {
      setIsRun(!isRun);
      isRun ? socket.emit("padRunOff", true) : socket.emit("padRunOn", true);
    }
  };

  const handleBycleBtn = () => {
    if (socket) {
      setIsCross(!isCross);
      isCross
        ? socket.emit("padBycleOff", true)
        : socket.emit("padBycleOn", true);
    }
  };

  return (
    <>
      <div className="fixed bottom-14 left-34">
        <div className="flex flex-col">
          <div className="fixed bottom-48 left-26">
            <div className="w-12 h-12 bg-gray-800 rounded-full ml-[4px] scale-75">
              <button
                className="mr-6 w-full h-full justify-center items-center bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-0 px-0 hover:border-transparent rounded"
                onClick={handleUpBtn}
              >
                <i className="fas fa-arrow-up items-center justify-center"></i>
              </button>
            </div>
          </div>

          <div className="fixed bottom-32 left-26">
            <div className="bg-gray-800 rounded-full">
              <button
                className=" w-50  justify-center items-center bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
                onClick={handleStopBtn}
              >
                <i className="fas fa-stop"></i>
              </button>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="fixed bottom-32 left-8">
              <div className="w-12 h-12 bg-gray-800 rounded-full scale-75">
                <button
                  className="mr-32 w-full bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-2 px-0 hover:border-transparent rounded"
                  onClick={handleLeftBtn}
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="fixed bottom-32 left-36">
              <div className="w-12 h-12 bg-gray-800 rounded-full ml-4 scale-75">
                <button
                  className="w-full h-full bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-0 px-0 hover:border-transparent rounded"
                  onClick={handleRightBtn}
                >
                  <i className="fas fa-arrow-right m-auto text-center"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="fixed bottom-16 left-26">
            <div className="w-12 h-12 bg-gray-800 rounded-full ml-[3px] mt-2 scale-75">
              <button
                className="mr-8 w-full h-full bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-0 px-0 hover:border-transparent rounded"
                onClick={handleDownBtn}
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 right-8">
        <div className="w-12 h-12 bg-gray-800 rounded-full ml-[3px] mt-2 scale-75">
          <button
            className="mr-8 w-full h-full bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-0 px-0 hover:border-transparent rounded"
            onClick={handleBycleBtn}
          >
            <i className="fas fa-bicycle"></i>
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 right-14">
        <div className="w-12 h-12 bg-gray-800 rounded-full ml-[3px] mt-2 scale-75">
          <button
            className="mr-8 w-full h-full bg-transparent hover:bg-green-500 rounded-full text-green-700 font-semibold hover:text-white py-0 px-0 hover:border-transparent rounded"
            onClick={handleRunBtn}
          >
            <i className="fas fa-running"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Gamepad;
