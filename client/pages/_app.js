import "../styles/globals.css";
import "../global.css";
import Head from "next/head";
import SocketProvider from "../context/socketProvider";
import { ChatActiveProvider } from "../context/chatActiveProvider";
import UserProvider from "../context/userContext";
import CharacterProvider from "../context/characterContext";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
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
              <title>PokéLorenzo</title>
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
