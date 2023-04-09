import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";

export const servicesGenerateRandomPokemon = (self, pokemonProperties) => {
  const [minLevel, maxLevel] = pokemonProperties[0].value
    .replace(/"/g, "")
    .split("|")
    .map((level) => parseInt(level));

  const possiblePokemons = [
    pokemonProperties[1].value
      .replace(/"/g, "")
      .split("|")
      .map((id) => parseInt(id)), // Légendaires
    pokemonProperties[2].value
      .replace(/"/g, "")
      .split("|")
      .map((id) => parseInt(id)), // Normaux
    pokemonProperties[3].value
      .replace(/"/g, "")
      .split("|")
      .map((id) => parseInt(id)), // Rares
  ];

  let pokemonType;
  const randomNumber = Phaser.Math.Between(
    1,
    GAMES_INFOS.pokemonNormalyEncounterRate +
      GAMES_INFOS.pokemonRareEncounterRate
  );

  const randomNumberLegendary = Phaser.Math.Between(
    1,
    GAMES_INFOS.pokemonLegendaryEncounterRate *
      GAMES_INFOS.legendary_probability_factor
  );

  if (randomNumberLegendary === 1) {
    pokemonType = 0; // Type légendaire
  } else if (self.scene.isDay) {
    pokemonType = 1; // Type normal
  } else {
    pokemonType =
      randomNumber <=
      GAMES_INFOS.pokemonRareEncounterRate / GAMES_INFOS.rare_probability_factor
        ? 2
        : 1; // Types normaux et rares
  }

  const pokemonEncounterRate = GAMES_INFOS.pokemonNormalyEncounterRate;
  const possiblePokemonIds = possiblePokemons[pokemonType];
  const randomPokemonId = Phaser.Utils.Array.GetRandom(possiblePokemonIds);
  const randomPokemon = self.scene.pokedexData.find(
    (pokemon) => pokemon.id === randomPokemonId
  );

  const randomLevel = Phaser.Math.Between(
    pokemonType === 0 ? minLevel * 3 : minLevel, // Augmenter le niveau pour les Pokémon légendaires
    pokemonType === 2 ? Math.min(maxLevel * 2.5, 100) : Math.min(maxLevel, 100) // Augmenter le niveau pour les Pokémon rares
  );

  const pokemonChance = Phaser.Math.Between(
    1,
    pokemonType === 0
      ? GAMES_INFOS.pokemonLegendaryEncounterRate
      : pokemonEncounterRate
  );

  if (pokemonChance === pokemonEncounterRate) {
    return `${randomPokemon?.name?.french} de type ${pokemonType} sauvage apparaît\nNiveau ${randomLevel}`;
  }
};
