<p align="center">
    <img src="https://img.shields.io/github/v/release/Senzo13/PokeMMO-V-2?style=for-the-badge&color=brightgreen">
    <img src="https://img.shields.io/github/stars/Senzo13/PokeMMO-V-2?style=for-the-badge&color=yellow">
    <img src="https://img.shields.io/badge/made%20with-Javascript-blue?style=for-the-badge">
</p>

# Pokémon Multijoueur

<div align="center" style="text-align:center">

<img src="client/GIF_POKEMON.gif" alt="Gif du jeu"/>
 </div>

## Dernière mise à jour 💾

**Dernière mise à jour effectuée le 05/04/2023, version 0.2.60**

## Description 🔬

Ce fan-made pokémon est un projet de jeu massivement multijoueur qui permet aux joueurs d'explorer un monde virtuel inspiré de l'univers Pokémon. Les joueurs peuvent interagir entre eux en multijoueur et échanger des objets. Le jeu comporte une carte de monde ouverte, des combats contre des Pokémon sauvages et une variété de quêtes à accomplir.

Le jeu est conçu en utilisant une architecture de projet en classes sur le framework Next.js, et utilise la bibliothèque de moteur de jeu Phaser 3.55.2 et GridEngine pour la logique du jeu. Les contrôles sont simples et intuitifs, les joueurs peuvent se déplacer avec les touches Z/Q/S/D, courir avec la touche shift et monter en vélo avec la touche R. Les interactions avec les autres joueurs se font via un système de chat intégré.

## Checklist des fonctionnalités 📝

Le jeu Pokémon Multijoueur est doté des fonctionnalités suivantes :

- Système de collisions : ✔️
- Carte du monde : ✔️
- Multijoueur : ✔️
- Système de météo : ✔️
- Mode nuit : ✔️
- Classe joueur : ✔️
- Design et interface responsive : ✔️
- Sons de déplacement / collisions / musique du jeu : ✔️

Les fonctionnalités suivantes sont en cours de développement :

- Inscription et connexion : ✔️
- Choix des sprites : ✔️
- Enregistrement de la position sur la map : ✔️
- Intégration des Pokémon : ❌
- Entrée dans les maisons : ✔️
- Combat Pokémon : ❌

## Technologies 🛠

Les technologies suivantes ont été utilisées dans le développement de ce projet :

### Frontend 💻
- [Next.js](https://nextjs.org/) <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next-dot-js&logoColor=white" alt="Next.js logo">
- [Tailwind CSS](https://tailwindcss.com/) <img src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS logo">
- [GridEngine](https://github.com/Annoraaq/grid-engine) <img src="https://github.com/Annoraaq/grid-engine/raw/master/images/grid-engine-logo.png" width="70px" alt="MongoDB logo">
- [Phaser](https://phaser.io/) <img src="https://img.shields.io/badge/-Phaser-ffffff?style=flat-square&logo=phaser&logoColor=CECECE" alt="Phaser logo">
- [Jest](https://jestjs.io/) <img src="https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white" alt="Jest logo">
- [Snapshot Renderer](https://legacy.reactjs.org/docs/test-renderer.html) <img src="https://img.shields.io/badge/-Snapshot%20Renderer-FFC107?style=flat-square" alt="Snapshot Renderer badge">

### Backend 📡
- [Node.js](https://nodejs.org/en/) <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js logo">
- [Express](https://expressjs.com/) <img src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express logo">
- [Socket.io](https://socket.io/) <img src="https://img.shields.io/badge/-Socket.io-010101?style=flat-square&logo=socket-dot-io&logoColor=white" alt="Socket.io logo">
- [MongoDB](https://www.mongodb.com/) <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB logo">


## Normes de convention 📏

**Suivis de développement sur Jira Atlassian**

- Tests
- Convention Atomic Design
- Pascal case
- Snake case
- Camel case

## Contribution 🤝

<p>Pour contribuer, contactez moi via ces réseaux</p>

[Discord](https://discord.gg/m9ddhXXBpg) <img src="https://img.shields.io/badge/-Discord-7289DA?style=flat-square&logo=discord&logoColor=white" alt="Discord logo">
[LinkedIn](https://www.linkedin.com/in/lorenzo-giralt/) <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn logo">

## Comment jouer 🎮

```
1. Clonez ce dépôt sur votre machine locale.
2. Installez les dépendances en exécutant la commande `npm install`.
3. Installez MongoDb Compass, puis ensuite MongoDb Community Server et pour terminer créer une database avec la collections `games` sur 127.0.0.1.
4. Modifiez l'adresse ip du socket provider dans le context pour `localhost:PORT_DU_BACK`.
5. Modifiez le port à votre guise du server.js côté backend.
6. Démarrez le serveur en exécutant la commande `npm start`.
7. Démarrez le client en exécutant la commande `npm run dev`.
8. Ouvrez votre navigateur à l'adresse http://localhost:PORT_DU_FRONT pour jouer.
```

## Running Tests 🧪

Pour lancer les tests, utiliser cette commande

```bash
  npm run test
```

## Auteur 🧑‍💻

Ce projet a été créé par Lorenzo Giralt
