import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import SocketProvider from "../src/context/ContextSocket";
import { ChatActiveProvider } from "../src/context/ContextChatActive";
import UserProvider from "../src/context/ContextUser";
import CharacterProvider from "../src/context/ContextCharacter";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const isDevelopment = process.env.NEXT_PUBLIC_MODE_DEV;
  if (isDevelopment == "false") {
    console.log = function () {};
    console.info = function () {};
    console.error = function () {};
    console.warn = function () {};
    console.debug = function () {};
    console.trace = function () {};
    console.assert = function () {};
    console.dir = function () {};
    console.dirxml = function () {};
    console.group = function () {};
    console.groupCollapsed = function () {};
    console.groupEnd = function () {};
    console.time = function () {};
  }

  useEffect(() => {
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  }, []);

  return (
    <CharacterProvider>
      <UserProvider>
        <ChatActiveProvider>
          <SocketProvider>
            <Head>
              <title>PokeMMO</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0, minimal-ui, viewport-fit=cover, orientation=landscape"
              />
              <meta
                name="description"
                content="Meilleur développeur du monde à conçu ce jeu incroyable"
              />
            </Head>
            <div className="overflow-hidden">
              <Component {...pageProps} />
            </div>
          </SocketProvider>
        </ChatActiveProvider>
      </UserProvider>
    </CharacterProvider>
  );
}

MyApp.defaultProps = {
  ssr: false,
};

export default MyApp;
