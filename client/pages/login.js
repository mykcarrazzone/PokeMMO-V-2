import React, { useState } from "react";
import Link from "next/link";
import { login } from "../src/Services/Login/Login";
import Alert from "../src/components/molecules/Alert/Alert";
import { useUser } from "../src/context/userContext";
import { useRouter } from "next/router";
import { getUserById } from "../src/Services/User/GetUser";
import Cookies from "js-cookie";

const Login = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
  });

  const { type, message } = alertData;

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(formData)
      .then((res) => {
        setAlertData({
          type: res.status,
          message: res.statusText,
        });
        setUser({
          token: res.data.token,
          email: email,
          password: password,
        });
        const d = new Date();
        d.setTime(d.getTime() + 30 * 60 * 1000); // 30 minutes en millisecondes
        Cookies.set("token", res.data.token, { expires: d });
        if (!checkIfUserIsOnline()) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        switch (err && err.response && err.response.status) {
          case 401:
            setError("Email ou mot de passe incorrect");
            break;
          case 500:
            setError("Erreur serveur");
            break;
          default:
            setError("Erreur inconnue");
        }
      });
  };

  const checkIfUserIsOnline = () => {
    console.log("checkIfUserIsOnline");
    const token = Cookies.get("token");
    if (token) {
      getUserById(token).then((res) => {
        if (res.data.user.character.isOnline) {
          setError("Utilisateur déjà connecté");
          return true;
        } else {
          return true;
        }
      });
    }
  };

  return (
    <>
      {alertData.type === 401 ? <Alert type={type} message={message} /> : null}
      <div className="flex items-center justify-center h-screen bg-gray-900 select-none">
        <div className="w-full max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded shadow-md p-8"
          >
            <h2 className="text-2xl font-medium mb-6 text-center text-gray-900">
              Pokémon Login
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
            <div className="mb-6">
              <i className="fas fa-lock text-gray-600 w-6 h-6 mr-2 inline-block"></i>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full border border-gray-400 p-2 rounded-lg outline-none focus:border-red-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white rounded-lg p-2 hover:bg-red-800"
            >
              Se connecter
            </button>
            <Link href="/register">
              <label className="block mt-4 text-center text-red-500 hover:text-red-800 cursor-pointer">
                Vous n'avez pas de compte ? Enregistrez-vous
              </label>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
