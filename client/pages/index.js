import React, { useEffect, useState, useContext } from "react";
import { useUser } from "../src/context/ContextUser";
import { useCharacter } from "../src/context/ContextCharacter";
import { getUserById } from "../src/services/User/ServicesGetUser";
import { useRouter } from "next/router";
import { SocketContext } from "../src/context/ContextSocket";
import Launcher from "../src/components/organisms/Launcher/Launcher";
import Cookies from "js-cookie";

const Home = () => {
  const { user, setUser } = useUser();
  const { character, setCharacter } = useCharacter();
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      window.innerWidth < 768 ||
      (window.innerWidth < 900 && window.innerHeight < 500)
    ) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!socket) return;
    const token = Cookies.get("token");
    if (token) {
      getUserById(token)
        .then((res) => {
          if (res.data.user.character.isOnline) {
            router.push("/login");
          } else {
            setUser({
              token: token,
              email: res.data.email,
              password: res.data.password,
            });
            setCharacter({
              _id: res.data.user.character._id,
              username: res.data.user.character.username,
            });
            setUserData(res.data.user);
            Cookies.set("_id", res.data.user.character._id);
            Cookies.set("username", res.data.user.character.username);
            console.clear(); // Effacer la console
          }
        })
        .catch((err) => {
          // console.clear(); // Effacer la console
          // console.log(err);
          Cookies.remove("token");
          Cookies.remove("_id");
          Cookies.remove("username");
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, [socket]);

  return (
    <>
      {!isMobile ? (
        <>
          {Object.keys(userData).length > 0 && socket && (
            <Launcher
              userData={{
                user: userData,
                socket: socket,
              }}
            />
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-center">
            Ce jeu n'est pas disponible sur mobile
          </h1>
          <h2 className="text-2xl font-bold text-center">
            Veuillez utiliser un ordinateur
          </h2>
        </div>
      )}
    </>
  );
};

export default Home;
