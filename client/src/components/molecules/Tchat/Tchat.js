import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { SocketContext } from "../../../context/ContextSocket";

const Tchat = ({ isClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messageBoxRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);
  const socket = useContext(SocketContext);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPlayerInfo, setCurrentPlayerInfo] = useState({
    _id: null,
    nickName: null,
    chatColor: null,
    role: null,
  });
  const colors = [
    "#ffd670",
    "#ff9770",
    "#00bbf9",
    "#8ac926",
    "#fff1d0",
    "#9b5de5",
    "#f15bb5",
    "#00f5d4",
  ];

  const getSenderColor = (sender) => {
    // use the first letter of the sender's name to determine the index of the color
    const colorIndex =
      sender && sender.length > 0 ? sender.charCodeAt(0) % colors.length : 0;
    return colors[colorIndex];
  };

  useEffect(() => {
    setIsClosed(isClose);
  }, [isClose]);

  const setToggleChat = () => {
    setIsClosed(!isClosed);
  };

  useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
        (window.innerWidth < 900 && window.innerHeight < 500)
    );
  }, []);

  useEffect(() => {
    getSenderColor("");
    // onFocus on document on click left mouse button
    document.addEventListener("mousedown", (e) => {
      if (inputRef.current && e.target !== inputRef.current) {
        inputRef.current.blur(); // blur input
      }
    });
  }, []);

  const handleInputFocus = () => {
    if (socket) {
      socket.emit("sendActive", true); // send to the client that sent the message
    }
  };

  const handleInputBlur = () => {
    if (socket) {
      socket.emit("sendActive", false); // send to the client that sent the message
    }
  };

  useEffect(() => {
    if (socket != null) {
      socket.on("localPlayerInterface", (data) => {
        setCurrentPlayerInfo(data);
      });
      socket.on("generalChatHistory", (messages) => {
        const reversedMessages = messages.reverse();
        setMessages(reversedMessages);
        // Faire défiler vers le bas
        setTimeout(() => {
          if (messageBoxRef.current != null) {
            messageBoxRef.current.scrollTop =
              messageBoxRef.current.scrollHeight;
          }
        }, 100);
      });

      socket.on("generalChatMessageReceived", (message) => {
        setMessages((messages) => [...messages, message]);
        // Faire défiler vers le bas
        setTimeout(() => {
          if (messageBoxRef.current != null) {
            messageBoxRef.current.scrollTop =
              messageBoxRef.current.scrollHeight;
          }
        }, 100);
      });
    }
  }, [socket]);

  const handleSubmit = (e) => {
    if (socket) {
      e.preventDefault();
      socket.emit("generalChatMessage", {
        from:
          currentPlayerInfo.role == "admin"
            ? `<GM>${currentPlayerInfo.nickName}`
            : currentPlayerInfo.nickName,
        message: inputValue,
      });
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
      setInputValue("");
    }
  };

  return (
    <>
      {!isClosed ? (
        <div
          className="fixed bottom-0 left-0 w-full sm:w-1/2"
          style={{
            maxWidth: "540px",
          }}
        >
          <div
            className="flex w-full h-10 items-center flex justify-center bg-[#2c3440e3] rounded-tr-[8px]"
            style={{
              boxShadow: "inset -18px -18px 25px 0px rgba(0,0,0,0.5)",
              borderBottom: "1px solid rgba(0,0,0,0.6)",
            }}
          >
            <div
              className="text-white w-full font-bold text-xl  select-none items-center flex justify-center"
              style={{
                textShadow: "inset -18px -18px 25px 0px rgba(0,0,0,0.5)",
              }}
            >
              Chat général
            </div>
            <div>
              <i
                className="fas fa-times text-lg text-white mr-4 select-none cursor-pointer"
                onClick={() => setToggleChat()}
              ></i>
            </div>
          </div>

          <div
            ref={messageBoxRef}
            className="h-64 text-white overflow-y-auto"
            style={{
              backgroundColor: "#1f2937d2",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ml-1 mb-2 text-[${getSenderColor(message.from)}]`}
              >
                <span
                  className="font-bold"
                  style={{
                    color: message.from.includes("<GM>")
                      ? "yellow"
                      : message.from === "System"
                      ? "#dd1c1a"
                      : getSenderColor(message.from),
                    backgroundColor: message.from.includes("<GM>")
                      ? "black"
                      : message.from === "System"
                      ? "black"
                      : "transparent",
                  }}
                >
                  {message.from} :{" "}
                </span>
                <span
                  className="text-white"
                  style={{
                    backgroundColor: message.from.includes("<GM>")
                      ? "black"
                      : message.from === "System"
                      ? "black"
                      : "transparent",
                    padding: "0 4px",
                  }}
                >
                  {message.message}
                </span>
              </div>
            ))}

            {/* Zone de texte pour afficher les messages du chat */}
          </div>
          <form
            className="flex p-4 bg-[#2c3440dc]"
            onSubmit={handleSubmit}
            style={{
              boxShadow: "inset -18px -18px 25px 0px rgba(0,0,0,0.5)",
            }}
          >
            {/* Champ de saisie pour permettre aux joueurs de saisir de nouveaux messages */}
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-gray-200 rounded-lg px-4 py-2"
              placeholder="Saisissez votre message ici"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button
              type="submit"
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Envoyer
            </button>
          </form>
        </div>
      ) : isMobile ? (
        <i
          className="fas fa-comment-dots text-white mb-24 ml-12 transform scale-100 select-none cursor-pointer fixed top-14"
          onClick={() => setToggleChat()}
        />
      ) : (
        <i
          className="fas fa-comment-dots text-white mt-[-50px] mb-24 ml-12 transform scale-200 select-none cursor-pointer fixed"
          onClick={() => setToggleChat()}
        />
      )}
    </>
  );
};

export default Tchat;
