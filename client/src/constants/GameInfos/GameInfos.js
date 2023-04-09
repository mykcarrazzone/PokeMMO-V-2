import CLIENT_INFO from "../../../package.json";

export const GAMES_INFOS = {
  //*************** GAME INFOS 1.12280701794*****************//
  gameScale: 4,
  spriteScale: 1.12280701794,
  tileSize: 16,
  rateXp: 1.5,
  rateGold: 1.5,
  rateDrop: 1.5,
  rateStats: 1.5,
  nightOpacity: 0.84,
  pokemonNormalyEncounterRate:6, // 1 chance sur 4 de spawn
  pokemonLegendaryEncounterRate: 100, // 1 chance sur 100 de spawn
  pokemonRareEncounterRate: 45, // 1 chance sur 15 de spawn
  rare_probability_factor: 5,
  legendary_probability_factor: 45,
};
console.clear(); // Effacer la console

console.log(
  "%c          ██████\n" +
    "%c      ██████████████\n" +
    "%c    ██████████████████\n" +
    "%c  ██████████████████████\n" +
    "%c  ██████████████████████\n" +
    "%c    ██████████████████\n" +
    "%c      ██████████████\n" +
    "%c          ██████",
  "color: red;",
  "color: red;",
  "color: red;",
  "color: black;",
  "color: gray;",
  "color: gray;",
  "color: gray;",
  "color: gray;"
);
console.log(
  "\n%cGames Infos:\nGame Version: %s\nGame Creator: %s\nGame Scale: %d\nGame Sprite Scale: %f\nGame Tile Size: %d\nGame Rate XP: %f\nGame Rate Gold: %f\nGame Rate Drop: %f\nGame Rate Stats: %f" +
    "\nGame Night Opacity: %f" + "\nGame Pokemon Normally Encounter Rate: %d" + "\nGame Pokemon Legendary Encounter Rate: %d" + "\nGame Pokemon Rare Encounter Rate: %d" + "\nGame Pokemon Rare Probability Factor: %d" + "\nGame Pokemon Legendary Probability Factor: %d",
  "background:#000;color:#fff;padding:10px;font-weight:bold",
  CLIENT_INFO.version,
  CLIENT_INFO.author,
  GAMES_INFOS.gameScale,
  GAMES_INFOS.spriteScale,
  GAMES_INFOS.tileSize,
  GAMES_INFOS.rateXp,
  GAMES_INFOS.rateGold,
  GAMES_INFOS.rateDrop,
  GAMES_INFOS.rateStats,
  GAMES_INFOS.nightOpacity,
  GAMES_INFOS.pokemonNormalyEncounterRate,
  GAMES_INFOS.pokemonLegendaryEncounterRate,
  GAMES_INFOS.pokemonRareEncounterRate,
  GAMES_INFOS.rare_probability_factor,
  GAMES_INFOS.legendary_probability_factor
);
console.log("\n");
console.log(
  "%c          ██████\n" +
    "%c      ██████████████\n" +
    "%c    ██████████████████\n" +
    "%c  ██████████████████████\n" +
    "%c  ██████████████████████\n" +
    "%c    ██████████████████\n" +
    "%c      ██████████████\n" +
    "%c          ██████",
  "color: red;",
  "color: red;",
  "color: red;",
  "color: black;",
  "color: gray;",
  "color: gray;",
  "color: gray;",
  "color: gray;",
);
