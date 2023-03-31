import React, { useState } from "react";
import SpritesCarousel from "../src/components/organisms/CarouselSprites/CarouselSprites";
import { register } from "../src/services/Register/ServicesRegister";
import { useUser } from "../src/context/userContext";
import { useRouter } from "next/router";
import Link from "next/link";
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [character, setCharacter] = useState({
    character: {
      baseTexture: "hero_01_red_m_walk",
    },
  });

  const { email, password, username } = formData;
  const { user, setUser } = useUser();

  const [error, setError] = useState(null);

  const handleSpriteSelect = (sprite) => {
    setCharacter({ character: { baseTexture: sprite } });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation de la longueur et des caractères
    const hasEnoughLetters = /^[a-zA-Z]{2,}/.test(username);
    const isUsernameValid = username.length >= 3 && hasEnoughLetters;

    if (isUsernameValid) {
      try {
        const res = await register(formData, character);
        setUser({
          token: res.data.token,
          email: email,
          password: password,
        });
        router.push("/login");
      } catch (error) {
        console.clear(); // Effacer la console
        // console.log(error);
        if (
          error.response != undefined &&
          typeof error.response.data.message === "string"
        ) {
          setError("Cet email est déjà utilisé");
        } else {
          setError(
            "Le password est trop court, il doit faire au moins 8 caractères"
          );
        }
      }
    } else {
      setError(
        "Le nom d'utilisateur doit faire au moins 3 caractères et contenir au moins 2 lettres"
      );
    }
  };

  return (
    <>
      <div className="bg-registerLogin ">
        <div className="flex items-center justify-center h-screen bg-gray-900 select-none">
          <div className="w-full max-w-sm shadow-md">
            <form
              className="bg-white rounded shadow-md p-8"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-medium mb-6 text-center text-gray-900 select-none">
                Pokémon Register
              </h2>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-4">
                  <p>{error}</p>
                </div>
              )}
              <div className="mb-4">
                <i className="fas fa-envelope text-gray-600 w-6 h-6 mr-2 inline-block"></i>
                <input
                  type="email"
                  placeholder="Adresse email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full border border-gray-400 p-2 rounded-lg outline-none focus:border-red-800"
                />
              </div>
              <div className="mb-4">
                <i className="fas fa-user text-gray-600 w-6 h-6 mr-2 inline-block"></i>
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 p-2 rounded-lg outline-none focus:border-red-800"
                />
              </div>
              <div className="mb-6">
                <i className="fas fa-lock text-gray-600 w-6 h-6 mr-2 inline-block"></i>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 p-2 rounded-lg outline-none focus:border-red-800"
                />
              </div>
              <div className="pl-8 w-full max-w-sm lg:hidden mb-4">
                <SpritesCarousel onSpriteSelect={handleSpriteSelect} />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white rounded-lg p-2 hover:bg-red-800 select-none"
              >
                S'inscrire
              </button>
              <Link href="/login">
                <label className="block mt-4 text-center text-red-500 hover:text-red-800 cursor-pointer">
                  Déjà un compte ? Connectez-vous
                </label>
              </Link>
            </form>
          </div>
          <div
            className="bg-black rounded shadow-md p-8 pl-8 h-[440px] justify-center align-middle items-center hidden lg:flex"
            style={{}}
          >
            <SpritesCarousel onSpriteSelect={handleSpriteSelect} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
