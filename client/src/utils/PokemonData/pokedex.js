export const pokedexData = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Seed Pokémon",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    evolution: {
      next: [["2", "Level 16"]],
    },
    profile: {
      height: "0.7 m",
      weight: "6.9 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Seed Pokémon",
    description:
      "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    evolution: {
      prev: ["1", "Level 16"],
      next: [["3", "Level 32"]],
    },
    profile: {
      height: "1 m",
      weight: "13 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Seed Pokémon",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    evolution: {
      prev: ["2", "Level 32"],
    },
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    },
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche",
    },
    type: ["Feu"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Lizard Pokémon",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    evolution: {
      next: [["5", "Level 16"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
    },
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel",
    },
    type: ["Feu"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Flame Pokémon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    evolution: {
      prev: ["4", "Level 16"],
      next: [["6", "Level 36"]],
    },
    profile: {
      height: "1.1 m",
      weight: "19 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
    },
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu",
    },
    type: ["Feu", "Vol"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Flame Pokémon",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes feu of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    evolution: {
      prev: ["5", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "90.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
    },
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
      japanese: "ゼニガメ",
      chinese: "杰尼龟",
      french: "Carapuce",
    },
    type: ["Eau"],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      Speed: 43,
    },
    species: "Tiny Turtle Pokémon",
    description:
      "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in eau, enabling this Pokémon to swim at high speeds.",
    evolution: {
      next: [["8", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/007.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
    },
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
      japanese: "カメール",
      chinese: "卡咪龟",
      french: "Carabaffe",
    },
    type: ["Eau"],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 58,
    },
    species: "Turtle Pokémon",
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
    evolution: {
      prev: ["7", "Level 16"],
      next: [["9", "Level 36"]],
    },
    profile: {
      height: "1 m",
      weight: "22.5 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/008.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/008.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
    },
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
      japanese: "カメックス",
      chinese: "水箭龟",
      french: "Tortank",
    },
    type: ["Eau"],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 78,
    },
    species: "Shellfish Pokémon",
    description:
      "Blastoise has eau spouts that protrude from its shell. The eau spouts are very accurate. They can shoot bullets of eau with enough accuracy to strike empty cans from a distance of over 160 feet.",
    evolution: {
      prev: ["8", "Level 36"],
    },
    profile: {
      height: "1.6 m",
      weight: "85.5 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/009.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/009.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
    },
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
      japanese: "キャタピー",
      chinese: "绿毛虫",
      french: "Chenipan",
    },
    type: ["Insecte"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 45,
    },
    species: "Worm Pokémon",
    description:
      "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
    evolution: {
      next: [["11", "Level 7"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.9 kg",
      egg: ["Insecte"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/010.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/010.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
    },
  },
  {
    id: 11,
    name: {
      english: "Metapod",
      japanese: "トランセル",
      chinese: "铁甲蛹",
      french: "Chrysacier",
    },
    type: ["Insecte"],
    base: {
      HP: 50,
      Attack: 20,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 30,
    },
    species: "Cocoon Pokémon",
    description:
      "Its hard shell doesn’t crack a bit even if Pikipek pecks at it, but it will tip over, spilling out its insides.",
    evolution: {
      prev: ["10", "Level 7"],
      next: [["12", "Level 10"]],
    },
    profile: {
      height: "0.7 m",
      weight: "9.9 kg",
      egg: ["Insecte"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/011.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/011.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
    },
  },
  {
    id: 12,
    name: {
      english: "Butterfree",
      japanese: "バタフリー",
      chinese: "巴大蝶",
      french: "Papilusion",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 70,
    },
    species: "Butterfly Pokémon",
    description:
      "Nectar from pretty flowers is its favorite food. In fields of flowers, it has heated battles with Cutiefly for territory.",
    evolution: {
      prev: ["11", "Level 10"],
    },
    profile: {
      height: "1.1 m",
      weight: "32 kg",
      egg: ["Insecte"],
      ability: [
        ["Compound Eyes", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/012.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/012.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
    },
  },
  {
    id: 13,
    name: {
      english: "Weedle",
      japanese: "ビードル",
      chinese: "独角虫",
      french: "Aspicot",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 50,
    },
    species: "Hairy Insecte Pokémon",
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    evolution: {
      next: [["14", "Level 7"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.2 kg",
      egg: ["Insecte"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/013.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/013.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
    },
  },
  {
    id: 14,
    name: {
      english: "Kakuna",
      japanese: "コクーン",
      chinese: "铁壳蛹",
      french: "Coconfort",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 45,
      Attack: 25,
      Defense: 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 35,
    },
    species: "Cocoon Pokémon",
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    evolution: {
      prev: ["13", "Level 7"],
      next: [["15", "Level 10"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10 kg",
      egg: ["Insecte"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/014.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/014.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
    },
  },
  {
    id: 15,
    name: {
      english: "Beedrill",
      japanese: "スピアー",
      chinese: "大针蜂",
      french: "Dardargnan",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      Speed: 75,
    },
    species: "Poison Bee Pokémon",
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    evolution: {
      prev: ["14", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/015.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/015.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
    },
  },
  {
    id: 16,
    name: {
      english: "Pidgey",
      japanese: "ポッポ",
      chinese: "波波",
      french: "Roucool",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 56,
    },
    species: "Tiny Bird Pokémon",
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    evolution: {
      next: [["17", "Level 18"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.8 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/016.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/016.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
    },
  },
  {
    id: 17,
    name: {
      english: "Pidgeotto",
      japanese: "ピジョン",
      chinese: "比比鸟",
      french: "Roucoups",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 63,
      Attack: 60,
      Defense: 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 71,
    },
    species: "Bird Pokémon",
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    evolution: {
      prev: ["16", "Level 18"],
      next: [["18", "Level 36"]],
    },
    profile: {
      height: "1.1 m",
      weight: "30 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/017.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/017.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
    },
  },
  {
    id: 18,
    name: {
      english: "Pidgeot",
      japanese: "ピジョット",
      chinese: "大比鸟",
      french: "Roucarnage",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 83,
      Attack: 80,
      Defense: 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 101,
    },
    species: "Bird Pokémon",
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    evolution: {
      prev: ["17", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "39.5 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/018.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/018.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
    },
  },
  {
    id: 19,
    name: {
      english: "Rattata",
      japanese: "コラッタ",
      chinese: "小拉达",
      french: "Rattata",
    },
    type: ["Normal"],
    base: {
      HP: 30,
      Attack: 56,
      Defense: 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      Speed: 72,
    },
    species: "Mouse Pokémon",
    description:
      "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
    evolution: {
      next: [["20", "Level 20"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Guts", "false"],
        ["Hustle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/019.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/019.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
    },
  },
  {
    id: 20,
    name: {
      english: "Raticate",
      japanese: "ラッタ",
      chinese: "拉达",
      french: "Rattatac",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 81,
      Defense: 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 97,
    },
    species: "Mouse Pokémon",
    description:
      "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
    evolution: {
      prev: ["19", "Level 20"],
    },
    profile: {
      height: "0.7 m",
      weight: "18.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Guts", "false"],
        ["Hustle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/020.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/020.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
    },
  },
  {
    id: 21,
    name: {
      english: "Spearow",
      japanese: "オニスズメ",
      chinese: "烈雀",
      french: "Piafabec",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 40,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 31,
      "Sp. Defense": 31,
      Speed: 70,
    },
    species: "Tiny Bird Pokémon",
    description:
      "Due to its short wings, it can’t fly long distances. It wanders about restlessly and pecks at insecte Pokémon.",
    evolution: {
      next: [["22", "Level 20"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/021.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/021.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
    },
  },
  {
    id: 22,
    name: {
      english: "Fearow",
      japanese: "オニドリル",
      chinese: "大嘴雀",
      french: "Rapasdepic",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 65,
      "Sp. Attack": 61,
      "Sp. Defense": 61,
      Speed: 100,
    },
    species: "Beak Pokémon",
    description:
      "In Alola, fish Pokémon are its prey. It can be seen circling above the ocean searching for food.",
    evolution: {
      prev: ["21", "Level 20"],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/022.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/022.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
    },
  },
  {
    id: 23,
    name: {
      english: "Ekans",
      japanese: "アーボ",
      chinese: "阿柏蛇",
      french: "Abo",
    },
    type: ["Poison"],
    base: {
      HP: 35,
      Attack: 60,
      Defense: 44,
      "Sp. Attack": 40,
      "Sp. Defense": 54,
      Speed: 55,
    },
    species: "Snake Pokémon",
    description:
      "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
    evolution: {
      next: [["24", "Level 22"]],
    },
    profile: {
      height: "2 m",
      weight: "6.9 kg",
      egg: ["Field", "Dragon"],
      ability: [
        ["Intimidate", "false"],
        ["Shed Skin", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/023.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/023.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
    },
  },
  {
    id: 24,
    name: {
      english: "Arbok",
      japanese: "アーボック",
      chinese: "阿柏怪",
      french: "Arbok",
    },
    type: ["Poison"],
    base: {
      HP: 60,
      Attack: 95,
      Defense: 69,
      "Sp. Attack": 65,
      "Sp. Defense": 79,
      Speed: 80,
    },
    species: "Cobra Pokémon",
    description:
      "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
    evolution: {
      prev: ["23", "Level 22"],
    },
    profile: {
      height: "3.5 m",
      weight: "65 kg",
      egg: ["Field", "Dragon"],
      ability: [
        ["Intimidate", "false"],
        ["Shed Skin", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/024.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/024.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
    },
  },
  {
    id: 25,
    name: {
      english: "Pikachu",
      japanese: "ピカチュウ",
      chinese: "皮卡丘",
      french: "Pikachu",
    },
    type: ["Electrique"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Mouse Pokémon",
    description:
      "While sleeping, it generates electriqueity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electriqueity.",
    evolution: {
      prev: ["172", "high Friendship"],
      next: [["26", "use Thunder Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/025.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/025.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
    },
  },
  {
    id: 26,
    name: {
      english: "Raichu",
      japanese: "ライチュウ",
      chinese: "雷丘",
      french: "Raichu",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 55,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 110,
    },
    species: "Mouse Pokémon",
    description:
      "Because so many Trainers like the way Pikachu looks, you don’t see this Pokémon very often.",
    evolution: {
      prev: ["25", "use Thunder Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "30 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/026.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/026.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
    },
  },
  {
    id: 27,
    name: {
      english: "Sandshrew",
      japanese: "サンド",
      chinese: "穿山鼠",
      french: "Sabelette",
    },
    type: ["Sol"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Mouse Pokémon",
    description:
      "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out.",
    evolution: {
      next: [["28", "Level 22"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Sand Rush", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/027.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/027.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
    },
  },
  {
    id: 28,
    name: {
      english: "Sandslash",
      japanese: "サンドパン",
      chinese: "穿山王",
      french: "Sablaireau",
    },
    type: ["Sol"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 110,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Mouse Pokémon",
    description:
      "Thanks to its thick claws, it’s good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep.",
    evolution: {
      prev: ["27", "Level 22"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Sand Rush", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/028.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/028.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
    },
  },
  {
    id: 29,
    name: {
      english: "Nidoran_f",
      japanese: "ニドラン♀",
      chinese: "尼多兰",
      french: "Nidoran_f",
    },
    type: ["Poison"],
    base: {
      HP: 55,
      Attack: 47,
      Defense: 52,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 41,
    },
    species: "Poison Pin Pokémon",
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    evolution: {
      next: [["30", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/029.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/029.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
    },
  },
  {
    id: 30,
    name: {
      english: "Nidorina",
      japanese: "ニドリーナ",
      chinese: "尼多娜",
      french: "Nidorina",
    },
    type: ["Poison"],
    base: {
      HP: 70,
      Attack: 62,
      Defense: 67,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 56,
    },
    species: "Poison Pin Pokémon",
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    evolution: {
      prev: ["29", "Level 16"],
      next: [["31", "use Moon Stone"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/030.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/030.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
    },
  },
  {
    id: 31,
    name: {
      english: "Nidoqueen",
      japanese: "ニドクイン",
      chinese: "尼多后",
      french: "Nidoqueen",
    },
    type: ["Poison", "Sol"],
    base: {
      HP: 90,
      Attack: 92,
      Defense: 87,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 76,
    },
    species: "Drill Pokémon",
    description:
      "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes vol with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    evolution: {
      prev: ["30", "use Moon Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/031.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/031.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/031.png",
    },
  },
  {
    id: 32,
    name: {
      english: "Nidoran_m",
      japanese: "ニドラン♂",
      chinese: "尼多朗",
      french: "Nidoran_m",
    },
    type: ["Poison"],
    base: {
      HP: 46,
      Attack: 57,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 50,
    },
    species: "Poison Pin Pokémon",
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notglace.",
    evolution: {
      next: [["33", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/032.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/032.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/032.png",
    },
  },
  {
    id: 33,
    name: {
      english: "Nidorino",
      japanese: "ニドリーノ",
      chinese: "尼多力诺",
      french: "Nidorino",
    },
    type: ["Poison"],
    base: {
      HP: 61,
      Attack: 72,
      Defense: 57,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Poison Pin Pokémon",
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    evolution: {
      prev: ["32", "Level 16"],
      next: [["34", "use Moon Stone"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/033.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/033.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/033.png",
    },
  },
  {
    id: 34,
    name: {
      english: "Nidoking",
      japanese: "ニドキング",
      chinese: "尼多王",
      french: "Nidoking",
    },
    type: ["Poison", "Sol"],
    base: {
      HP: 81,
      Attack: 102,
      Defense: 77,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 85,
    },
    species: "Drill Pokémon",
    description:
      "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    evolution: {
      prev: ["33", "use Moon Stone"],
    },
    profile: {
      height: "1.4 m",
      weight: "62 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Poison Point", "false"],
        ["Rivalry", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/034.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/034.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/034.png",
    },
  },
  {
    id: 35,
    name: {
      english: "clefairy",
      japanese: "ピッピ",
      chinese: "皮皮",
      french: "Mélofée",
    },
    type: ["Fée"],
    base: {
      HP: 70,
      Attack: 45,
      Defense: 48,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Fée Pokémon",
    description:
      "Bathed in moonlight, its wings glow faintly. Without even flapping, Clefée rises into the air, where it dances around.",
    evolution: {
      prev: ["173", "high Friendship"],
      next: [["36", "use Moon Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.5 kg",
      egg: ["Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/035.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/035.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/035.png",
    },
  },
  {
    id: 36,
    name: {
      english: "Clefable",
      japanese: "ピクシー",
      chinese: "皮可西",
      french: "Mélodelfe",
    },
    type: ["Fée"],
    base: {
      HP: 95,
      Attack: 70,
      Defense: 73,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Fée Pokémon",
    description:
      "Some scientists believe that it gazes intently at the sky on nights with a full moon because it’s homesick.",
    evolution: {
      prev: ["35", "use Moon Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "40 kg",
      egg: ["Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Unaware", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/036.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/036.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/036.png",
    },
  },
  {
    id: 37,
    name: {
      english: "Vulpix",
      japanese: "ロコン",
      chinese: "六尾",
      french: "Goupix",
    },
    type: ["Feu"],
    base: {
      HP: 38,
      Attack: 41,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      Speed: 65,
    },
    species: "Fox Pokémon",
    description:
      "It manipulates balls of feu to catch its prey. If you raise one from when it’s young, it will grow close to you like a puppy Pokémon.",
    evolution: {
      next: [["38", "use Feu Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.9 kg",
      egg: ["Field"],
      ability: [
        ["Flash Feu", "false"],
        ["Drought", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/037.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/037.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/037.png",
    },
  },
  {
    id: 38,
    name: {
      english: "Ninetales",
      japanese: "キュウコン",
      chinese: "九尾",
      french: "Feunard",
    },
    type: ["Feu"],
    base: {
      HP: 73,
      Attack: 76,
      Defense: 75,
      "Sp. Attack": 81,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Fox Pokémon",
    description:
      "The flickering flames it spews from its mouth leave its opponents hypnotized. Then, this extremely intelligent Pokémon attacks.",
    evolution: {
      prev: ["37", "use Feu Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "19.9 kg",
      egg: ["Field"],
      ability: [
        ["Flash Feu", "false"],
        ["Drought", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/038.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/038.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/038.png",
    },
  },
  {
    id: 39,
    name: {
      english: "Jigglypuff",
      japanese: "プリン",
      chinese: "胖丁",
      french: "Rondoudou",
    },
    type: ["Normal", "Fée"],
    base: {
      HP: 115,
      Attack: 45,
      Defense: 20,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      Speed: 20,
    },
    species: "Balloon Pokémon",
    description:
      "The songs they sing are totally different depending on the region they live in. Some even sound like they’re shouting!",
    evolution: {
      prev: ["174", "high Friendship"],
      next: [["40", "use Moon Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.5 kg",
      egg: ["Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/039.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/039.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/039.png",
    },
  },
  {
    id: 40,
    name: {
      english: "Wigglytuff",
      japanese: "プクリン",
      chinese: "胖可丁",
      french: "Grodoudou",
    },
    type: ["Normal", "Fée"],
    base: {
      HP: 140,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Balloon Pokémon",
    description:
      "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!",
    evolution: {
      prev: ["39", "use Moon Stone"],
    },
    profile: {
      height: "1 m",
      weight: "12 kg",
      egg: ["Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Frisk", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/040.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/040.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/040.png",
    },
  },
  {
    id: 41,
    name: {
      english: "Zubat",
      japanese: "ズバット",
      chinese: "超音蝠",
      french: "Nosferapti",
    },
    type: ["Poison", "Vol"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      Speed: 55,
    },
    species: "Bat Pokémon",
    description:
      "Their skin is so thin that they’ll be burned if sunlight hits them. When it gets cold out, they gather together to warm one another’s bodies.",
    evolution: {
      next: [["42", "Level 22"]],
    },
    profile: {
      height: "0.8 m",
      weight: "7.5 kg",
      egg: ["Vol"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/041.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/041.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/041.png",
    },
  },
  {
    id: 42,
    name: {
      english: "Golbat",
      japanese: "ゴルバット",
      chinese: "大嘴蝠",
      french: "Nosferalto",
    },
    type: ["Poison", "Vol"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Bat Pokémon",
    description:
      "They can suck down over 10 ounces of blood in one go. They have been known to drink so much blood that they can no longer fly.",
    evolution: {
      prev: ["41", "Level 22"],
      next: [["169", "high Friendship"]],
    },
    profile: {
      height: "1.6 m",
      weight: "55 kg",
      egg: ["Vol"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/042.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/042.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/042.png",
    },
  },
  {
    id: 43,
    name: {
      english: "Oddish",
      japanese: "ナゾノクサ",
      chinese: "走路草",
      french: "Mystherbe",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 55,
      "Sp. Attack": 75,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Weed Pokémon",
    description:
      "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees.",
    evolution: {
      next: [["44", "Level 21"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.4 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/043.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/043.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/043.png",
    },
  },
  {
    id: 44,
    name: {
      english: "Gloom",
      japanese: "クサイハナ",
      chinese: "臭臭花",
      french: "Ortide",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 60,
      Attack: 65,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Weed Pokémon",
    description:
      "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
    evolution: {
      prev: ["43", "Level 21"],
      next: [
        ["45", "use Leaf Stone"],
        ["182", "use Sun Stone"],
      ],
    },
    profile: {
      height: "0.8 m",
      weight: "8.6 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Stench", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/044.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/044.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/044.png",
    },
  },
  {
    id: 45,
    name: {
      english: "Vileplume",
      japanese: "ラフレシア",
      chinese: "霸王花",
      french: "Rafflesia",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 85,
      "Sp. Attack": 110,
      "Sp. Defense": 90,
      Speed: 50,
    },
    species: "Flower Pokémon",
    description:
      "Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
    evolution: {
      prev: ["44", "use Leaf Stone"],
    },
    profile: {
      height: "1.2 m",
      weight: "18.6 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Effect Spore", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/045.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/045.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/045.png",
    },
  },
  {
    id: 46,
    name: {
      english: "Paras",
      japanese: "パラス",
      chinese: "派拉斯",
      french: "Paras",
    },
    type: ["Insecte", "Plante"],
    base: {
      HP: 35,
      Attack: 70,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 25,
    },
    species: "Mushroom Pokémon",
    description:
      "The mushrooms, known as tochukaso, are controlling the insecte. Even if the insecte insectes the mushrooms, they tell it to insecte off.",
    evolution: {
      next: [["47", "Level 24"]],
    },
    profile: {
      height: "0.3 m",
      weight: "5.4 kg",
      egg: ["Insecte", "Plante"],
      ability: [
        ["Effect Spore", "false"],
        ["Dry Skin", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/046.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/046.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/046.png",
    },
  },
  {
    id: 47,
    name: {
      english: "Parasect",
      japanese: "パラセクト",
      chinese: "派拉斯特",
      french: "Parasect",
    },
    type: ["Insecte", "Plante"],
    base: {
      HP: 60,
      Attack: 95,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Mushroom Pokémon",
    description:
      "Its poisonous spores are also used in traditional medicine. Apparently, spores produced in Alola are not of very good quality.",
    evolution: {
      prev: ["46", "Level 24"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Insecte", "Plante"],
      ability: [
        ["Effect Spore", "false"],
        ["Dry Skin", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/047.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/047.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/047.png",
    },
  },
  {
    id: 48,
    name: {
      english: "Venonat",
      japanese: "コンパン",
      chinese: "毛球",
      french: "Mimitoss",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 45,
    },
    species: "Insect Pokémon",
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    evolution: {
      next: [["49", "Level 31"]],
    },
    profile: {
      height: "1 m",
      weight: "30 kg",
      egg: ["Insecte"],
      ability: [
        ["Compound Eyes", "false"],
        ["Tinted Lens", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/048.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/048.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/048.png",
    },
  },
  {
    id: 49,
    name: {
      english: "Venomoth",
      japanese: "モルフォン",
      chinese: "摩鲁蛾",
      french: "Aéromite",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 70,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Poison Moth Pokémon",
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the ténèbresness.",
    evolution: {
      prev: ["48", "Level 31"],
    },
    profile: {
      height: "1.5 m",
      weight: "12.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Shield Dust", "false"],
        ["Tinted Lens", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/049.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/049.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/049.png",
    },
  },
  {
    id: 50,
    name: {
      english: "Diglett",
      japanese: "ディグダ",
      chinese: "地鼠",
      french: "Taupiqueur",
    },
    type: ["Sol"],
    base: {
      HP: 10,
      Attack: 55,
      Defense: 25,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 95,
    },
    species: "Mole Pokémon",
    description:
      "Around their crops, farmers plant the kind of tree that Diglett like to eat as a way of getting Diglett to plow the fields for them.",
    evolution: {
      next: [["51", "Level 26"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.8 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Arena Trap", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/050.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/050.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/050.png",
    },
  },
  {
    id: 51,
    name: {
      english: "Dugtrio",
      japanese: "ダグトリオ",
      chinese: "三地鼠",
      french: "Triopikeur",
    },
    type: ["Sol"],
    base: {
      HP: 35,
      Attack: 100,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 120,
    },
    species: "Mole Pokémon",
    description:
      "Dugtrio’s heads are sleek and smooth and incredibly hard. It can dig through any soil with its headbutts.",
    evolution: {
      prev: ["50", "Level 26"],
    },
    profile: {
      height: "0.7 m",
      weight: "33.3 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Arena Trap", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/051.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/051.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/051.png",
    },
  },
  {
    id: 52,
    name: {
      english: "Meowth",
      japanese: "ニャース",
      chinese: "喵喵",
      french: "Miaouss",
    },
    type: ["Normal"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 90,
    },
    species: "Scratch Cat Pokémon",
    description:
      "It loves coins, so if you give it one, you can make friends with Meowth easily. But it’s fickle, so you can’t count on that friendship lasting.",
    evolution: {
      next: [["53", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Technician", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/052.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/052.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/052.png",
    },
  },
  {
    id: 53,
    name: {
      english: "Persian",
      japanese: "ペルシアン",
      chinese: "猫老大",
      french: "Persian",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 70,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 115,
    },
    species: "Classy Cat Pokémon",
    description:
      "This Pokémon is popular with rich people. It’s also targeted by hunters who are after the jewel in its forehead.",
    evolution: {
      prev: ["52", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "32 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Technician", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/053.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/053.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/053.png",
    },
  },
  {
    id: 54,
    name: {
      english: "Psyduck",
      japanese: "コダック",
      chinese: "可达鸭",
      french: "Psykokwak",
    },
    type: ["Eau"],
    base: {
      HP: 50,
      Attack: 52,
      Defense: 48,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 55,
    },
    species: "Duck Pokémon",
    description:
      "It has been found that its brain cells are 10 times more active when Psyduck is experiencing a headache.",
    evolution: {
      next: [["55", "Level 33"]],
    },
    profile: {
      height: "0.8 m",
      weight: "19.6 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Cloud Nine", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/054.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/054.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/054.png",
    },
  },
  {
    id: 55,
    name: {
      english: "Golduck",
      japanese: "ゴルダック",
      chinese: "哥达鸭",
      french: "Akwakwak",
    },
    type: ["Eau"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 78,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      Speed: 85,
    },
    species: "Duck Pokémon",
    description:
      "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully.",
    evolution: {
      prev: ["54", "Level 33"],
    },
    profile: {
      height: "1.7 m",
      weight: "76.6 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Cloud Nine", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/055.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/055.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/055.png",
    },
  },
  {
    id: 56,
    name: {
      english: "Mankey",
      japanese: "マンキー",
      chinese: "猴怪",
      french: "Férosinge",
    },
    type: ["Combat"],
    base: {
      HP: 40,
      Attack: 80,
      Defense: 35,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Pig Monkey Pokémon",
    description:
      "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey.",
    evolution: {
      next: [["57", "Level 28"]],
    },
    profile: {
      height: "0.5 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Anger Point", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/056.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/056.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/056.png",
    },
  },
  {
    id: 57,
    name: {
      english: "Primeape",
      japanese: "オコリザル",
      chinese: "火暴猴",
      french: "Colossinge",
    },
    type: ["Combat"],
    base: {
      HP: 65,
      Attack: 105,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 95,
    },
    species: "Pig Monkey Pokémon",
    description:
      "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging.",
    evolution: {
      prev: ["56", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "32 kg",
      egg: ["Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Anger Point", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/057.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/057.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/057.png",
    },
  },
  {
    id: 58,
    name: {
      english: "Growlithe",
      japanese: "ガーディ",
      chinese: "卡蒂狗",
      french: "Caninos",
    },
    type: ["Feu"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      Speed: 60,
    },
    species: "Puppy Pokémon",
    description:
      "It has lived alongside humans since ages ago. Its bones have been found in excavations of ruins from the Stone Age.",
    evolution: {
      next: [["59", "use Feu Stone"]],
    },
    profile: {
      height: "0.7 m",
      weight: "19 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Flash Feu", "false"],
        ["Justified", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/058.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/058.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/058.png",
    },
  },
  {
    id: 59,
    name: {
      english: "Arcanine",
      japanese: "ウインディ",
      chinese: "风速狗",
      french: "Arcanin",
    },
    type: ["Feu"],
    base: {
      HP: 90,
      Attack: 110,
      Defense: 80,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 95,
    },
    species: "Legendary Pokémon",
    description:
      "There are so many old tales about them that they’re called legendary Pokémon, but there are way more of them around than you’d expect.",
    evolution: {
      prev: ["58", "use Feu Stone"],
    },
    profile: {
      height: "1.9 m",
      weight: "155 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Flash Feu", "false"],
        ["Justified", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/059.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/059.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/059.png",
    },
  },
  {
    id: 60,
    name: {
      english: "Poliwag",
      japanese: "ニョロモ",
      chinese: "蚊香蝌蚪",
      french: "Ptitard",
    },
    type: ["Eau"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 90,
    },
    species: "Tadpole Pokémon",
    description:
      "The direction of the swirl on their stomachs differs depending on where they live. Poliwag aficionados can tell them apart at a glance.",
    evolution: {
      next: [["61", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12.4 kg",
      egg: ["Eau 1"],
      ability: [
        ["Eau Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/060.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/060.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/060.png",
    },
  },
  {
    id: 61,
    name: {
      english: "Poliwhirl",
      japanese: "ニョロゾ",
      chinese: "蚊香君",
      french: "Têtarte",
    },
    type: ["Eau"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Tadpole Pokémon",
    description:
      "Its health suffers when its skin dries out, so be sure to moisturize it diligently.",
    evolution: {
      prev: ["60", "Level 25"],
      next: [
        ["62", "use Eau Stone"],
        ["186", "trade holding Kings Roche"],
      ],
    },
    profile: {
      height: "1 m",
      weight: "20 kg",
      egg: ["Eau 1"],
      ability: [
        ["Eau Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/061.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/061.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/061.png",
    },
  },
  {
    id: 62,
    name: {
      english: "Poliwrath",
      japanese: "ニョロボン",
      chinese: "蚊香泳士",
      french: "Tartard",
    },
    type: ["Eau", "Combat"],
    base: {
      HP: 90,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      Speed: 70,
    },
    species: "Tadpole Pokémon",
    description:
      "The muscles it has developed through swimming are thick and powerful. When it lands a square punch, it can turn huge boulders to dust.",
    evolution: {
      prev: ["61", "use Eau Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "54 kg",
      egg: ["Eau 1"],
      ability: [
        ["Eau Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/062.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/062.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/062.png",
    },
  },
  {
    id: 63,
    name: {
      english: "Abra",
      japanese: "ケーシィ",
      chinese: "凯西",
      french: "Abra",
    },
    type: ["Psy"],
    base: {
      HP: 25,
      Attack: 20,
      Defense: 15,
      "Sp. Attack": 105,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Psi Pokémon",
    description:
      "It can read others’ minds and will teleport away when danger approaches. You must clear your mind if you want to catch it.",
    evolution: {
      next: [["64", "Level 16"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/063.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/063.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/063.png",
    },
  },
  {
    id: 64,
    name: {
      english: "Kadabra",
      japanese: "ユンゲラー",
      chinese: "勇基拉",
      french: "Kadabra",
    },
    type: ["Psy"],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      Speed: 105,
    },
    species: "Psi Pokémon",
    description:
      "It possesses strong mental capabilities, but its psy powers are halved when it’s not holding a silver spoon.",
    evolution: {
      prev: ["63", "Level 16"],
      next: [["65", "Trade"]],
    },
    profile: {
      height: "1.3 m",
      weight: "56.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/064.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/064.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/064.png",
    },
  },
  {
    id: 65,
    name: {
      english: "Alakazam",
      japanese: "フーディン",
      chinese: "胡地",
      french: "Alakazam",
    },
    type: ["Psy"],
    base: {
      HP: 55,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 135,
      "Sp. Defense": 95,
      Speed: 120,
    },
    species: "Psi Pokémon",
    description:
      "If it trusts someone deeply, it will let them have one of its spoons. Anything you eat with that spoon is apparently delicious.",
    evolution: {
      prev: ["64", "Trade"],
    },
    profile: {
      height: "1.5 m",
      weight: "48 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/065.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/065.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/065.png",
    },
  },
  {
    id: 66,
    name: {
      english: "Machop",
      japanese: "ワンリキー",
      chinese: "腕力",
      french: "Machoc",
    },
    type: ["Combat"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Superpower Pokémon",
    description:
      "It likes food that’s highly nutritious because its instincts drive it to build muscle efficiently.",
    evolution: {
      next: [["67", "Level 28"]],
    },
    profile: {
      height: "0.8 m",
      weight: "19.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/066.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/066.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/066.png",
    },
  },
  {
    id: 67,
    name: {
      english: "Machoke",
      japanese: "ゴーリキー",
      chinese: "豪力",
      french: "Machopeur",
    },
    type: ["Combat"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Superpower Pokémon",
    description:
      "A popular motif for sculptures, its incredibly well-developed muscles have captured the imagination of many an artist.",
    evolution: {
      prev: ["66", "Level 28"],
      next: [["68", "Trade"]],
    },
    profile: {
      height: "1.5 m",
      weight: "70.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/067.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/067.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/067.png",
    },
  },
  {
    id: 68,
    name: {
      english: "Machamp",
      japanese: "カイリキー",
      chinese: "怪力",
      french: "Mackogneur",
    },
    type: ["Combat"],
    base: {
      HP: 90,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      Speed: 55,
    },
    species: "Superpower Pokémon",
    description:
      "With four arms, it can attack and defend simultaneously. It’s said to have mastered every martial art in the world.",
    evolution: {
      prev: ["67", "Trade"],
    },
    profile: {
      height: "1.6 m",
      weight: "130 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/068.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/068.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/068.png",
    },
  },
  {
    id: 69,
    name: {
      english: "Bellsprout",
      japanese: "マダツボミ",
      chinese: "喇叭芽",
      french: "Chétiflor",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Flower Pokémon",
    description:
      "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    evolution: {
      next: [["70", "Level 21"]],
    },
    profile: {
      height: "0.7 m",
      weight: "4 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/069.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/069.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/069.png",
    },
  },
  {
    id: 70,
    name: {
      english: "Weepinbell",
      japanese: "ウツドン",
      chinese: "口呆花",
      french: "Boustiflor",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 50,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Flycatcher Pokémon",
    description:
      "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the sol.",
    evolution: {
      prev: ["69", "Level 21"],
      next: [["71", "use Leaf Stone"]],
    },
    profile: {
      height: "1 m",
      weight: "6.4 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/070.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/070.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/070.png",
    },
  },
  {
    id: 71,
    name: {
      english: "Victreebel",
      japanese: "ウツボット",
      chinese: "大食花",
      french: "Empiflor",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 65,
      "Sp. Attack": 100,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Flycatcher Pokémon",
    description:
      "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    evolution: {
      prev: ["70", "use Leaf Stone"],
    },
    profile: {
      height: "1.7 m",
      weight: "15.5 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/071.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/071.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/071.png",
    },
  },
  {
    id: 72,
    name: {
      english: "Tentacool",
      japanese: "メノクラゲ",
      chinese: "玛瑙水母",
      french: "Tentacool",
    },
    type: ["Eau", "Poison"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Jellyfish Pokémon",
    description:
      "Its body is 99% eau. The remaining 1% contains the organ that makes its poison.",
    evolution: {
      next: [["73", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "45.5 kg",
      egg: ["Eau 3"],
      ability: [
        ["Clear Body", "false"],
        ["Liquid Ooze", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/072.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/072.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/072.png",
    },
  },
  {
    id: 73,
    name: {
      english: "Tentacruel",
      japanese: "ドククラゲ",
      chinese: "毒刺水母",
      french: "Tentacruel",
    },
    type: ["Eau", "Poison"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Jellyfish Pokémon",
    description:
      "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign.",
    evolution: {
      prev: ["72", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "55 kg",
      egg: ["Eau 3"],
      ability: [
        ["Clear Body", "false"],
        ["Liquid Ooze", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/073.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/073.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/073.png",
    },
  },
  {
    id: 74,
    name: {
      english: "Geodude",
      japanese: "イシツブテ",
      chinese: "小拳石",
      french: "Racaillou",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 40,
      Attack: 80,
      Defense: 100,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 20,
    },
    species: "Roche Pokémon",
    description:
      "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
    evolution: {
      next: [["75", "Level 25"]],
    },
    profile: {
      height: "0.4 m",
      weight: "20 kg",
      egg: ["Mineral"],
      ability: [
        ["Roche Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/074.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/074.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/074.png",
    },
  },
  {
    id: 75,
    name: {
      english: "Graveler",
      japanese: "ゴローン",
      chinese: "隆隆石",
      french: "Gravalanch",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 55,
      Attack: 95,
      Defense: 115,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Roche Pokémon",
    description:
      "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
    evolution: {
      prev: ["74", "Level 25"],
      next: [["76", "Trade"]],
    },
    profile: {
      height: "1 m",
      weight: "105 kg",
      egg: ["Mineral"],
      ability: [
        ["Roche Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/075.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/075.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/075.png",
    },
  },
  {
    id: 76,
    name: {
      english: "Golem",
      japanese: "ゴローニャ",
      chinese: "隆隆岩",
      french: "Grolem",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 130,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Megaton Pokémon",
    description:
      "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed.",
    evolution: {
      prev: ["75", "Trade"],
    },
    profile: {
      height: "1.4 m",
      weight: "300 kg",
      egg: ["Mineral"],
      ability: [
        ["Roche Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/076.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/076.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/076.png",
    },
  },
  {
    id: 77,
    name: {
      english: "Ponyta",
      japanese: "ポニータ",
      chinese: "小火马",
      french: "Ponyta",
    },
    type: ["Feu"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 55,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 90,
    },
    species: "Feu Horse Pokémon",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    evolution: {
      next: [["78", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "30 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Flash Feu", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/077.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/077.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/077.png",
    },
  },
  {
    id: 78,
    name: {
      english: "Rapidash",
      japanese: "ギャロップ",
      chinese: "烈焰马",
      french: "Galopa",
    },
    type: ["Feu"],
    base: {
      HP: 65,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 105,
    },
    species: "Feu Horse Pokémon",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    evolution: {
      prev: ["77", "Level 40"],
    },
    profile: {
      height: "1.7 m",
      weight: "95 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Flash Feu", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/078.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/078.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/078.png",
    },
  },
  {
    id: 79,
    name: {
      english: "Slowpoke",
      japanese: "ヤドン",
      chinese: "呆呆兽",
      french: "Ramoloss",
    },
    type: ["Eau", "Psy"],
    base: {
      HP: 90,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 15,
    },
    species: "Dopey Pokémon",
    description:
      "Although their tails, which fall off naturally, can easily be found lying around, they’re a precious ingredient for cooking.",
    evolution: {
      next: [
        ["80", "Level 37"],
        ["199", "trade holding Kings Roche"],
      ],
    },
    profile: {
      height: "1.2 m",
      weight: "36 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/079.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/079.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/079.png",
    },
  },
  {
    id: 80,
    name: {
      english: "Slowbro",
      japanese: "ヤドラン",
      chinese: "呆壳兽",
      french: "Flagadoss",
    },
    type: ["Eau", "Psy"],
    base: {
      HP: 95,
      Attack: 75,
      Defense: 110,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Hermit Crab Pokémon",
    description:
      "Shellder, in its greed to suck out more and more sweetness from Slowbro’s tail, has metamorphosed into a spiral-shaped shell.",
    evolution: {
      prev: ["79", "Level 37"],
    },
    profile: {
      height: "1.6 m",
      weight: "78.5 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/080.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/080.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/080.png",
    },
  },
  {
    id: 81,
    name: {
      english: "Magnemite",
      japanese: "コイル",
      chinese: "小磁怪",
      french: "Magnéti",
    },
    type: ["Electrique", "Acier"],
    base: {
      HP: 25,
      Attack: 35,
      Defense: 70,
      "Sp. Attack": 95,
      "Sp. Defense": 55,
      Speed: 45,
    },
    species: "Magnet Pokémon",
    description:
      "Perhaps because electriqueal lines are often buried these days, the number of Magnemite attacks on power plants has increased.",
    evolution: {
      next: [["82", "Level 30"]],
    },
    profile: {
      height: "0.3 m",
      weight: "6 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/081.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/081.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/081.png",
    },
  },
  {
    id: 82,
    name: {
      english: "Magneton",
      japanese: "レアコイル",
      chinese: "三合一磁怪",
      french: "Magnéton",
    },
    type: ["Electrique", "Acier"],
    base: {
      HP: 50,
      Attack: 60,
      Defense: 95,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Magnet Pokémon",
    description:
      "When rain clouds form, many Magneton gather in high places to wait for lightning to strike.",
    evolution: {
      prev: ["81", "Level 30"],
      next: [["462", "level up in a Magnetic Field area"]],
    },
    profile: {
      height: "1 m",
      weight: "60 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/082.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/082.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/082.png",
    },
  },
  {
    id: 83,
    name: {
      english: "Farfetchd",
      japanese: "カモネギ",
      chinese: "大葱鸭",
      french: "Canarticho",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 52,
      Attack: 90,
      Defense: 55,
      "Sp. Attack": 58,
      "Sp. Defense": 62,
      Speed: 60,
    },
    species: "Wild Duck Pokémon",
    description:
      "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    evolution: {},
    profile: {
      height: "0.8 m",
      weight: "15 kg",
      egg: ["Vol", "Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Inner Focus", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/083.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/083.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/083.png",
    },
  },
  {
    id: 84,
    name: {
      english: "Doduo",
      japanese: "ドードー",
      chinese: "嘟嘟",
      french: "Doduo",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 35,
      Attack: 85,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 75,
    },
    species: "Twin Bird Pokémon",
    description:
      "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
    evolution: {
      next: [["85", "Level 31"]],
    },
    profile: {
      height: "1.4 m",
      weight: "39.2 kg",
      egg: ["Vol"],
      ability: [
        ["Run Away", "false"],
        ["Early Bird", "false"],
        ["Tangled Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/084.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/084.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/084.png",
    },
  },
  {
    id: 85,
    name: {
      english: "Dodrio",
      japanese: "ドードリオ",
      chinese: "嘟嘟利",
      french: "Dodrio",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 60,
      Attack: 110,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 110,
    },
    species: "Triple Bird Pokémon",
    description:
      "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
    evolution: {
      prev: ["84", "Level 31"],
    },
    profile: {
      height: "1.8 m",
      weight: "85.2 kg",
      egg: ["Vol"],
      ability: [
        ["Run Away", "false"],
        ["Early Bird", "false"],
        ["Tangled Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/085.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/085.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/085.png",
    },
  },
  {
    id: 86,
    name: {
      english: "Seel",
      japanese: "パウワウ",
      chinese: "小海狮",
      french: "Otaria",
    },
    type: ["Eau"],
    base: {
      HP: 65,
      Attack: 45,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 70,
      Speed: 45,
    },
    species: "Sea Lion Pokémon",
    description:
      "Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm eaus.",
    evolution: {
      next: [["87", "Level 34"]],
    },
    profile: {
      height: "1.1 m",
      weight: "90 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Hydration", "false"],
        ["Glace Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/086.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/086.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/086.png",
    },
  },
  {
    id: 87,
    name: {
      english: "Dewgong",
      japanese: "ジュゴン",
      chinese: "白海狮",
      french: "Lamantine",
    },
    type: ["Eau", "Glace"],
    base: {
      HP: 90,
      Attack: 70,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 95,
      Speed: 70,
    },
    species: "Sea Lion Pokémon",
    description:
      "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
    evolution: {
      prev: ["86", "Level 34"],
    },
    profile: {
      height: "1.7 m",
      weight: "120 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Hydration", "false"],
        ["Glace Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/087.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/087.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/087.png",
    },
  },
  {
    id: 88,
    name: {
      english: "Grimer",
      japanese: "ベトベター",
      chinese: "臭泥",
      french: "Tadmorv",
    },
    type: ["Poison"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 25,
    },
    species: "Sludge Pokémon",
    description:
      "The wasteeau coming from factories is clean these days, so Grimer have nothing to eat. They’re said to be on the verge of extinction.",
    evolution: {
      next: [["89", "Level 38"]],
    },
    profile: {
      height: "0.9 m",
      weight: "30 kg",
      egg: ["Amorphous"],
      ability: [
        ["Stench", "false"],
        ["Sticky Hold", "false"],
        ["Poison Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/088.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/088.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/088.png",
    },
  },
  {
    id: 89,
    name: {
      english: "Muk",
      japanese: "ベトベトン",
      chinese: "臭臭泥",
      french: "Grotadmorv",
    },
    type: ["Poison"],
    base: {
      HP: 105,
      Attack: 105,
      Defense: 75,
      "Sp. Attack": 65,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Sludge Pokémon",
    description:
      "Because they scatter germs everywhere, they’ve long been targeted for extermination, leading to a steep decline in their population.",
    evolution: {
      prev: ["88", "Level 38"],
    },
    profile: {
      height: "1.2 m",
      weight: "30 kg",
      egg: ["Amorphous"],
      ability: [
        ["Stench", "false"],
        ["Sticky Hold", "false"],
        ["Poison Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/089.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/089.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/089.png",
    },
  },
  {
    id: 90,
    name: {
      english: "Shellder",
      japanese: "シェルダー",
      chinese: "大舌贝",
      french: "Kokiyas",
    },
    type: ["Eau"],
    base: {
      HP: 30,
      Attack: 65,
      Defense: 100,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      Speed: 40,
    },
    species: "Bivalve Pokémon",
    description:
      "Even when its shell is closed, its tongue still hangs out. If you give its tongue a good yank, the shock will cause Shellder to open its shell.",
    evolution: {
      next: [["91", "use Eau Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Eau 3"],
      ability: [
        ["Shell Armor", "false"],
        ["Skill Link", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/090.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/090.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/090.png",
    },
  },
  {
    id: 91,
    name: {
      english: "Cloyster",
      japanese: "パルシェン",
      chinese: "刺甲贝",
      french: "Crustabri",
    },
    type: ["Eau", "Glace"],
    base: {
      HP: 50,
      Attack: 95,
      Defense: 180,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Bivalve Pokémon",
    description:
      "Slowpoke tails are its favorite food. It has even been known to come up on land to look for Slowpoke from time to time.",
    evolution: {
      prev: ["90", "use Eau Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "132.5 kg",
      egg: ["Eau 3"],
      ability: [
        ["Shell Armor", "false"],
        ["Skill Link", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/091.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/091.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/091.png",
    },
  },
  {
    id: 92,
    name: {
      english: "Gastly",
      japanese: "ゴース",
      chinese: "鬼斯",
      french: "Fantominus",
    },
    type: ["Fantôme", "Poison"],
    base: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 100,
      "Sp. Defense": 35,
      Speed: 80,
    },
    species: "Gas Pokémon",
    description:
      "Poisonous gas comprises 95% of its body. It’s said that the remaining 5% is made up of the souls of those who died from the gas.",
    evolution: {
      next: [["93", "Level 25"]],
    },
    profile: {
      height: "1.3 m",
      weight: "0.1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/092.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/092.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/092.png",
    },
  },
  {
    id: 93,
    name: {
      english: "Haunter",
      japanese: "ゴースト",
      chinese: "鬼斯通",
      french: "Spectrum",
    },
    type: ["Fantôme", "Poison"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 115,
      "Sp. Defense": 55,
      Speed: 95,
    },
    species: "Gas Pokémon",
    description:
      "It’s dangerous to go outside alone on nights when you’re feeling sad. Haunter will catch you, and you won’t be able to go back home.",
    evolution: {
      prev: ["92", "Level 25"],
      next: [["94", "Trade"]],
    },
    profile: {
      height: "1.6 m",
      weight: "0.1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/093.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/093.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/093.png",
    },
  },
  {
    id: 94,
    name: {
      english: "Gengar",
      japanese: "ゲンガー",
      chinese: "耿鬼",
      french: "Ectoplasma",
    },
    type: ["Fantôme", "Poison"],
    base: {
      HP: 60,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 130,
      "Sp. Defense": 75,
      Speed: 110,
    },
    species: "Shadow Pokémon",
    description:
      "Even your home isn’t safe. Gengar will lurk in whatever ténèbres corner of a room it can find and wait for its chance to catch its prey.",
    evolution: {
      prev: ["93", "Trade"],
    },
    profile: {
      height: "1.5 m",
      weight: "40.5 kg",
      egg: ["Amorphous"],
      ability: [["Cursed Body", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/094.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/094.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/094.png",
    },
  },
  {
    id: 95,
    name: {
      english: "Onix",
      japanese: "イワーク",
      chinese: "大岩蛇",
      french: "Onix",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 35,
      Attack: 45,
      Defense: 160,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Roche Snake Pokémon",
    description:
      "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    evolution: {
      next: [["208", "trade holding Metal Coat"]],
    },
    profile: {
      height: "8.8 m",
      weight: "210 kg",
      egg: ["Mineral"],
      ability: [
        ["Roche Head", "false"],
        ["Sturdy", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/095.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/095.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/095.png",
    },
  },
  {
    id: 96,
    name: {
      english: "Drowzee",
      japanese: "スリープ",
      chinese: "催眠貘",
      french: "Soporifik",
    },
    type: ["Psy"],
    base: {
      HP: 60,
      Attack: 48,
      Defense: 45,
      "Sp. Attack": 43,
      "Sp. Defense": 90,
      Speed: 42,
    },
    species: "Hypnosis Pokémon",
    description:
      "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn’t particularly like eating them.",
    evolution: {
      next: [["97", "Level 26"]],
    },
    profile: {
      height: "1 m",
      weight: "32.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Insomnia", "false"],
        ["Forewarn", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/096.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/096.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/096.png",
    },
  },
  {
    id: 97,
    name: {
      english: "Hypno",
      japanese: "スリーパー",
      chinese: "引梦貘人",
      french: "Hypnomade",
    },
    type: ["Psy"],
    base: {
      HP: 85,
      Attack: 73,
      Defense: 70,
      "Sp. Attack": 73,
      "Sp. Defense": 115,
      Speed: 67,
    },
    species: "Hypnosis Pokémon",
    description:
      "There are some Hypno that assist doctors with patients who can’t sleep at night in hospitals.",
    evolution: {
      prev: ["96", "Level 26"],
    },
    profile: {
      height: "1.6 m",
      weight: "75.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Insomnia", "false"],
        ["Forewarn", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/097.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/097.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/097.png",
    },
  },
  {
    id: 98,
    name: {
      english: "Krabby",
      japanese: "クラブ",
      chinese: "大钳蟹",
      french: "Krabby",
    },
    type: ["Eau"],
    base: {
      HP: 30,
      Attack: 105,
      Defense: 90,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 50,
    },
    species: "River Crab Pokémon",
    description:
      "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    evolution: {
      next: [["99", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Eau 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/098.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/098.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/098.png",
    },
  },
  {
    id: 99,
    name: {
      english: "Kingler",
      japanese: "キングラー",
      chinese: "巨钳蟹",
      french: "Krabboss",
    },
    type: ["Eau"],
    base: {
      HP: 55,
      Attack: 130,
      Defense: 115,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Pincer Pokémon",
    description:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    evolution: {
      prev: ["98", "Level 28"],
    },
    profile: {
      height: "1.3 m",
      weight: "60 kg",
      egg: ["Eau 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/099.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/099.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/099.png",
    },
  },
  {
    id: 100,
    name: {
      english: "Voltorb",
      japanese: "ビリリダマ",
      chinese: "霹雳电球",
      french: "Voltorbe",
    },
    type: ["Electrique"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 100,
    },
    species: "Ball Pokémon",
    description:
      "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
    evolution: {
      next: [["101", "Level 30"]],
    },
    profile: {
      height: "0.5 m",
      weight: "10.4 kg",
      egg: ["Mineral"],
      ability: [
        ["Soundproof", "false"],
        ["Static", "false"],
        ["Aftermath", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/100.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/100.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/100.png",
    },
  },
  {
    id: 101,
    name: {
      english: "Electrode",
      japanese: "マルマイン",
      chinese: "顽皮雷弹",
      french: "Électrode",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 150,
    },
    species: "Ball Pokémon",
    description:
      "One of Electrode’s characteristics is its attraction to electriqueity. It is a problematical Pokémon that congregates mostly at electriqueal power plants to feed on electriqueity that has just been generated.",
    evolution: {
      prev: ["100", "Level 30"],
    },
    profile: {
      height: "1.2 m",
      weight: "66.6 kg",
      egg: ["Mineral"],
      ability: [
        ["Soundproof", "false"],
        ["Static", "false"],
        ["Aftermath", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/101.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/101.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/101.png",
    },
  },
  {
    id: 102,
    name: {
      english: "Exeggcute",
      japanese: "タマタマ",
      chinese: "蛋蛋",
      french: "Noeunoeuf",
    },
    type: ["Plante", "Psy"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      Speed: 40,
    },
    species: "Egg Pokémon",
    description:
      "Although they are the same size as other Exeggcute, the ones produced in Alola are quite heavy. Their shells are packed full.",
    evolution: {
      next: [["103", "use Leaf Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "2.5 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/102.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/102.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/102.png",
    },
  },
  {
    id: 103,
    name: {
      english: "Exeggutor",
      japanese: "ナッシー",
      chinese: "椰蛋树",
      french: "Noadkoko",
    },
    type: ["Plante", "Psy"],
    base: {
      HP: 95,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 125,
      "Sp. Defense": 75,
      Speed: 55,
    },
    species: "Coconut Pokémon",
    description:
      "Each of its three heads has its own thoughts. When they want to go in different directions, Exeggutor becomes unable to move.",
    evolution: {
      prev: ["102", "use Leaf Stone"],
    },
    profile: {
      height: "2 m",
      weight: "120 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/103.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/103.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/103.png",
    },
  },
  {
    id: 104,
    name: {
      english: "Cubone",
      japanese: "カラカラ",
      chinese: "卡拉卡拉",
      french: "Osselait",
    },
    type: ["Sol"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 95,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 35,
    },
    species: "Lonely Pokémon",
    description:
      "It wears its mother’s skull on its head, so no one knows what its bare face looks like. However, it’s clear that it’s always crying.",
    evolution: {
      next: [["105", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Monster"],
      ability: [
        ["Roche Head", "false"],
        ["Lightning Rod", "false"],
        ["Battle Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/104.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/104.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/104.png",
    },
  },
  {
    id: 105,
    name: {
      english: "Marowak",
      japanese: "ガラガラ",
      chinese: "嘎啦嘎啦",
      french: "Ossatueur",
    },
    type: ["Sol"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 110,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      Speed: 45,
    },
    species: "Bone Keeper Pokémon",
    description:
      "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns.",
    evolution: {
      prev: ["104", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "45 kg",
      egg: ["Monster"],
      ability: [
        ["Roche Head", "false"],
        ["Lightning Rod", "false"],
        ["Battle Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/105.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/105.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/105.png",
    },
  },
  {
    id: 106,
    name: {
      english: "Hitmonlee",
      japanese: "サワムラー",
      chinese: "飞腿郎",
      french: "Kicklee",
    },
    type: ["Combat"],
    base: {
      HP: 50,
      Attack: 120,
      Defense: 53,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 87,
    },
    species: "Kicking Pokémon",
    description:
      "Hitmonlee’s legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    evolution: {
      prev: ["236", "Level 20, Attack > Defense"],
    },
    profile: {
      height: "1.5 m",
      weight: "49.8 kg",
      egg: ["Human-Like"],
      ability: [
        ["Limber", "false"],
        ["Reckless", "false"],
        ["Unburden", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/106.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/106.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/106.png",
    },
  },
  {
    id: 107,
    name: {
      english: "Hitmonchan",
      japanese: "エビワラー",
      chinese: "快拳郎",
      french: "Tygnon",
    },
    type: ["Combat"],
    base: {
      HP: 50,
      Attack: 105,
      Defense: 79,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 76,
    },
    species: "Punching Pokémon",
    description:
      "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    evolution: {
      prev: ["236", "Level 20, Attack < Defense"],
    },
    profile: {
      height: "1.4 m",
      weight: "50.2 kg",
      egg: ["Human-Like"],
      ability: [
        ["Keen Eye", "false"],
        ["Iron Fist", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/107.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/107.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/107.png",
    },
  },
  {
    id: 108,
    name: {
      english: "Lickitung",
      japanese: "ベロリンガ",
      chinese: "大舌头",
      french: "Excelangue",
    },
    type: ["Normal"],
    base: {
      HP: 90,
      Attack: 55,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 30,
    },
    species: "Licking Pokémon",
    description:
      "It licks filth clean with its tongue. Whatever it licks always stinks afterward, so whether it’s really clean is...questionable.",
    evolution: {
      next: [["463", "after Rollout learned"]],
    },
    profile: {
      height: "1.2 m",
      weight: "65.5 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Oblivious", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/108.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/108.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/108.png",
    },
  },
  {
    id: 109,
    name: {
      english: "Koffing",
      japanese: "ドガース",
      chinese: "瓦斯弹",
      french: "Smogo",
    },
    type: ["Poison"],
    base: {
      HP: 40,
      Attack: 65,
      Defense: 95,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Poison Gas Pokémon",
    description:
      "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
    evolution: {
      next: [["110", "Level 35"]],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/109.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/109.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/109.png",
    },
  },
  {
    id: 110,
    name: {
      english: "Weezing",
      japanese: "マタドガス",
      chinese: "双弹瓦斯",
      french: "Smogogo",
    },
    type: ["Poison"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 120,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      Speed: 60,
    },
    species: "Poison Gas Pokémon",
    description:
      "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
    evolution: {
      prev: ["109", "Level 35"],
    },
    profile: {
      height: "1.2 m",
      weight: "9.5 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/110.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/110.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/110.png",
    },
  },
  {
    id: 111,
    name: {
      english: "Rhyhorn",
      japanese: "サイホーン",
      chinese: "独角犀牛",
      french: "Rhinocorne",
    },
    type: ["Sol", "Roche"],
    base: {
      HP: 80,
      Attack: 85,
      Defense: 95,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 25,
    },
    species: "Spikes Pokémon",
    description:
      "Rhyhorn’s brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
    evolution: {
      next: [["112", "Level 42"]],
    },
    profile: {
      height: "1 m",
      weight: "115 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Roche Head", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/111.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/111.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/111.png",
    },
  },
  {
    id: 112,
    name: {
      english: "Rhydon",
      japanese: "サイドン",
      chinese: "钻角犀兽",
      french: "Rhinoféros",
    },
    type: ["Sol", "Roche"],
    base: {
      HP: 105,
      Attack: 130,
      Defense: 120,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 40,
    },
    species: "Drill Pokémon",
    description:
      "Rhydon has a horn that serves as a drill. It is used for destroying roches and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
    evolution: {
      prev: ["111", "Level 42"],
      next: [["464", "trade holding Protector"]],
    },
    profile: {
      height: "1.9 m",
      weight: "120 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Roche Head", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/112.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/112.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/112.png",
    },
  },
  {
    id: 113,
    name: {
      english: "Chansey",
      japanese: "ラッキー",
      chinese: "吉利蛋",
      french: "Leveinard",
    },
    type: ["Normal"],
    base: {
      HP: 250,
      Attack: 5,
      Defense: 5,
      "Sp. Attack": 35,
      "Sp. Defense": 105,
      Speed: 50,
    },
    species: "Egg Pokémon",
    description:
      "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small.",
    evolution: {
      prev: ["440", "hold Oval Stone, Daytime"],
      next: [["242", "high Friendship"]],
    },
    profile: {
      height: "1.1 m",
      weight: "34.6 kg",
      egg: ["Fée"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Healer", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/113.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/113.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/113.png",
    },
  },
  {
    id: 114,
    name: {
      english: "Tangela",
      japanese: "モンジャラ",
      chinese: "蔓藤怪",
      french: "Saquedeneu",
    },
    type: ["Plante"],
    base: {
      HP: 65,
      Attack: 55,
      Defense: 115,
      "Sp. Attack": 100,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Vine Pokémon",
    description:
      "Tangela’s vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    evolution: {
      next: [["465", "after Ancient Power learned"]],
    },
    profile: {
      height: "1 m",
      weight: "35 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/114.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/114.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/114.png",
    },
  },
  {
    id: 115,
    name: {
      english: "Kangaskhan",
      japanese: "ガルーラ",
      chinese: "袋兽",
      french: "Kangourex",
    },
    type: ["Normal"],
    base: {
      HP: 105,
      Attack: 95,
      Defense: 80,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      Speed: 90,
    },
    species: "Parent Pokémon",
    description:
      "You shouldn’t get close to the child when it’s playing outside its mother’s pouch. Its mother is always nearby watching over it.",
    evolution: {},
    profile: {
      height: "2.2 m",
      weight: "80 kg",
      egg: ["Monster"],
      ability: [
        ["Early Bird", "false"],
        ["Scrappy", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/115.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/115.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/115.png",
    },
  },
  {
    id: 116,
    name: {
      english: "Horsea",
      japanese: "タッツー",
      chinese: "墨海马",
      french: "Hypotrempe",
    },
    type: ["Eau"],
    base: {
      HP: 30,
      Attack: 40,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 25,
      Speed: 60,
    },
    species: "Dragon Pokémon",
    description:
      "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
    evolution: {
      next: [["117", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Swift Swim", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/116.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/116.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/116.png",
    },
  },
  {
    id: 117,
    name: {
      english: "Seadra",
      japanese: "シードラ",
      chinese: "海刺龙",
      french: "Hypocéan",
    },
    type: ["Eau"],
    base: {
      HP: 55,
      Attack: 65,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 45,
      Speed: 85,
    },
    species: "Dragon Pokémon",
    description:
      "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
    evolution: {
      prev: ["116", "Level 32"],
      next: [["230", "trade holding Dragon Scale"]],
    },
    profile: {
      height: "1.2 m",
      weight: "25 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Poison Point", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/117.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/117.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/117.png",
    },
  },
  {
    id: 118,
    name: {
      english: "Goldeen",
      japanese: "トサキント",
      chinese: "角金鱼",
      french: "Poissirène",
    },
    type: ["Eau"],
    base: {
      HP: 45,
      Attack: 67,
      Defense: 60,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      Speed: 63,
    },
    species: "Goldfish Pokémon",
    description:
      "The way it swims along fluttering its dress-like fins has earned it the name “princess of the eau.”",
    evolution: {
      next: [["119", "Level 33"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15 kg",
      egg: ["Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Veil", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/118.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/118.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/118.png",
    },
  },
  {
    id: 119,
    name: {
      english: "Seaking",
      japanese: "アズマオウ",
      chinese: "金鱼王",
      french: "Poissoroy",
    },
    type: ["Eau"],
    base: {
      HP: 80,
      Attack: 92,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 68,
    },
    species: "Goldfish Pokémon",
    description:
      "To attract females, males dance on the river’s floor. The females gather around the male that dances most gracefully.",
    evolution: {
      prev: ["118", "Level 33"],
    },
    profile: {
      height: "1.3 m",
      weight: "39 kg",
      egg: ["Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Veil", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/119.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/119.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/119.png",
    },
  },
  {
    id: 120,
    name: {
      english: "Staryu",
      japanese: "ヒトデマン",
      chinese: "海星星",
      french: "Stari",
    },
    type: ["Eau"],
    base: {
      HP: 30,
      Attack: 45,
      Defense: 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Star Shape Pokémon",
    description:
      "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!",
    evolution: {
      next: [["121", "use Eau Stone"]],
    },
    profile: {
      height: "0.8 m",
      weight: "34.5 kg",
      egg: ["Eau 3"],
      ability: [
        ["Illuminate", "false"],
        ["Natural Cure", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/120.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/120.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/120.png",
    },
  },
  {
    id: 121,
    name: {
      english: "Starmie",
      japanese: "スターミー",
      chinese: "宝石海星",
      french: "Staross",
    },
    type: ["Eau", "Psy"],
    base: {
      HP: 60,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      Speed: 115,
    },
    species: "Mysterious Pokémon",
    description:
      "It rotates its geometrically shaped body to swim through the eau. It always seems to be sending out mysterious radio waves.",
    evolution: {
      prev: ["120", "use Eau Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "80 kg",
      egg: ["Eau 3"],
      ability: [
        ["Illuminate", "false"],
        ["Natural Cure", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/121.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/121.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/121.png",
    },
  },
  {
    id: 122,
    name: {
      english: "Mr.Mime",
      japanese: "バリヤード",
      chinese: "魔墙人偶",
      french: "M. Mime",
    },
    type: ["Psy", "Fée"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 65,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      Speed: 90,
    },
    species: "Barrier Pokémon",
    description:
      "It creates invisible walls with its pantomiming. If you don’t act impressed, it will attack you with a double slap!",
    evolution: {
      prev: ["439", "after Mimic learned"],
    },
    profile: {
      height: "1.3 m",
      weight: "54.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Soundproof", "false"],
        ["Filter", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/122.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/122.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/122.png",
    },
  },
  {
    id: 123,
    name: {
      english: "Scyther",
      japanese: "ストライク",
      chinese: "飞天螳螂",
      french: "Insécateur",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 105,
    },
    species: "Mantis Pokémon",
    description:
      "Some call it a ninja. Its movements— imperceptibly quick—are sufficient to cleave the air in two. It’s very popular in Alola.",
    evolution: {
      next: [["212", "trade holding Metal Coat"]],
    },
    profile: {
      height: "1.5 m",
      weight: "56 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "false"],
        ["Steadfast", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/123.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/123.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/123.png",
    },
  },
  {
    id: 124,
    name: {
      english: "Jynx",
      japanese: "ルージュラ",
      chinese: "迷唇姐",
      french: "Lippoutou",
    },
    type: ["Glace", "Psy"],
    base: {
      HP: 65,
      Attack: 50,
      Defense: 35,
      "Sp. Attack": 115,
      "Sp. Defense": 95,
      Speed: 95,
    },
    species: "Human Shape Pokémon",
    description:
      "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
    evolution: {
      prev: ["238", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "40.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Oblivious", "false"],
        ["Forewarn", "false"],
        ["Dry Skin", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/124.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/124.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/124.png",
    },
  },
  {
    id: 125,
    name: {
      english: "Electabuzz",
      japanese: "エレブー",
      chinese: "电击兽",
      french: "Élektek",
    },
    type: ["Electrique"],
    base: {
      HP: 65,
      Attack: 83,
      Defense: 57,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 105,
    },
    species: "Electrique Pokémon",
    description:
      "While it’s often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electrique company.",
    evolution: {
      prev: ["239", "Level 30"],
      next: [["466", "trade holding Electirizer"]],
    },
    profile: {
      height: "1.1 m",
      weight: "30 kg",
      egg: ["Human-Like"],
      ability: [
        ["Static", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/125.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/125.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/125.png",
    },
  },
  {
    id: 126,
    name: {
      english: "Magmar",
      japanese: "ブーバー",
      chinese: "鸭嘴火兽",
      french: "Magmar",
    },
    type: ["Feu"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 57,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      Speed: 93,
    },
    species: "Spitfeu Pokémon",
    description:
      "The hotter the place, the better they feel. Magmar in Alola are said to be hardier than those in other areas.",
    evolution: {
      prev: ["240", "Level 30"],
      next: [["467", "trade holding Magmarizer"]],
    },
    profile: {
      height: "1.3 m",
      weight: "44.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/126.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/126.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/126.png",
    },
  },
  {
    id: 127,
    name: {
      english: "Pinsir",
      japanese: "カイロス",
      chinese: "凯罗斯",
      french: "Scarabrute",
    },
    type: ["Insecte"],
    base: {
      HP: 65,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 70,
      Speed: 85,
    },
    species: "Stag Beetle Pokémon",
    description:
      "Although it’s tough, it can’t handle cold well. When night falls, it buries itself in leafage and sleeps.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "55 kg",
      egg: ["Insecte"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Mold Breaker", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/127.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/127.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/127.png",
    },
  },
  {
    id: 128,
    name: {
      english: "Tauros",
      japanese: "ケンタロス",
      chinese: "肯泰罗",
      french: "Tauros",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 95,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 110,
    },
    species: "Wild Bull Pokémon",
    description:
      "The climate seems to be related to the reason Tauros in Alola are a little calmer than those in other regions.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "88.4 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Anger Point", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/128.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/128.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/128.png",
    },
  },
  {
    id: 129,
    name: {
      english: "Magikarp",
      japanese: "コイキング",
      chinese: "鲤鱼王",
      french: "Magicarpe",
    },
    type: ["Eau"],
    base: {
      HP: 20,
      Attack: 10,
      Defense: 55,
      "Sp. Attack": 15,
      "Sp. Defense": 20,
      Speed: 80,
    },
    species: "Fish Pokémon",
    description:
      "Thanks to their strong hold on life, dirty eau doesn’t bother them at all. They live in eaus all over the world!",
    evolution: {
      next: [["130", "Level 20"]],
    },
    profile: {
      height: "0.9 m",
      weight: "10 kg",
      egg: ["Eau 2", "Dragon"],
      ability: [
        ["Swift Swim", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/129.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/129.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/129.png",
    },
  },
  {
    id: 130,
    name: {
      english: "Gyarados",
      japanese: "ギャラドス",
      chinese: "暴鲤龙",
      french: "Léviator",
    },
    type: ["Eau", "Vol"],
    base: {
      HP: 95,
      Attack: 125,
      Defense: 79,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      Speed: 81,
    },
    species: "Atrocious Pokémon",
    description:
      "The energy from evolution stimulated its brain cells strongly, causing it to become very ferocious.",
    evolution: {
      prev: ["129", "Level 20"],
    },
    profile: {
      height: "6.5 m",
      weight: "235 kg",
      egg: ["Eau 2", "Dragon"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/130.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/130.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/130.png",
    },
  },
  {
    id: 131,
    name: {
      english: "Lapras",
      japanese: "ラプラス",
      chinese: "拉普拉斯",
      french: "Lokhlass",
    },
    type: ["Eau", "Glace"],
    base: {
      HP: 130,
      Attack: 85,
      Defense: 80,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      Speed: 60,
    },
    species: "Transport Pokémon",
    description:
      "They’ve been so cherished that there’s now an overabundance. The fish Pokémon population has declined in eaus with too many Lapras.",
    evolution: {},
    profile: {
      height: "2.5 m",
      weight: "220 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Eau Absorb", "false"],
        ["Shell Armor", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/131.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/131.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/131.png",
    },
  },
  {
    id: 132,
    name: {
      english: "Ditto",
      japanese: "メタモン",
      chinese: "百变怪",
      french: "Métamorph",
    },
    type: ["Normal"],
    base: {
      HP: 48,
      Attack: 48,
      Defense: 48,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      Speed: 48,
    },
    species: "Transform Pokémon",
    description:
      "It transforms into whatever it sees. If the thing it’s transforming into isn’t right in front of it, Ditto relies on its memory—so sometimes it fails.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Ditto"],
      ability: [
        ["Limber", "false"],
        ["Imposter", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/132.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/132.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/132.png",
    },
  },
  {
    id: 133,
    name: {
      english: "Eevee",
      japanese: "イーブイ",
      chinese: "伊布",
      french: "Évoli",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 55,
    },
    species: "Evolution Pokémon",
    description:
      "Its genes are easily influenced by its surroundings. Even its face starts to look like that of its Trainer.",
    evolution: {
      next: [
        ["134", "use Eau Stone"],
        ["135", "use Thunder Stone"],
        ["136", "use Feu Stone"],
        ["196", "high Friendship, Daytime"],
        ["197", "high Friendship, Nighttime"],
        ["470", "level up near a Mossy Roche"],
        ["471", "level up near an Icy Roche"],
        ["700", "High Affection and knowing Fée move"],
      ],
    },
    profile: {
      height: "0.3 m",
      weight: "6.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Adaptability", "false"],
        ["Anticipation", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/133.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/133.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/133.png",
    },
  },
  {
    id: 134,
    name: {
      english: "Vaporeon",
      japanese: "シャワーズ",
      chinese: "水伊布",
      french: "Aquali",
    },
    type: ["Eau"],
    base: {
      HP: 130,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      Speed: 65,
    },
    species: "Bubble Jet Pokémon",
    description:
      "It detects nearby moisture with its fin. When its fin begins trembling rapidly, that means rain will fall in a few hours.",
    evolution: {
      prev: ["133", "use Eau Stone"],
    },
    profile: {
      height: "1 m",
      weight: "29 kg",
      egg: ["Field"],
      ability: [
        ["Eau Absorb", "false"],
        ["Hydration", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/134.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/134.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/134.png",
    },
  },
  {
    id: 135,
    name: {
      english: "Jolteon",
      japanese: "サンダース",
      chinese: "雷伊布",
      french: "Voltali",
    },
    type: ["Electrique"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      Speed: 130,
    },
    species: "Lightning Pokémon",
    description:
      "Its fur stands on end, becoming like needles it feus at enemies. Once they’re weakened, it finishes them off with a 10,000 volt shock.",
    evolution: {
      prev: ["133", "use Thunder Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "24.5 kg",
      egg: ["Field"],
      ability: [
        ["Volt Absorb", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/135.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/135.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/135.png",
    },
  },
  {
    id: 136,
    name: {
      english: "Flareon",
      japanese: "ブースター",
      chinese: "火伊布",
      french: "Pyroli",
    },
    type: ["Feu"],
    base: {
      HP: 65,
      Attack: 130,
      Defense: 60,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      Speed: 65,
    },
    species: "Flame Pokémon",
    description:
      "The flame chamber inside its body ignites when Flareon gets agitated, reaching temperatures of up to 1,650 degrees Fahrenheit.",
    evolution: {
      prev: ["133", "use Feu Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "25 kg",
      egg: ["Field"],
      ability: [
        ["Flash Feu", "false"],
        ["Guts", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/136.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/136.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/136.png",
    },
  },
  {
    id: 137,
    name: {
      english: "Porygon",
      japanese: "ポリゴン",
      chinese: "多边兽",
      french: "Porygon",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Virtual Pokémon",
    description:
      "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true.",
    evolution: {
      next: [["233", "trade holding Upgrade"]],
    },
    profile: {
      height: "0.8 m",
      weight: "36.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Trace", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/137.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/137.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/137.png",
    },
  },
  {
    id: 138,
    name: {
      english: "Omanyte",
      japanese: "オムナイト",
      chinese: "菊石兽",
      french: "Amonita",
    },
    type: ["Roche", "Eau"],
    base: {
      HP: 35,
      Attack: 40,
      Defense: 100,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      Speed: 35,
    },
    species: "Spiral Pokémon",
    description:
      "It was restored from an ancient fossil. Those Helix Fossils are excavated from areas that were once oceans long, long ago.",
    evolution: {
      next: [["139", "Level 40"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.5 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/138.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/138.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/138.png",
    },
  },
  {
    id: 139,
    name: {
      english: "Omastar",
      japanese: "オムスター",
      chinese: "多刺菊石兽",
      french: "Amonistar",
    },
    type: ["Roche", "Eau"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 125,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Spiral Pokémon",
    description:
      "It wraps its prey in its tentacles to immobilize them and then finishes them off with its sharp fangs.",
    evolution: {
      prev: ["138", "Level 40"],
    },
    profile: {
      height: "1 m",
      weight: "35 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/139.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/139.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png",
    },
  },
  {
    id: 140,
    name: {
      english: "Kabuto",
      japanese: "カブト",
      chinese: "化石盔",
      french: "Kabuto",
    },
    type: ["Roche", "Eau"],
    base: {
      HP: 30,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Shellfish Pokémon",
    description:
      "This Pokémon became extinct everywhere, except in a few areas. It protects itself with its hard shell.",
    evolution: {
      next: [["141", "Level 40"]],
    },
    profile: {
      height: "0.5 m",
      weight: "11.5 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Battle Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/140.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/140.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/140.png",
    },
  },
  {
    id: 141,
    name: {
      english: "Kabutops",
      japanese: "カブトプス",
      chinese: "镰刀盔",
      french: "Kabutops",
    },
    type: ["Roche", "Eau"],
    base: {
      HP: 60,
      Attack: 115,
      Defense: 105,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 80,
    },
    species: "Shellfish Pokémon",
    description:
      "It swims at speeds of roughly 29 knots, quickly closing in on its prey and slashing into them with its scythes to finish them off.",
    evolution: {
      prev: ["140", "Level 40"],
    },
    profile: {
      height: "1.3 m",
      weight: "40.5 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Battle Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/141.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/141.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/141.png",
    },
  },
  {
    id: 142,
    name: {
      english: "Aerodactyl",
      japanese: "プテラ",
      chinese: "化石翼龙",
      french: "Ptéra",
    },
    type: ["Roche", "Vol"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 65,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 130,
    },
    species: "Fossil Pokémon",
    description:
      "It flew through the open skies over the ancient continent as if they were its own. When it touched sol, its walk was weak and slow.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "59 kg",
      egg: ["Vol"],
      ability: [
        ["Roche Head", "false"],
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/142.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/142.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/142.png",
    },
  },
  {
    id: 143,
    name: {
      english: "Snorlax",
      japanese: "カビゴン",
      chinese: "卡比兽",
      french: "Ronflex",
    },
    type: ["Normal"],
    base: {
      HP: 160,
      Attack: 110,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 110,
      Speed: 30,
    },
    species: "Sleeping Pokémon",
    description:
      "It has no interest in anything other than eating. Even if you climb up on its stomach while it’s napping, it doesn’t seem to mind at all!",
    evolution: {
      prev: ["446", "high Friendship"],
    },
    profile: {
      height: "2.1 m",
      weight: "460 kg",
      egg: ["Monster"],
      ability: [
        ["Immunity", "false"],
        ["Thick Fat", "false"],
        ["Gluttony", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/143.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/143.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/143.png",
    },
  },
  {
    id: 144,
    name: {
      english: "Articuno",
      japanese: "フリーザー",
      chinese: "急冻鸟",
      french: "Artikodin",
    },
    type: ["Glace", "Vol"],
    base: {
      HP: 90,
      Attack: 85,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 125,
      Speed: 85,
    },
    species: "Freeze Pokémon",
    description:
      "Articuno is a legendary bird Pokémon that can control glace. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "55.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Snow Cloak", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/144.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/144.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/144.png",
    },
  },
  {
    id: 145,
    name: {
      english: "Zapdos",
      japanese: "サンダー",
      chinese: "闪电鸟",
      french: "Électhor",
    },
    type: ["Electrique", "Vol"],
    base: {
      HP: 90,
      Attack: 90,
      Defense: 85,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      Speed: 100,
    },
    species: "Electrique Pokémon",
    description:
      "Zapdos is a legendary bird Pokémon that has the ability to control electriqueity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    evolution: {},
    profile: {
      height: "1.6 m",
      weight: "52.6 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Static", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/145.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/145.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/145.png",
    },
  },
  {
    id: 146,
    name: {
      english: "Moltres",
      japanese: "ファイヤー",
      chinese: "火焰鸟",
      french: "Sulfura",
    },
    type: ["Feu", "Vol"],
    base: {
      HP: 90,
      Attack: 100,
      Defense: 90,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      Speed: 90,
    },
    species: "Flame Pokémon",
    description:
      "Moltres is a legendary bird Pokémon that has the ability to control feu. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Flame Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/146.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/146.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/146.png",
    },
  },
  {
    id: 147,
    name: {
      english: "Dratini",
      japanese: "ミニリュウ",
      chinese: "迷你龙",
      french: "Minidraco",
    },
    type: ["Dragon"],
    base: {
      HP: 41,
      Attack: 64,
      Defense: 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Dragon Pokémon",
    description:
      "It sheds its skin—almost on a daily basis—and grows larger. Its skin is soft just after it’s been shed.",
    evolution: {
      next: [["148", "Level 30"]],
    },
    profile: {
      height: "1.8 m",
      weight: "3.3 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Shed Skin", "false"],
        ["Marvel Scale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/147.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/147.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/147.png",
    },
  },
  {
    id: 148,
    name: {
      english: "Dragonair",
      japanese: "ハクリュー",
      chinese: "哈克龙",
      french: "Draco",
    },
    type: ["Dragon"],
    base: {
      HP: 61,
      Attack: 84,
      Defense: 65,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Dragon Pokémon",
    description:
      "Some say that if you see it at the start of the year, vol through the sky and twisting its body, you’ll be healthy all year long.",
    evolution: {
      prev: ["147", "Level 30"],
      next: [["149", "Level 55"]],
    },
    profile: {
      height: "4 m",
      weight: "16.5 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Shed Skin", "false"],
        ["Marvel Scale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/148.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/148.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/148.png",
    },
  },
  {
    id: 149,
    name: {
      english: "Dragonite",
      japanese: "カイリュー",
      chinese: "快龙",
      french: "Dracolosse",
    },
    type: ["Dragon", "Vol"],
    base: {
      HP: 91,
      Attack: 134,
      Defense: 95,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Dragon Pokémon",
    description:
      "You’ll often hear tales of this kindhearted Pokémon rescuing people or Pokémon that are drowning.",
    evolution: {
      prev: ["148", "Level 55"],
    },
    profile: {
      height: "2.2 m",
      weight: "210 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Inner Focus", "false"],
        ["Multiscale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/149.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/149.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/149.png",
    },
  },
  {
    id: 150,
    name: {
      english: "Mewtwo",
      japanese: "ミュウツー",
      chinese: "超梦",
      french: "Mewtwo",
    },
    type: ["Psy"],
    base: {
      HP: 106,
      Attack: 110,
      Defense: 90,
      "Sp. Attack": 154,
      "Sp. Defense": 90,
      Speed: 130,
    },
    species: "Genetic Pokémon",
    description:
      "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "122 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/150.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/150.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/150.png",
    },
  },
  {
    id: 151,
    name: {
      english: "Mew",
      japanese: "ミュウ",
      chinese: "梦幻",
      french: "Mew",
    },
    type: ["Psy"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "New Species Pokémon",
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notglace even if it approaches people.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4 kg",
      egg: ["Undiscovered"],
      ability: [["Synchronize", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/151.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/151.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/151.png",
    },
  },
  {
    id: 152,
    name: {
      english: "Chikorita",
      japanese: "チコリータ",
      chinese: "菊草叶",
      french: "Germignon",
    },
    type: ["Plante"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 65,
      "Sp. Attack": 49,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Leaf Pokémon",
    description:
      "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    evolution: {
      next: [["153", "Level 16"]],
    },
    profile: {
      height: "0.9 m",
      weight: "6.4 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/152.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/152.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/152.png",
    },
  },
  {
    id: 153,
    name: {
      english: "Bayleef",
      japanese: "ベイリーフ",
      chinese: "月桂叶",
      french: "Macronium",
    },
    type: ["Plante"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 80,
      "Sp. Attack": 63,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Leaf Pokémon",
    description:
      "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    evolution: {
      prev: ["152", "Level 16"],
      next: [["154", "Level 32"]],
    },
    profile: {
      height: "1.2 m",
      weight: "15.8 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/153.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/153.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/153.png",
    },
  },
  {
    id: 154,
    name: {
      english: "Meganium",
      japanese: "メガニウム",
      chinese: "大竺葵",
      french: "Méganium",
    },
    type: ["Plante"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 100,
      "Sp. Attack": 83,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Herb Pokémon",
    description:
      "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s combat spirit.",
    evolution: {
      prev: ["153", "Level 32"],
    },
    profile: {
      height: "1.8 m",
      weight: "100.5 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/154.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/154.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/154.png",
    },
  },
  {
    id: 155,
    name: {
      english: "Cyndaquil",
      japanese: "ヒノアラシ",
      chinese: "火球鼠",
      french: "Héricendre",
    },
    type: ["Feu"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Feu Mouse Pokémon",
    description:
      "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    evolution: {
      next: [["156", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "7.9 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Feu", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/155.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/155.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/155.png",
    },
  },
  {
    id: 156,
    name: {
      english: "Quilava",
      japanese: "マグマラシ",
      chinese: "火岩鼠",
      french: "Feurisson",
    },
    type: ["Feu"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Volcano Pokémon",
    description:
      "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
    evolution: {
      prev: ["155", "Level 14"],
      next: [["157", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Feu", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/156.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/156.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/156.png",
    },
  },
  {
    id: 157,
    name: {
      english: "Typhlosion",
      japanese: "バクフーン",
      chinese: "火暴兽",
      french: "Typhlosion",
    },
    type: ["Feu"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Volcano Pokémon",
    description:
      "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
    evolution: {
      prev: ["156", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "79.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Feu", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/157.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/157.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/157.png",
    },
  },
  {
    id: 158,
    name: {
      english: "Totodile",
      japanese: "ワニノコ",
      chinese: "小锯鳄",
      french: "Kaiminus",
    },
    type: ["Eau"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 64,
      "Sp. Attack": 44,
      "Sp. Defense": 48,
      Speed: 43,
    },
    species: "Big Jaw Pokémon",
    description:
      "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    evolution: {
      next: [["159", "Level 18"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.5 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/158.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/158.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/158.png",
    },
  },
  {
    id: 159,
    name: {
      english: "Croconaw",
      japanese: "アリゲイツ",
      chinese: "蓝鳄",
      french: "Crocrodil",
    },
    type: ["Eau"],
    base: {
      HP: 65,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 59,
      "Sp. Defense": 63,
      Speed: 58,
    },
    species: "Big Jaw Pokémon",
    description:
      "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    evolution: {
      prev: ["158", "Level 18"],
      next: [["160", "Level 30"]],
    },
    profile: {
      height: "1.1 m",
      weight: "25 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/159.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/159.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/159.png",
    },
  },
  {
    id: 160,
    name: {
      english: "Feraligatr",
      japanese: "オーダイル",
      chinese: "大力鳄",
      french: "Aligatueur",
    },
    type: ["Eau"],
    base: {
      HP: 85,
      Attack: 105,
      Defense: 100,
      "Sp. Attack": 79,
      "Sp. Defense": 83,
      Speed: 78,
    },
    species: "Big Jaw Pokémon",
    description:
      "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the sol hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    evolution: {
      prev: ["159", "Level 30"],
    },
    profile: {
      height: "2.3 m",
      weight: "88.8 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/160.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/160.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/160.png",
    },
  },
  {
    id: 161,
    name: {
      english: "Sentret",
      japanese: "オタチ",
      chinese: "尾立",
      french: "Fouinette",
    },
    type: ["Normal"],
    base: {
      HP: 35,
      Attack: 46,
      Defense: 34,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 20,
    },
    species: "Scout Pokémon",
    description:
      "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    evolution: {
      next: [["162", "Level 15"]],
    },
    profile: {
      height: "0.8 m",
      weight: "6 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Keen Eye", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/161.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/161.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/161.png",
    },
  },
  {
    id: 162,
    name: {
      english: "Furret",
      japanese: "オオタチ",
      chinese: "大尾立",
      french: "Fouinar",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 76,
      Defense: 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Long Body Pokémon",
    description:
      "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    evolution: {
      prev: ["161", "Level 15"],
    },
    profile: {
      height: "1.8 m",
      weight: "32.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Keen Eye", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/162.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/162.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/162.png",
    },
  },
  {
    id: 163,
    name: {
      english: "Hoothoot",
      japanese: "ホーホー",
      chinese: "咕咕",
      french: "Hoothoot",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 60,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 36,
      "Sp. Defense": 56,
      Speed: 50,
    },
    species: "Owl Pokémon",
    description:
      "It cries out at the same time every day. A long time ago, people cherished it and considered it a divine messenger sent to tell the time.",
    evolution: {
      next: [["164", "Level 20"]],
    },
    profile: {
      height: "0.7 m",
      weight: "21.2 kg",
      egg: ["Vol"],
      ability: [
        ["Insomnia", "false"],
        ["Keen Eye", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/163.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/163.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/163.png",
    },
  },
  {
    id: 164,
    name: {
      english: "Noctowl",
      japanese: "ヨルノズク",
      chinese: "猫头夜鹰",
      french: "Noarfang",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 100,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 86,
      "Sp. Defense": 96,
      Speed: 70,
    },
    species: "Owl Pokémon",
    description:
      "When it turns its head entirely upside down, you know it’s troubled by something. If you don’t leave it be, it will peck you.",
    evolution: {
      prev: ["163", "Level 20"],
    },
    profile: {
      height: "1.6 m",
      weight: "40.8 kg",
      egg: ["Vol"],
      ability: [
        ["Insomnia", "false"],
        ["Keen Eye", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/164.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/164.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/164.png",
    },
  },
  {
    id: 165,
    name: {
      english: "Ledyba",
      japanese: "レディバ",
      chinese: "芭瓢虫",
      french: "Coxy",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 40,
      Attack: 20,
      Defense: 30,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      Speed: 55,
    },
    species: "Five Star Pokémon",
    description:
      "These very cowardly Pokémon join together and use Reflect to protect their nest.",
    evolution: {
      next: [["166", "Level 18"]],
    },
    profile: {
      height: "1 m",
      weight: "10.8 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Early Bird", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/165.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/165.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/165.png",
    },
  },
  {
    id: 166,
    name: {
      english: "Ledian",
      japanese: "レディアン",
      chinese: "安瓢虫",
      french: "Coxyclaque",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 55,
      Attack: 35,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 110,
      Speed: 85,
    },
    species: "Five Star Pokémon",
    description:
      "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you.",
    evolution: {
      prev: ["165", "Level 18"],
    },
    profile: {
      height: "1.4 m",
      weight: "35.6 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Early Bird", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/166.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/166.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/166.png",
    },
  },
  {
    id: 167,
    name: {
      english: "Spinarak",
      japanese: "イトマル",
      chinese: "圆丝蛛",
      french: "Mimigal",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 40,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "String Spit Pokémon",
    description:
      "Although the poison from its fangs isn’t that strong, it’s potent enough to weaken prey that gets caught in its web.",
    evolution: {
      next: [["168", "Level 22"]],
    },
    profile: {
      height: "0.5 m",
      weight: "8.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Insomnia", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/167.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/167.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/167.png",
    },
  },
  {
    id: 168,
    name: {
      english: "Ariados",
      japanese: "アリアドス",
      chinese: "阿利多斯",
      french: "Migalos",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 40,
    },
    species: "Long Leg Pokémon",
    description:
      "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
    evolution: {
      prev: ["167", "Level 22"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Insomnia", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/168.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/168.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/168.png",
    },
  },
  {
    id: 169,
    name: {
      english: "Crobat",
      japanese: "クロバット",
      chinese: "叉字蝠",
      french: "Nostenfer",
    },
    type: ["Poison", "Vol"],
    base: {
      HP: 85,
      Attack: 90,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 130,
    },
    species: "Bat Pokémon",
    description:
      "It feeds on the blood of living people and Pokémon. If it can’t drink any blood for even a short while, it becomes weak and unable to fly.",
    evolution: {
      prev: ["42", "high Friendship"],
    },
    profile: {
      height: "1.8 m",
      weight: "75 kg",
      egg: ["Vol"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/169.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/169.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/169.png",
    },
  },
  {
    id: 170,
    name: {
      english: "Chinchou",
      japanese: "チョンチー",
      chinese: "灯笼鱼",
      french: "Loupio",
    },
    type: ["Eau", "Electrique"],
    base: {
      HP: 75,
      Attack: 38,
      Defense: 38,
      "Sp. Attack": 56,
      "Sp. Defense": 56,
      Speed: 67,
    },
    species: "Angler Pokémon",
    description:
      "Chinchou blink their shining antennae at one another to claim their respective turf.",
    evolution: {
      next: [["171", "Level 27"]],
    },
    profile: {
      height: "0.5 m",
      weight: "12 kg",
      egg: ["Eau 2"],
      ability: [
        ["Volt Absorb", "false"],
        ["Illuminate", "false"],
        ["Eau Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/170.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/170.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/170.png",
    },
  },
  {
    id: 171,
    name: {
      english: "Lanturn",
      japanese: "ランターン",
      chinese: "电灯怪",
      french: "Lanturn",
    },
    type: ["Eau", "Electrique"],
    base: {
      HP: 125,
      Attack: 58,
      Defense: 58,
      "Sp. Attack": 76,
      "Sp. Defense": 76,
      Speed: 67,
    },
    species: "Light Pokémon",
    description:
      "It lives far down in the depths of the ocean. It blinds its prey with light, using the moment they’re dazzled to swallow them whole.",
    evolution: {
      prev: ["170", "Level 27"],
    },
    profile: {
      height: "1.2 m",
      weight: "22.5 kg",
      egg: ["Eau 2"],
      ability: [
        ["Volt Absorb", "false"],
        ["Illuminate", "false"],
        ["Eau Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/171.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/171.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/171.png",
    },
  },
  {
    id: 172,
    name: {
      english: "Pichu",
      japanese: "ピチュー",
      chinese: "皮丘",
      french: "Pichu",
    },
    type: ["Electrique"],
    base: {
      HP: 20,
      Attack: 40,
      Defense: 15,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 60,
    },
    species: "Tiny Mouse Pokémon",
    description:
      "It has electrique sacs in its cheeks. When they’re fully charged, Pichu plays very energetically.",
    evolution: {
      next: [["25", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/172.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/172.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/172.png",
    },
  },
  {
    id: 173,
    name: {
      english: "Cleffa",
      japanese: "ピィ",
      chinese: "皮宝宝",
      french: "Mélo",
    },
    type: ["Fée"],
    base: {
      HP: 50,
      Attack: 25,
      Defense: 28,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 15,
    },
    species: "Star Shape Pokémon",
    description:
      "Said to have ridden here on a shooting star, Cleffa seem to appear in places where meteorites have struck in the past.",
    evolution: {
      next: [["35", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/173.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/173.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/173.png",
    },
  },
  {
    id: 174,
    name: {
      english: "Igglybuff",
      japanese: "ププリン",
      chinese: "宝宝丁",
      french: "Toudoudou",
    },
    type: ["Normal", "Fée"],
    base: {
      HP: 90,
      Attack: 30,
      Defense: 15,
      "Sp. Attack": 40,
      "Sp. Defense": 20,
      Speed: 15,
    },
    species: "Balloon Pokémon",
    description:
      "Left to its own devglaces, it will constantly practglace singing. You should make it take a break so it doesn’t hurt its throat.",
    evolution: {
      next: [["39", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/174.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/174.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/174.png",
    },
  },
  {
    id: 175,
    name: {
      english: "Togepi",
      japanese: "トゲピー",
      chinese: "波克比",
      french: "Togepi",
    },
    type: ["Fée"],
    base: {
      HP: 35,
      Attack: 20,
      Defense: 65,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      Speed: 20,
    },
    species: "Spike Ball Pokémon",
    description:
      "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
    evolution: {
      next: [["176", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/175.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/175.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/175.png",
    },
  },
  {
    id: 176,
    name: {
      english: "Togetic",
      japanese: "トゲチック",
      chinese: "波克基古",
      french: "Togetic",
    },
    type: ["Fée", "Vol"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 85,
      "Sp. Attack": 80,
      "Sp. Defense": 105,
      Speed: 40,
    },
    species: "Happiness Pokémon",
    description:
      "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
    evolution: {
      prev: ["175", "high Friendship"],
      next: [["468", "use Shiny Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "3.2 kg",
      egg: ["Vol", "Fée"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/176.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/176.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/176.png",
    },
  },
  {
    id: 177,
    name: {
      english: "Natu",
      japanese: "ネイティ",
      chinese: "天然雀",
      french: "Natu",
    },
    type: ["Psy", "Vol"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Tiny Bird Pokémon",
    description:
      "The look in its eyes gives the impression that it’s carefully observing you. If you approach it, Natu will hop away.",
    evolution: {
      next: [["178", "Level 25"]],
    },
    profile: {
      height: "0.2 m",
      weight: "2 kg",
      egg: ["Vol"],
      ability: [
        ["Synchronize", "false"],
        ["Early Bird", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/177.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/177.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/177.png",
    },
  },
  {
    id: 178,
    name: {
      english: "Xatu",
      japanese: "ネイティオ",
      chinese: "天然鸟",
      french: "Xatu",
    },
    type: ["Psy", "Vol"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 70,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 95,
    },
    species: "Mystic Pokémon",
    description:
      "While it can see the future, it has no desire to change it, which is probably why it remains motionless at all times.",
    evolution: {
      prev: ["177", "Level 25"],
    },
    profile: {
      height: "1.5 m",
      weight: "15 kg",
      egg: ["Vol"],
      ability: [
        ["Synchronize", "false"],
        ["Early Bird", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/178.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/178.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/178.png",
    },
  },
  {
    id: 179,
    name: {
      english: "Mareep",
      japanese: "メリープ",
      chinese: "咩利羊",
      french: "Wattouat",
    },
    type: ["Electrique"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Wool Pokémon",
    description:
      "Rubbing its fleece generates electriqueity. You’ll want to pet it because it’s cute, but if you use your bare hand, you’ll get a painful shock.",
    evolution: {
      next: [["180", "Level 15"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.8 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/179.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/179.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/179.png",
    },
  },
  {
    id: 180,
    name: {
      english: "Flaaffy",
      japanese: "モココ",
      chinese: "茸茸羊",
      french: "Lainergie",
    },
    type: ["Electrique"],
    base: {
      HP: 70,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 80,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Wool Pokémon",
    description:
      "It stores electriqueity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches.",
    evolution: {
      prev: ["179", "Level 15"],
      next: [["181", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "13.3 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/180.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/180.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/180.png",
    },
  },
  {
    id: 181,
    name: {
      english: "Ampharos",
      japanese: "デンリュウ",
      chinese: "电龙",
      french: "Pharamp",
    },
    type: ["Electrique"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 115,
      "Sp. Defense": 90,
      Speed: 55,
    },
    species: "Light Pokémon",
    description:
      "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors.",
    evolution: {
      prev: ["180", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "61.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/181.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/181.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/181.png",
    },
  },
  {
    id: 182,
    name: {
      english: "Bellossom",
      japanese: "キレイハナ",
      chinese: "美丽花",
      french: "Joliflor",
    },
    type: ["Plante"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Flower Pokémon",
    description:
      "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
    evolution: {
      prev: ["44", "use Sun Stone"],
    },
    profile: {
      height: "0.4 m",
      weight: "5.8 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Healer", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/182.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/182.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/182.png",
    },
  },
  {
    id: 183,
    name: {
      english: "Marill",
      japanese: "マリル",
      chinese: "玛力露",
      french: "Marill",
    },
    type: ["Eau", "Fée"],
    base: {
      HP: 70,
      Attack: 20,
      Defense: 50,
      "Sp. Attack": 20,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Aqua Mouse Pokémon",
    description:
      "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon’s tail is flexible and configured to stretch.",
    evolution: {
      prev: ["298", "high Friendship"],
      next: [["184", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8.5 kg",
      egg: ["Eau 1", "Fée"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/183.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/183.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/183.png",
    },
  },
  {
    id: 184,
    name: {
      english: "Azumarill",
      japanese: "マリルリ",
      chinese: "玛力露丽",
      french: "Azumarill",
    },
    type: ["Eau", "Fée"],
    base: {
      HP: 100,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "Aqua Rabbit Pokémon",
    description:
      "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.",
    evolution: {
      prev: ["183", "Level 18"],
    },
    profile: {
      height: "0.8 m",
      weight: "28.5 kg",
      egg: ["Eau 1", "Fée"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/184.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/184.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/184.png",
    },
  },
  {
    id: 185,
    name: {
      english: "Sudowoodo",
      japanese: "ウソッキー",
      chinese: "树才怪‎",
      french: "Simularbre",
    },
    type: ["Roche"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 30,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Imitation Pokémon",
    description:
      "The result of its holding the same pose all the time is arms that have become supple yet strong.",
    evolution: {
      prev: ["438", "after Mimic learned"],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Roche Head", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/185.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/185.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/185.png",
    },
  },
  {
    id: 186,
    name: {
      english: "Politoed",
      japanese: "ニョロトノ",
      chinese: "蚊香蛙皇",
      french: "Tarpaud",
    },
    type: ["Eau"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Frog Pokémon",
    description:
      "The longer and more luxurious the curled hair on its head, the greater the number of Poliwag and Poliwhirl that will obey it.",
    evolution: {
      prev: ["61", "trade holding Kings Roche"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.9 kg",
      egg: ["Eau 1"],
      ability: [
        ["Eau Absorb", "false"],
        ["Damp", "false"],
        ["Drizzle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/186.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/186.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/186.png",
    },
  },
  {
    id: 187,
    name: {
      english: "Hoppip",
      japanese: "ハネッコ",
      chinese: "毽子草",
      french: "Granivol",
    },
    type: ["Plante", "Vol"],
    base: {
      HP: 35,
      Attack: 35,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Cottonweed Pokémon",
    description:
      "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    evolution: {
      next: [["188", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "0.5 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/187.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/187.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/187.png",
    },
  },
  {
    id: 188,
    name: {
      english: "Skiploom",
      japanese: "ポポッコ",
      chinese: "毽子花",
      french: "Floravol",
    },
    type: ["Plante", "Vol"],
    base: {
      HP: 55,
      Attack: 45,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Cottonweed Pokémon",
    description:
      "Skiploom’s flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    evolution: {
      prev: ["187", "Level 18"],
      next: [["189", "Level 27"]],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/188.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/188.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/188.png",
    },
  },
  {
    id: 189,
    name: {
      english: "Jumpluff",
      japanese: "ワタッコ",
      chinese: "毽子棉",
      french: "Cotovol",
    },
    type: ["Plante", "Vol"],
    base: {
      HP: 75,
      Attack: 55,
      Defense: 70,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      Speed: 110,
    },
    species: "Cottonweed Pokémon",
    description:
      "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the sol when it encounters cold air while it is floating.",
    evolution: {
      prev: ["188", "Level 27"],
    },
    profile: {
      height: "0.8 m",
      weight: "3 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/189.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/189.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/189.png",
    },
  },
  {
    id: 190,
    name: {
      english: "Aipom",
      japanese: "エイパム",
      chinese: "长尾怪手",
      french: "Capumain",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Long Tail Pokémon",
    description:
      "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
    evolution: {
      next: [["424", "after Double Hit learned"]],
    },
    profile: {
      height: "0.8 m",
      weight: "11.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Pickup", "false"],
        ["Skill Link", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/190.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/190.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/190.png",
    },
  },
  {
    id: 191,
    name: {
      english: "Sunkern",
      japanese: "ヒマナッツ",
      chinese: "向日种子",
      french: "Tournegrin",
    },
    type: ["Plante"],
    base: {
      HP: 30,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 30,
    },
    species: "Seed Pokémon",
    description:
      "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    evolution: {
      next: [["192", "use Sun Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.8 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Early Bird", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/191.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/191.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/191.png",
    },
  },
  {
    id: 192,
    name: {
      english: "Sunflora",
      japanese: "キマワリ",
      chinese: "向日花怪",
      french: "Héliatronc",
    },
    type: ["Plante"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 55,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      Speed: 30,
    },
    species: "Sun Pokémon",
    description:
      "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    evolution: {
      prev: ["191", "use Sun Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "8.5 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Early Bird", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/192.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/192.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/192.png",
    },
  },
  {
    id: 193,
    name: {
      english: "Yanma",
      japanese: "ヤンヤンマ",
      chinese: "蜻蜻蜓",
      french: "Yanma",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 75,
      "Sp. Defense": 45,
      Speed: 95,
    },
    species: "Clear Wing Pokémon",
    description:
      "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its vol ability to quickly chase down targeted prey.",
    evolution: {
      next: [["469", "after Ancient Power learned"]],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Insecte"],
      ability: [
        ["Speed Boost", "false"],
        ["Compound Eyes", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/193.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/193.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/193.png",
    },
  },
  {
    id: 194,
    name: {
      english: "Wooper",
      japanese: "ウパー",
      chinese: "乌波",
      french: "Axoloto",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 55,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Eau Fish Pokémon",
    description:
      "Wooper usually lives in eau. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
    evolution: {
      next: [["195", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Eau Absorb", "false"],
        ["Unaware", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/194.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/194.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/194.png",
    },
  },
  {
    id: 195,
    name: {
      english: "Quagsire",
      japanese: "ヌオー",
      chinese: "沼王",
      french: "Maraiste",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 95,
      Attack: 85,
      Defense: 85,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Eau Fish Pokémon",
    description:
      "Quagsire hunts for food by leaving its mouth wide open in eau and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
    evolution: {
      prev: ["194", "Level 20"],
    },
    profile: {
      height: "1.4 m",
      weight: "75 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Eau Absorb", "false"],
        ["Unaware", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/195.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/195.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/195.png",
    },
  },
  {
    id: 196,
    name: {
      english: "Espeon",
      japanese: "エーフィ",
      chinese: "太阳伊布",
      french: "Mentali",
    },
    type: ["Psy"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      Speed: 110,
    },
    species: "Sun Pokémon",
    description:
      "Psy power builds up in the orb on its forehead as it bathes in the sunshine. Espeon is not good at battling at night.",
    evolution: {
      prev: ["133", "high Friendship, Daytime"],
    },
    profile: {
      height: "0.9 m",
      weight: "26.5 kg",
      egg: ["Field"],
      ability: [
        ["Synchronize", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/196.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/196.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/196.png",
    },
  },
  {
    id: 197,
    name: {
      english: "Umbreon",
      japanese: "ブラッキー",
      chinese: "月亮伊布",
      french: "Noctali",
    },
    type: ["Ténèbres"],
    base: {
      HP: 95,
      Attack: 65,
      Defense: 110,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      Speed: 65,
    },
    species: "Moonlight Pokémon",
    description:
      "It lurks in the ténèbres of night looking for prey. At the moment it pounces, the rings on its body glow dimly but ominously.",
    evolution: {
      prev: ["133", "high Friendship, Nighttime"],
    },
    profile: {
      height: "1 m",
      weight: "27 kg",
      egg: ["Field"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/197.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/197.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/197.png",
    },
  },
  {
    id: 198,
    name: {
      english: "Murkrow",
      japanese: "ヤミカラス",
      chinese: "黑暗鸦",
      french: "Cornèbre",
    },
    type: ["Ténèbres", "Vol"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 42,
      "Sp. Attack": 85,
      "Sp. Defense": 42,
      Speed: 91,
    },
    species: "Ténèbresness Pokémon",
    description:
      "It searches for shiny things for its boss. Murkrow’s presence is said to be unlucky, so many people detest it.",
    evolution: {
      next: [["430", "use Dusk Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "2.1 kg",
      egg: ["Vol"],
      ability: [
        ["Insomnia", "false"],
        ["Super Luck", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/198.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/198.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/198.png",
    },
  },
  {
    id: 199,
    name: {
      english: "Slowking",
      japanese: "ヤドキング",
      chinese: "呆呆王",
      french: "Roigada",
    },
    type: ["Eau", "Psy"],
    base: {
      HP: 95,
      Attack: 75,
      Defense: 80,
      "Sp. Attack": 100,
      "Sp. Defense": 110,
      Speed: 30,
    },
    species: "Royal Pokémon",
    description:
      "It’s called “the sage of the sea.” It engages in battles of wits with Oranguru, but the result is usually a draw.",
    evolution: {
      prev: ["79", "trade holding Kings Roche"],
    },
    profile: {
      height: "2 m",
      weight: "79.5 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/199.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/199.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/199.png",
    },
  },
  {
    id: 200,
    name: {
      english: "Misdreavus",
      japanese: "ムウマ",
      chinese: "梦妖",
      french: "Feuforêve",
    },
    type: ["Fantôme"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 85,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Screech Pokémon",
    description:
      "What makes it happy is imitating the voglaces of weeping people and scaring everyone. It doesn’t deal well with folks who aren’t easily frightened.",
    evolution: {
      next: [["429", "use Dusk Stone"]],
    },
    profile: {
      height: "0.7 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/200.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/200.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/200.png",
    },
  },
  {
    id: 201,
    name: {
      english: "Unown",
      japanese: "アンノーン",
      chinese: "未知图腾",
      french: "Zarbi",
    },
    type: ["Psy"],
    base: {
      HP: 48,
      Attack: 72,
      Defense: 48,
      "Sp. Attack": 72,
      "Sp. Defense": 48,
      Speed: 48,
    },
    species: "Symbol Pokémon",
    description:
      "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "5 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/201.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/201.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/201.png",
    },
  },
  {
    id: 202,
    name: {
      english: "Wobbuffet",
      japanese: "ソーナンス",
      chinese: "果然翁",
      french: "Qulbutoké",
    },
    type: ["Psy"],
    base: {
      HP: 190,
      Attack: 33,
      Defense: 58,
      "Sp. Attack": 33,
      "Sp. Defense": 58,
      Speed: 33,
    },
    species: "Patient Pokémon",
    description:
      "Wobbuffet does nothing but endure attacks—it won’t attack on its own. However, it won’t endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.",
    evolution: {
      prev: ["360", "Level 15"],
    },
    profile: {
      height: "1.3 m",
      weight: "28.5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Shadow Tag", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/202.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/202.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/202.png",
    },
  },
  {
    id: 203,
    name: {
      english: "Girafarig",
      japanese: "キリンリキ",
      chinese: "麒麟奇",
      french: "Girafarig",
    },
    type: ["Normal", "Psy"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 65,
      "Sp. Attack": 90,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Long Neck Pokémon",
    description:
      "Girafarig’s rear head contains a tiny brain that is too small for thinking. However, the rear head doesn’t need to sleep, so it can keep watch over its surroundings 24 hours a day.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "41.5 kg",
      egg: ["Field"],
      ability: [
        ["Inner Focus", "false"],
        ["Early Bird", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/203.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/203.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/203.png",
    },
  },
  {
    id: 204,
    name: {
      english: "Pineco",
      japanese: "クヌギダマ",
      chinese: "榛果球",
      french: "Pomdepik",
    },
    type: ["Insecte"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 90,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 15,
    },
    species: "Bagworm Pokémon",
    description:
      "It sticks tree bark to itself with its saliva, making itself thicker and larger. Elderly Pineco are ridiculously huge.",
    evolution: {
      next: [["205", "Level 31"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.2 kg",
      egg: ["Insecte"],
      ability: [
        ["Sturdy", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/204.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/204.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/204.png",
    },
  },
  {
    id: 205,
    name: {
      english: "Forretress",
      japanese: "フォレトス",
      chinese: "佛烈托斯",
      french: "Foretress",
    },
    type: ["Insecte", "Acier"],
    base: {
      HP: 75,
      Attack: 90,
      Defense: 140,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 40,
    },
    species: "Bagworm Pokémon",
    description:
      "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight.",
    evolution: {
      prev: ["204", "Level 31"],
    },
    profile: {
      height: "1.2 m",
      weight: "125.8 kg",
      egg: ["Insecte"],
      ability: [
        ["Sturdy", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/205.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/205.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/205.png",
    },
  },
  {
    id: 206,
    name: {
      english: "Dunsparce",
      japanese: "ノコッチ",
      chinese: "土龙弟弟",
      french: "Insolourdo",
    },
    type: ["Normal"],
    base: {
      HP: 100,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Land Snake Pokémon",
    description:
      "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "14 kg",
      egg: ["Field"],
      ability: [
        ["Serene Grace", "false"],
        ["Run Away", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/206.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/206.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/206.png",
    },
  },
  {
    id: 207,
    name: {
      english: "Gligar",
      japanese: "グライガー",
      chinese: "天蝎",
      french: "Scorplane",
    },
    type: ["Sol", "Vol"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 105,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Fly Scorpion Pokémon",
    description:
      "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
    evolution: {
      next: [["472", "hold Razor Fang, Nighttime"]],
    },
    profile: {
      height: "1.1 m",
      weight: "64.8 kg",
      egg: ["Insecte"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Sand Veil", "false"],
        ["Immunity", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/207.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/207.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/207.png",
    },
  },
  {
    id: 208,
    name: {
      english: "Steelix",
      japanese: "ハガネール",
      chinese: "大钢蛇",
      french: "Steelix",
    },
    type: ["Acier", "Sol"],
    base: {
      HP: 75,
      Attack: 85,
      Defense: 200,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Iron Snake Pokémon",
    description:
      "Acierix lives even further undersol than Onix. This Pokémon is known to dig toward the earth’s core. There are records of this Pokémon reaching a depth of over six-tenths of a mile undersol.",
    evolution: {
      prev: ["95", "trade holding Metal Coat"],
    },
    profile: {
      height: "9.2 m",
      weight: "400 kg",
      egg: ["Mineral"],
      ability: [
        ["Roche Head", "false"],
        ["Sturdy", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/208.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/208.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/208.png",
    },
  },
  {
    id: 209,
    name: {
      english: "Snubbull",
      japanese: "ブルー",
      chinese: "布鲁",
      french: "Snubbull",
    },
    type: ["Fée"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "Fée Pokémon",
    description:
      "In contrast to its appearance, it’s quite timid. When playing with other puppy Pokémon, it sometimes gets bullied.",
    evolution: {
      next: [["210", "Level 23"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.8 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Intimidate", "false"],
        ["Run Away", "false"],
        ["Rattled", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/209.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/209.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/209.png",
    },
  },
  {
    id: 210,
    name: {
      english: "Granbull",
      japanese: "グランブル",
      chinese: "布鲁皇",
      french: "Granbull",
    },
    type: ["Fée"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Fée Pokémon",
    description:
      "Although it’s popular with young people, Granbull is timid and sensitive, so it’s totally incompetent as a watchdog.",
    evolution: {
      prev: ["209", "Level 23"],
    },
    profile: {
      height: "1.4 m",
      weight: "48.7 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Intimidate", "false"],
        ["Quick Feet", "false"],
        ["Rattled", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/210.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/210.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/210.png",
    },
  },
  {
    id: 211,
    name: {
      english: "Qwilfish",
      japanese: "ハリーセン",
      chinese: "千针鱼",
      french: "Qwilfish",
    },
    type: ["Eau", "Poison"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Balloon Pokémon",
    description:
      "Qwilfish sucks in eau, inflating itself. This Pokémon uses the pressure of the eau it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "3.9 kg",
      egg: ["Eau 2"],
      ability: [
        ["Poison Point", "false"],
        ["Swift Swim", "false"],
        ["Intimidate", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/211.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/211.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/211.png",
    },
  },
  {
    id: 212,
    name: {
      english: "Scizor",
      japanese: "ハッサム",
      chinese: "巨钳螳螂",
      french: "Cizayox",
    },
    type: ["Insecte", "Acier"],
    base: {
      HP: 70,
      Attack: 130,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 65,
    },
    species: "Pincer Pokémon",
    description:
      "Once it has identified something as an enemy, it will continue beating them with its acier-hard pincers until there’s nothing left but scraps.",
    evolution: {
      prev: ["123", "trade holding Metal Coat"],
    },
    profile: {
      height: "1.8 m",
      weight: "118 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "false"],
        ["Light Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/212.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/212.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/212.png",
    },
  },
  {
    id: 213,
    name: {
      english: "Shuckle",
      japanese: "ツボツボ",
      chinese: "壶壶",
      french: "Caratroc",
    },
    type: ["Insecte", "Roche"],
    base: {
      HP: 20,
      Attack: 10,
      Defense: 230,
      "Sp. Attack": 10,
      "Sp. Defense": 230,
      Speed: 5,
    },
    species: "Mold Pokémon",
    description:
      "Shuckle quietly hides itself under roches, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juglace.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "20.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Sturdy", "false"],
        ["Gluttony", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/213.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/213.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/213.png",
    },
  },
  {
    id: 214,
    name: {
      english: "Heracross",
      japanese: "ヘラクロス",
      chinese: "赫拉克罗斯",
      french: "Scarhino",
    },
    type: ["Insecte", "Combat"],
    base: {
      HP: 80,
      Attack: 125,
      Defense: 75,
      "Sp. Attack": 40,
      "Sp. Defense": 95,
      Speed: 85,
    },
    species: "Single Horn Pokémon",
    description:
      "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it’s not that good at vol.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "54 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Guts", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/214.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/214.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/214.png",
    },
  },
  {
    id: 215,
    name: {
      english: "Sneasel",
      japanese: "ニューラ",
      chinese: "狃拉",
      french: "Farfuret",
    },
    type: ["Ténèbres", "Glace"],
    base: {
      HP: 55,
      Attack: 95,
      Defense: 55,
      "Sp. Attack": 35,
      "Sp. Defense": 75,
      Speed: 115,
    },
    species: "Sharp Claw Pokémon",
    description:
      "It blends into the ténèbres of night to ambush its prey. Sneasel will attack Sandshrew, but its hard skin can cause Sneasel’s claws to snap off.",
    evolution: {
      next: [["461", "hold Razor Claw, Nighttime"]],
    },
    profile: {
      height: "0.9 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [
        ["Inner Focus", "false"],
        ["Keen Eye", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/215.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/215.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/215.png",
    },
  },
  {
    id: 216,
    name: {
      english: "Teddiursa",
      japanese: "ヒメグマ",
      chinese: "熊宝宝",
      french: "Teddiursa",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Little Bear Pokémon",
    description:
      "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
    evolution: {
      next: [["217", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8.8 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Quick Feet", "false"],
        ["Honey Gather", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/216.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/216.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/216.png",
    },
  },
  {
    id: 217,
    name: {
      english: "Ursaring",
      japanese: "リングマ",
      chinese: "圈圈熊",
      french: "Ursaring",
    },
    type: ["Normal"],
    base: {
      HP: 90,
      Attack: 130,
      Defense: 75,
      "Sp. Attack": 75,
      "Sp. Defense": 75,
      Speed: 55,
    },
    species: "Hibernator Pokémon",
    description:
      "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
    evolution: {
      prev: ["216", "Level 30"],
    },
    profile: {
      height: "1.8 m",
      weight: "125.8 kg",
      egg: ["Field"],
      ability: [
        ["Guts", "false"],
        ["Quick Feet", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/217.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/217.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/217.png",
    },
  },
  {
    id: 218,
    name: {
      english: "Slugma",
      japanese: "マグマッグ",
      chinese: "熔岩虫",
      french: "Limagma",
    },
    type: ["Feu"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 40,
      "Sp. Attack": 70,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "Lava Pokémon",
    description:
      "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon’s body, carrying essential nutrients and oxygen to its organs.",
    evolution: {
      next: [["219", "Level 38"]],
    },
    profile: {
      height: "0.7 m",
      weight: "35 kg",
      egg: ["Amorphous"],
      ability: [
        ["Magma Armor", "false"],
        ["Flame Body", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/218.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/218.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/218.png",
    },
  },
  {
    id: 219,
    name: {
      english: "Magcargo",
      japanese: "マグカルゴ",
      chinese: "熔岩蜗牛",
      french: "Volcaropod",
    },
    type: ["Feu", "Roche"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 120,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Lava Pokémon",
    description:
      "Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit. Eau is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
    evolution: {
      prev: ["218", "Level 38"],
    },
    profile: {
      height: "0.8 m",
      weight: "55 kg",
      egg: ["Amorphous"],
      ability: [
        ["Magma Armor", "false"],
        ["Flame Body", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/219.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/219.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/219.png",
    },
  },
  {
    id: 220,
    name: {
      english: "Swinub",
      japanese: "ウリムー",
      chinese: "小山猪",
      french: "Marcacrin",
    },
    type: ["Glace", "Sol"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 50,
    },
    species: "Pig Pokémon",
    description:
      "Swinub roots for food by rubbing its snout against the sol. Its favorite food is a mushroom that grows under the cover of dead plante. This Pokémon occasionally roots out hot springs.",
    evolution: {
      next: [["221", "Level 33"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/220.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/220.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/220.png",
    },
  },
  {
    id: 221,
    name: {
      english: "Piloswine",
      japanese: "イノムー",
      chinese: "长毛猪",
      french: "Cochignon",
    },
    type: ["Glace", "Sol"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Swine Pokémon",
    description:
      "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under glace.",
    evolution: {
      prev: ["220", "Level 33"],
      next: [["473", "after Ancient Power learned"]],
    },
    profile: {
      height: "1.1 m",
      weight: "55.8 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/221.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/221.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/221.png",
    },
  },
  {
    id: 222,
    name: {
      english: "Corsola",
      japanese: "サニーゴ",
      chinese: "太阳珊瑚",
      french: "Corayon",
    },
    type: ["Eau", "Roche"],
    base: {
      HP: 65,
      Attack: 55,
      Defense: 95,
      "Sp. Attack": 65,
      "Sp. Defense": 95,
      Speed: 35,
    },
    species: "Coral Pokémon",
    description:
      "In Alola, where their natural enemies Mareanie are plentiful, many Corsola have stubby branches on their heads.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "5 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Hustle", "false"],
        ["Natural Cure", "false"],
        ["Regenerator", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/222.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/222.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/222.png",
    },
  },
  {
    id: 223,
    name: {
      english: "Remoraid",
      japanese: "テッポウオ",
      chinese: "铁炮鱼",
      french: "Rémoraid",
    },
    type: ["Eau"],
    base: {
      HP: 35,
      Attack: 65,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 35,
      Speed: 65,
    },
    species: "Jet Pokémon",
    description:
      "Also known as the “sniper of the seas,” its eau gun can hit prey without fail from over 300 feet away.",
    evolution: {
      next: [["224", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12 kg",
      egg: ["Eau 1", "Eau 2"],
      ability: [
        ["Hustle", "false"],
        ["Sniper", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/223.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/223.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/223.png",
    },
  },
  {
    id: 224,
    name: {
      english: "Octillery",
      japanese: "オクタン",
      chinese: "章鱼桶",
      french: "Octillery",
    },
    type: ["Eau"],
    base: {
      HP: 75,
      Attack: 105,
      Defense: 75,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      Speed: 45,
    },
    species: "Jet Pokémon",
    description:
      "It usually sleeps in caves. The pitch-black ink that Octillery spits is also used for cooking.",
    evolution: {
      prev: ["223", "Level 25"],
    },
    profile: {
      height: "0.9 m",
      weight: "28.5 kg",
      egg: ["Eau 1", "Eau 2"],
      ability: [
        ["Suction Cups", "false"],
        ["Sniper", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/224.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/224.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/224.png",
    },
  },
  {
    id: 225,
    name: {
      english: "Delibird",
      japanese: "デリバード",
      chinese: "信使鸟",
      french: "Cadoizo",
    },
    type: ["Glace", "Vol"],
    base: {
      HP: 45,
      Attack: 55,
      Defense: 45,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 75,
    },
    species: "Delivery Pokémon",
    description:
      "It wraps food in its tail to carry it around. The Delibird with the biggest tail is the boss of the flock!",
    evolution: {},
    profile: {
      height: "0.9 m",
      weight: "16 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Hustle", "false"],
        ["Insomnia", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/225.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/225.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/225.png",
    },
  },
  {
    id: 226,
    name: {
      english: "Mantine",
      japanese: "マンタイン",
      chinese: "巨翅飞鱼",
      french: "Démanta",
    },
    type: ["Eau", "Vol"],
    base: {
      HP: 85,
      Attack: 40,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 140,
      Speed: 70,
    },
    species: "Kite Pokémon",
    description:
      "Many people have taken up surfing because they admire how magnifglacently Mantine swims.",
    evolution: {
      prev: ["458", "with Remoraid in party"],
    },
    profile: {
      height: "2.1 m",
      weight: "220 kg",
      egg: ["Eau 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Absorb", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/226.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/226.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/226.png",
    },
  },
  {
    id: 227,
    name: {
      english: "Skarmory",
      japanese: "エアームド",
      chinese: "盔甲鸟",
      french: "Airmure",
    },
    type: ["Acier", "Vol"],
    base: {
      HP: 65,
      Attack: 80,
      Defense: 140,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Armor Bird Pokémon",
    description:
      "Its body is draped in acier armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "50.5 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Sturdy", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/227.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/227.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/227.png",
    },
  },
  {
    id: 228,
    name: {
      english: "Houndour",
      japanese: "デルビル",
      chinese: "戴鲁比",
      french: "Malosse",
    },
    type: ["Ténèbres", "Feu"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 80,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Ténèbres Pokémon",
    description:
      "They make repeated eerie howls before dawn to call attention to their pack.",
    evolution: {
      next: [["229", "Level 24"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10.8 kg",
      egg: ["Field"],
      ability: [
        ["Early Bird", "false"],
        ["Flash Feu", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/228.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/228.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/228.png",
    },
  },
  {
    id: 229,
    name: {
      english: "Houndoom",
      japanese: "ヘルガー",
      chinese: "黑鲁加",
      french: "Démolosse",
    },
    type: ["Ténèbres", "Feu"],
    base: {
      HP: 75,
      Attack: 90,
      Defense: 50,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      Speed: 95,
    },
    species: "Ténèbres Pokémon",
    description:
      "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it.",
    evolution: {
      prev: ["228", "Level 24"],
    },
    profile: {
      height: "1.4 m",
      weight: "35 kg",
      egg: ["Field"],
      ability: [
        ["Early Bird", "false"],
        ["Flash Feu", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/229.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/229.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/229.png",
    },
  },
  {
    id: 230,
    name: {
      english: "Kingdra",
      japanese: "キングドラ",
      chinese: "刺龙王",
      french: "Hyporoi",
    },
    type: ["Eau", "Dragon"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      Speed: 85,
    },
    species: "Dragon Pokémon",
    description:
      "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.",
    evolution: {
      prev: ["117", "trade holding Dragon Scale"],
    },
    profile: {
      height: "1.8 m",
      weight: "152 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Swift Swim", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/230.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/230.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/230.png",
    },
  },
  {
    id: 231,
    name: {
      english: "Phanpy",
      japanese: "ゴマゾウ",
      chinese: "小小象",
      french: "Phanpy",
    },
    type: ["Sol"],
    base: {
      HP: 90,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 40,
    },
    species: "Long Nose Pokémon",
    description:
      "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with eau. These Pokémon can be seen drying their soaking-wet bodies at the edge of eau.",
    evolution: {
      next: [["232", "Level 25"]],
    },
    profile: {
      height: "0.5 m",
      weight: "33.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/231.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/231.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/231.png",
    },
  },
  {
    id: 232,
    name: {
      english: "Donphan",
      japanese: "ドンファン",
      chinese: "顿甲",
      french: "Donphan",
    },
    type: ["Sol"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Armor Pokémon",
    description:
      "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear roche and mud slides that block mountain trails.",
    evolution: {
      prev: ["231", "Level 25"],
    },
    profile: {
      height: "1.1 m",
      weight: "120 kg",
      egg: ["Field"],
      ability: [
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/232.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/232.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/232.png",
    },
  },
  {
    id: 233,
    name: {
      english: "Porygon2",
      japanese: "ポリゴン２",
      chinese: "多边兽Ⅱ",
      french: "Porygon2",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 105,
      "Sp. Defense": 95,
      Speed: 60,
    },
    species: "Virtual Pokémon",
    description:
      "Even though it doesn’t die in the vacuum of space, it can’t move around very well in zero gravity.",
    evolution: {
      prev: ["137", "trade holding Upgrade"],
      next: [["474", "trade holding Dubious Disc"]],
    },
    profile: {
      height: "0.6 m",
      weight: "32.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Trace", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/233.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/233.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/233.png",
    },
  },
  {
    id: 234,
    name: {
      english: "Stantler",
      japanese: "オドシシ",
      chinese: "惊角鹿",
      french: "Cerfrousse",
    },
    type: ["Normal"],
    base: {
      HP: 73,
      Attack: 95,
      Defense: 62,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Big Horn Pokémon",
    description:
      "Stantler’s magnifglacent antlers were traded at high prglaces as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the prglaceless antlers.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "71.2 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Frisk", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/234.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/234.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/234.png",
    },
  },
  {
    id: 235,
    name: {
      english: "Smeargle",
      japanese: "ドーブル",
      chinese: "图图犬",
      french: "Queulorior",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 20,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 45,
      Speed: 75,
    },
    species: "Painter Pokémon",
    description:
      "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "58 kg",
      egg: ["Field"],
      ability: [
        ["Own Tempo", "false"],
        ["Technician", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/235.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/235.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/235.png",
    },
  },
  {
    id: 236,
    name: {
      english: "Tyrogue",
      japanese: "バルキー",
      chinese: "无畏小子",
      french: "Deinsecteant",
    },
    type: ["Combat"],
    base: {
      HP: 35,
      Attack: 35,
      Defense: 35,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Scuffle Pokémon",
    description:
      "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
    evolution: {
      next: [
        ["106", "Level 20, Attack > Defense"],
        ["107", "Level 20, Attack < Defense"],
        ["237", "Level 20, Attack = Defense"],
      ],
    },
    profile: {
      height: "0.7 m",
      weight: "21 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Guts", "false"],
        ["Steadfast", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/236.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/236.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/236.png",
    },
  },
  {
    id: 237,
    name: {
      english: "Hitmontop",
      japanese: "カポエラー",
      chinese: "战舞郎",
      french: "Kapoera",
    },
    type: ["Combat"],
    base: {
      HP: 50,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 70,
    },
    species: "Handstand Pokémon",
    description:
      "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
    evolution: {
      prev: ["236", "Level 20, Attack = Defense"],
    },
    profile: {
      height: "1.4 m",
      weight: "48 kg",
      egg: ["Human-Like"],
      ability: [
        ["Intimidate", "false"],
        ["Technician", "false"],
        ["Steadfast", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/237.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/237.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/237.png",
    },
  },
  {
    id: 238,
    name: {
      english: "Smoochum",
      japanese: "ムチュール",
      chinese: "迷唇娃",
      french: "Lippouti",
    },
    type: ["Glace", "Psy"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 15,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 65,
    },
    species: "Kiss Pokémon",
    description:
      "Highly perceptive sensors, Smoochum’s lips are kept moist by its daily application of tree sap.",
    evolution: {
      next: [["124", "Level 30"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Oblivious", "false"],
        ["Forewarn", "false"],
        ["Hydration", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/238.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/238.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/238.png",
    },
  },
  {
    id: 239,
    name: {
      english: "Elekid",
      japanese: "エレキッド",
      chinese: "电击怪",
      french: "Élekid",
    },
    type: ["Electrique"],
    base: {
      HP: 45,
      Attack: 63,
      Defense: 37,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 95,
    },
    species: "Electrique Pokémon",
    description:
      "When its horns shine a bluish white, that’s the sign it’s fully charged. You’ll get a shocking jolt if you touch it!",
    evolution: {
      next: [["125", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "23.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Static", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/239.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/239.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/239.png",
    },
  },
  {
    id: 240,
    name: {
      english: "Magby",
      japanese: "ブビィ",
      chinese: "鸭嘴宝宝",
      french: "Magby",
    },
    type: ["Feu"],
    base: {
      HP: 45,
      Attack: 75,
      Defense: 37,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      Speed: 83,
    },
    species: "Live Coal Pokémon",
    description:
      "Its body temperature is always around 1,100 degrees Fahrenheit. If Magby falls into a small- enough pond, the whole thing will dry up.",
    evolution: {
      next: [["126", "Level 30"]],
    },
    profile: {
      height: "0.7 m",
      weight: "21.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/240.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/240.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/240.png",
    },
  },
  {
    id: 241,
    name: {
      english: "Miltank",
      japanese: "ミルタンク",
      chinese: "大奶罐",
      french: "Écrémeuh",
    },
    type: ["Normal"],
    base: {
      HP: 95,
      Attack: 80,
      Defense: 105,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 100,
    },
    species: "Milk Cow Pokémon",
    description:
      "Its milk is delicious and chock-full of nutrients. However, if you drink too much, it could make your stomach hurt, so be careful.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "75.5 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Scrappy", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/241.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/241.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/241.png",
    },
  },
  {
    id: 242,
    name: {
      english: "Blissey",
      japanese: "ハピナス",
      chinese: "幸福蛋",
      french: "Leuphorie",
    },
    type: ["Normal"],
    base: {
      HP: 255,
      Attack: 10,
      Defense: 10,
      "Sp. Attack": 75,
      "Sp. Defense": 135,
      Speed: 55,
    },
    species: "Happiness Pokémon",
    description:
      "This Pokémon is overflowing with love. Only Chansey that share a strong bond with their Trainer can evolve, so people say.",
    evolution: {
      prev: ["113", "high Friendship"],
    },
    profile: {
      height: "1.5 m",
      weight: "46.8 kg",
      egg: ["Fée"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Healer", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/242.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/242.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/242.png",
    },
  },
  {
    id: 243,
    name: {
      english: "Raikou",
      japanese: "ライコウ",
      chinese: "雷公",
      french: "Raikou",
    },
    type: ["Electrique"],
    base: {
      HP: 90,
      Attack: 85,
      Defense: 75,
      "Sp. Attack": 115,
      "Sp. Defense": 100,
      Speed: 115,
    },
    species: "Thunder Pokémon",
    description:
      "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the sol as if lightning bolts had come crashing down.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "178 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/243.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/243.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/243.png",
    },
  },
  {
    id: 244,
    name: {
      english: "Entei",
      japanese: "エンテイ",
      chinese: "炎帝",
      french: "Entei",
    },
    type: ["Feu"],
    base: {
      HP: 115,
      Attack: 115,
      Defense: 85,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      Speed: 100,
    },
    species: "Volcano Pokémon",
    description:
      "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of feu that utterly consume all that they touch.",
    evolution: {},
    profile: {
      height: "2.1 m",
      weight: "198 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/244.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/244.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/244.png",
    },
  },
  {
    id: 245,
    name: {
      english: "Suicune",
      japanese: "スイクン",
      chinese: "水君",
      french: "Suicune",
    },
    type: ["Eau"],
    base: {
      HP: 100,
      Attack: 75,
      Defense: 115,
      "Sp. Attack": 90,
      "Sp. Defense": 115,
      Speed: 85,
    },
    species: "Aurora Pokémon",
    description:
      "Suicune embodies the compassion of a pure spring of eau. It runs across the land with gracefulness. This Pokémon has the power to purify dirty eau.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "187 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/245.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/245.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/245.png",
    },
  },
  {
    id: 246,
    name: {
      english: "Larvitar",
      japanese: "ヨーギラス",
      chinese: "幼基拉斯",
      french: "Embrylex",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 50,
      Attack: 64,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      Speed: 41,
    },
    species: "Roche Skin Pokémon",
    description:
      "Raised on nutrients it finds in the dirt, it eats roughly a mountain’s worth of dirt before it becomes a pupa.",
    evolution: {
      next: [["247", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "72 kg",
      egg: ["Monster"],
      ability: [
        ["Guts", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/246.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/246.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/246.png",
    },
  },
  {
    id: 247,
    name: {
      english: "Pupitar",
      japanese: "サナギラス",
      chinese: "沙基拉斯",
      french: "Ymphect",
    },
    type: ["Roche", "Sol"],
    base: {
      HP: 70,
      Attack: 84,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 51,
    },
    species: "Hard Shell Pokémon",
    description:
      "This dangerous pupa thrashes about. Its shell is as hard as bedroche, containing its gradually forming new body within.",
    evolution: {
      prev: ["246", "Level 30"],
      next: [["248", "Level 55"]],
    },
    profile: {
      height: "1.2 m",
      weight: "152 kg",
      egg: ["Monster"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/247.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/247.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/247.png",
    },
  },
  {
    id: 248,
    name: {
      english: "Tyranitar",
      japanese: "バンギラス",
      chinese: "班基拉斯",
      french: "Tyranocif",
    },
    type: ["Roche", "Ténèbres"],
    base: {
      HP: 100,
      Attack: 134,
      Defense: 110,
      "Sp. Attack": 95,
      "Sp. Defense": 100,
      Speed: 61,
    },
    species: "Armor Pokémon",
    description:
      "This Pokémon is a mobile disaster, leaving mountains crumbled and houses destroyed in its wake.",
    evolution: {
      prev: ["247", "Level 55"],
    },
    profile: {
      height: "2 m",
      weight: "202 kg",
      egg: ["Monster"],
      ability: [
        ["Sand Stream", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/248.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/248.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/248.png",
    },
  },
  {
    id: 249,
    name: {
      english: "Lugia",
      japanese: "ルギア",
      chinese: "洛奇亚",
      french: "Lugia",
    },
    type: ["Psy", "Vol"],
    base: {
      HP: 106,
      Attack: 90,
      Defense: 130,
      "Sp. Attack": 90,
      "Sp. Defense": 154,
      Speed: 110,
    },
    species: "Diving Pokémon",
    description:
      "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    evolution: {},
    profile: {
      height: "5.2 m",
      weight: "216 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Multiscale", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/249.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/249.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/249.png",
    },
  },
  {
    id: 250,
    name: {
      english: "Ho-Oh",
      japanese: "ホウオウ",
      chinese: "凤王",
      french: "Ho-Oh",
    },
    type: ["Feu", "Vol"],
    base: {
      HP: 106,
      Attack: 130,
      Defense: 90,
      "Sp. Attack": 110,
      "Sp. Defense": 154,
      Speed: 90,
    },
    species: "Rainbow Pokémon",
    description:
      "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    evolution: {},
    profile: {
      height: "3.8 m",
      weight: "199 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Regenerator", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/250.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/250.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/250.png",
    },
  },
  {
    id: 251,
    name: {
      english: "Celebi",
      japanese: "セレビィ",
      chinese: "时拉比",
      french: "Celebi",
    },
    type: ["Psy", "Plante"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Time Travel Pokémon",
    description:
      "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "5 kg",
      egg: ["Undiscovered"],
      ability: [["Natural Cure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/251.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/251.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/251.png",
    },
  },
  {
    id: 252,
    name: {
      english: "Treecko",
      japanese: "キモリ",
      chinese: "木守宫",
      french: "Arcko",
    },
    type: ["Plante"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 70,
    },
    species: "Wood Gecko Pokémon",
    description:
      "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of sol.",
    evolution: {
      next: [["253", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/252.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/252.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/252.png",
    },
  },
  {
    id: 253,
    name: {
      english: "Grovyle",
      japanese: "ジュプトル",
      chinese: "森林蜥蜴",
      french: "Massko",
    },
    type: ["Plante"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 95,
    },
    species: "Wood Gecko Pokémon",
    description:
      "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
    evolution: {
      prev: ["252", "Level 16"],
      next: [["254", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "21.6 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/253.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/253.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/253.png",
    },
  },
  {
    id: 254,
    name: {
      english: "Sceptile",
      japanese: "ジュカイン",
      chinese: "蜥蜴王",
      french: "Jungko",
    },
    type: ["Plante"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 65,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      Speed: 120,
    },
    species: "Forest Pokémon",
    description:
      "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
    evolution: {
      prev: ["253", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "52.2 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/254.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/254.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/254.png",
    },
  },
  {
    id: 255,
    name: {
      english: "Torchic",
      japanese: "アチャモ",
      chinese: "火稚鸡",
      french: "Poussifeu",
    },
    type: ["Feu"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Chick Pokémon",
    description:
      "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
    evolution: {
      next: [["256", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "2.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/255.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/255.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/255.png",
    },
  },
  {
    id: 256,
    name: {
      english: "Combusken",
      japanese: "ワカシャモ",
      chinese: "力壮鸡",
      french: "Galifeu",
    },
    type: ["Feu", "Combat"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 85,
      "Sp. Defense": 60,
      Speed: 55,
    },
    species: "Young Fowl Pokémon",
    description:
      "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon’s cry is very loud and distracting.",
    evolution: {
      prev: ["255", "Level 16"],
      next: [["257", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/256.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/256.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/256.png",
    },
  },
  {
    id: 257,
    name: {
      english: "Blaziken",
      japanese: "バシャーモ",
      chinese: "火焰鸡",
      french: "Braségali",
    },
    type: ["Feu", "Combat"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 70,
      "Sp. Attack": 110,
      "Sp. Defense": 70,
      Speed: 80,
    },
    species: "Blaze Pokémon",
    description:
      "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.",
    evolution: {
      prev: ["256", "Level 36"],
    },
    profile: {
      height: "1.9 m",
      weight: "52 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/257.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/257.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/257.png",
    },
  },
  {
    id: 258,
    name: {
      english: "Mudkip",
      japanese: "ミズゴロウ",
      chinese: "水跃鱼",
      french: "Gobou",
    },
    type: ["Eau"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Mud Fish Pokémon",
    description:
      "In eau, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush roches bigger than itself.",
    evolution: {
      next: [["259", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.6 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/258.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/258.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/258.png",
    },
  },
  {
    id: 259,
    name: {
      english: "Marshtomp",
      japanese: "ヌマクロー",
      chinese: "沼跃鱼",
      french: "Flobio",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 50,
    },
    species: "Mud Fish Pokémon",
    description:
      "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon’s hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
    evolution: {
      prev: ["258", "Level 16"],
      next: [["260", "Level 36"]],
    },
    profile: {
      height: "0.7 m",
      weight: "28 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/259.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/259.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/259.png",
    },
  },
  {
    id: 260,
    name: {
      english: "Swampert",
      japanese: "ラグラージ",
      chinese: "巨沼怪",
      french: "Laggron",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 100,
      Attack: 110,
      Defense: 90,
      "Sp. Attack": 85,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Mud Fish Pokémon",
    description:
      "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
    evolution: {
      prev: ["259", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "81.9 kg",
      egg: ["Monster", "Eau 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/260.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/260.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/260.png",
    },
  },
  {
    id: 261,
    name: {
      english: "Poochyena",
      japanese: "ポチエナ",
      chinese: "土狼犬",
      french: "Medhyèna",
    },
    type: ["Ténèbres"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 35,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 35,
    },
    species: "Bite Pokémon",
    description:
      "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
    evolution: {
      next: [["262", "Level 18"]],
    },
    profile: {
      height: "0.5 m",
      weight: "13.6 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Quick Feet", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/261.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/261.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/261.png",
    },
  },
  {
    id: 262,
    name: {
      english: "Mightyena",
      japanese: "グラエナ",
      chinese: "大狼犬",
      french: "Grahyèna",
    },
    type: ["Ténèbres"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 70,
    },
    species: "Bite Pokémon",
    description:
      "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
    evolution: {
      prev: ["261", "Level 18"],
    },
    profile: {
      height: "1 m",
      weight: "37 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Quick Feet", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/262.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/262.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/262.png",
    },
  },
  {
    id: 263,
    name: {
      english: "Zigzagoon",
      japanese: "ジグザグマ",
      chinese: "蛇纹熊",
      french: "Zigzaton",
    },
    type: ["Normal"],
    base: {
      HP: 38,
      Attack: 30,
      Defense: 41,
      "Sp. Attack": 30,
      "Sp. Defense": 41,
      Speed: 60,
    },
    species: "Tiny Raccoon Pokémon",
    description:
      "The hair on Zigzagoon’s back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
    evolution: {
      next: [["264", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "17.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Gluttony", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/263.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/263.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/263.png",
    },
  },
  {
    id: 264,
    name: {
      english: "Linoone",
      japanese: "マッスグマ",
      chinese: "直冲熊",
      french: "Linéon",
    },
    type: ["Normal"],
    base: {
      HP: 78,
      Attack: 70,
      Defense: 61,
      "Sp. Attack": 50,
      "Sp. Defense": 61,
      Speed: 100,
    },
    species: "Rushing Pokémon",
    description:
      "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
    evolution: {
      prev: ["263", "Level 20"],
      next: [["862", "Level 35, Nighttime"]],
    },
    profile: {
      height: "0.5 m",
      weight: "32.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Gluttony", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/264.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/264.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/264.png",
    },
  },
  {
    id: 265,
    name: {
      english: "Wurmple",
      japanese: "ケムッソ",
      chinese: "刺尾虫",
      french: "Chenipotte",
    },
    type: ["Insecte"],
    base: {
      HP: 45,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 20,
    },
    species: "Worm Pokémon",
    description:
      "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
    evolution: {
      next: [
        ["266", "Level 7, random based on personality"],
        ["268", "Level 7, random based on personality"],
      ],
    },
    profile: {
      height: "0.3 m",
      weight: "3.6 kg",
      egg: ["Insecte"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/265.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/265.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/265.png",
    },
  },
  {
    id: 266,
    name: {
      english: "Silcoon",
      japanese: "カラサリス",
      chinese: "甲壳茧",
      french: "Armulys",
    },
    type: ["Insecte"],
    base: {
      HP: 50,
      Attack: 35,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Cocoon Pokémon",
    description:
      "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking raineau that collects on its silk.",
    evolution: {
      prev: ["265", "Level 7, random based on personality"],
      next: [["267", "Level 10"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10 kg",
      egg: ["Insecte"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/266.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/266.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/266.png",
    },
  },
  {
    id: 267,
    name: {
      english: "Beautifly",
      japanese: "アゲハント",
      chinese: "狩猎凤蝶",
      french: "Charmillon",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 100,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Butterfly Pokémon",
    description:
      "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.",
    evolution: {
      prev: ["266", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "28.4 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Rivalry", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/267.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/267.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/267.png",
    },
  },
  {
    id: 268,
    name: {
      english: "Cascoon",
      japanese: "マユルド",
      chinese: "盾甲茧",
      french: "Blindalys",
    },
    type: ["Insecte"],
    base: {
      HP: 50,
      Attack: 35,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Cocoon Pokémon",
    description:
      "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.",
    evolution: {
      prev: ["265", "Level 7, random based on personality"],
      next: [["269", "Level 10"]],
    },
    profile: {
      height: "0.7 m",
      weight: "11.5 kg",
      egg: ["Insecte"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/268.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/268.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/268.png",
    },
  },
  {
    id: 269,
    name: {
      english: "Dustox",
      japanese: "ドクケイル",
      chinese: "毒粉蛾",
      french: "Papinox",
    },
    type: ["Insecte", "Poison"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Poison Moth Pokémon",
    description:
      "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
    evolution: {
      prev: ["265", "Level 10"],
    },
    profile: {
      height: "1.2 m",
      weight: "31.6 kg",
      egg: ["Insecte"],
      ability: [
        ["Shield Dust", "false"],
        ["Compound Eyes", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/269.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/269.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/269.png",
    },
  },
  {
    id: 270,
    name: {
      english: "Lotad",
      japanese: "ハスボー",
      chinese: "莲叶童子",
      french: "Nénupiot",
    },
    type: ["Eau", "Plante"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 30,
    },
    species: "Eau Weed Pokémon",
    description:
      "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to eau because the leaf on its head grew large and heavy. It now lives by floating atop the eau.",
    evolution: {
      next: [["271", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "2.6 kg",
      egg: ["Eau 1", "Plante"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/270.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/270.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/270.png",
    },
  },
  {
    id: 271,
    name: {
      english: "Lombre",
      japanese: "ハスブレロ",
      chinese: "莲帽小童",
      french: "Lombre",
    },
    type: ["Eau", "Plante"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 50,
    },
    species: "Jolly Pokémon",
    description:
      "Lombre’s entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon’s hands. Lombre is often mistaken for a human child.",
    evolution: {
      prev: ["270", "Level 14"],
      next: [["272", "use Eau Stone"]],
    },
    profile: {
      height: "1.2 m",
      weight: "32.5 kg",
      egg: ["Eau 1", "Plante"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/271.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/271.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/271.png",
    },
  },
  {
    id: 272,
    name: {
      english: "Ludicolo",
      japanese: "ルンパッパ",
      chinese: "乐天河童",
      french: "Ludicolo",
    },
    type: ["Eau", "Plante"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Carefree Pokémon",
    description:
      "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo’s body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
    evolution: {
      prev: ["271", "use Eau Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "55 kg",
      egg: ["Eau 1", "Plante"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/272.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/272.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/272.png",
    },
  },
  {
    id: 273,
    name: {
      english: "Seedot",
      japanese: "タネボー",
      chinese: "橡实果",
      french: "Grainipiot",
    },
    type: ["Plante"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 30,
    },
    species: "Acorn Pokémon",
    description:
      "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.",
    evolution: {
      next: [["274", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "4 kg",
      egg: ["Field", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/273.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/273.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/273.png",
    },
  },
  {
    id: 274,
    name: {
      english: "Nuzleaf",
      japanese: "コノハナ",
      chinese: "长鼻叶",
      french: "Pifeuil",
    },
    type: ["Plante", "Ténèbres"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Wily Pokémon",
    description:
      "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf’s flute strikes fear and uncertainty in the hearts of people lost in a forest.",
    evolution: {
      prev: ["273", "Level 14"],
      next: [["275", "use Leaf Stone"]],
    },
    profile: {
      height: "1 m",
      weight: "28 kg",
      egg: ["Field", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/274.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/274.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/274.png",
    },
  },
  {
    id: 275,
    name: {
      english: "Shiftry",
      japanese: "ダーテング",
      chinese: "狡猾天狗",
      french: "Tengalglace",
    },
    type: ["Plante", "Ténèbres"],
    base: {
      HP: 90,
      Attack: 100,
      Defense: 60,
      "Sp. Attack": 90,
      "Sp. Defense": 60,
      Speed: 80,
    },
    species: "Wicked Pokémon",
    description:
      "Shiftry’s large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
    evolution: {
      prev: ["274", "use Leaf Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "59.6 kg",
      egg: ["Field", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/275.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/275.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/275.png",
    },
  },
  {
    id: 276,
    name: {
      english: "Taillow",
      japanese: "スバメ",
      chinese: "傲骨燕",
      french: "Nirondelle",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Tiny Swallow Pokémon",
    description:
      "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
    evolution: {
      next: [["277", "Level 22"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.3 kg",
      egg: ["Vol"],
      ability: [
        ["Guts", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/276.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/276.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/276.png",
    },
  },
  {
    id: 277,
    name: {
      english: "Swellow",
      japanese: "オオスバメ",
      chinese: "大王燕",
      french: "Hélédelle",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 50,
      Speed: 125,
    },
    species: "Swallow Pokémon",
    description:
      "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other’s wings.",
    evolution: {
      prev: ["276", "Level 22"],
    },
    profile: {
      height: "0.7 m",
      weight: "19.8 kg",
      egg: ["Vol"],
      ability: [
        ["Guts", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/277.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/277.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/277.png",
    },
  },
  {
    id: 278,
    name: {
      english: "Wingull",
      japanese: "キャモメ",
      chinese: "长翅鸥",
      french: "Goélise",
    },
    type: ["Eau", "Vol"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 55,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Seagull Pokémon",
    description:
      "It builds nests in cliffs by the sea. It circles the skies above the ocean looking for its favorite food—Wishiwashi.",
    evolution: {
      next: [["279", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.5 kg",
      egg: ["Eau 1", "Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Hydration", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/278.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/278.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/278.png",
    },
  },
  {
    id: 279,
    name: {
      english: "Pelipper",
      japanese: "ペリッパー",
      chinese: "大嘴鸥",
      french: "Bekipan",
    },
    type: ["Eau", "Vol"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 65,
    },
    species: "Eau Bird Pokémon",
    description:
      "It scoops up Wishiwashi in its huge beak and swallows them whole. It can devour more than 30 at one go!",
    evolution: {
      prev: ["278", "Level 25"],
    },
    profile: {
      height: "1.2 m",
      weight: "28 kg",
      egg: ["Eau 1", "Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Drizzle", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/279.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/279.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/279.png",
    },
  },
  {
    id: 280,
    name: {
      english: "Ralts",
      japanese: "ラルトス",
      chinese: "拉鲁拉丝",
      french: "Tarsal",
    },
    type: ["Psy", "Fée"],
    base: {
      HP: 28,
      Attack: 25,
      Defense: 25,
      "Sp. Attack": 45,
      "Sp. Defense": 35,
      Speed: 40,
    },
    species: "Feeling Pokémon",
    description:
      "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.",
    evolution: {
      next: [["281", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/280.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/280.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/280.png",
    },
  },
  {
    id: 281,
    name: {
      english: "Kirlia",
      japanese: "キルリア",
      chinese: "奇鲁莉安",
      french: "Kirlia",
    },
    type: ["Psy", "Fée"],
    base: {
      HP: 38,
      Attack: 35,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Emotion Pokémon",
    description:
      "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.",
    evolution: {
      prev: ["280", "Level 20"],
      next: [["282", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20.2 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/281.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/281.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/281.png",
    },
  },
  {
    id: 282,
    name: {
      english: "Gardevoir",
      japanese: "サーナイト",
      chinese: "沙奈朵",
      french: "Gardevoir",
    },
    type: ["Psy", "Fée"],
    base: {
      HP: 68,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 125,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Embrace Pokémon",
    description:
      "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
    evolution: {
      prev: ["281", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "48.4 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/282.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/282.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/282.png",
    },
  },
  {
    id: 283,
    name: {
      english: "Surskit",
      japanese: "アメタマ",
      chinese: "溜溜糖球",
      french: "Arakdo",
    },
    type: ["Insecte", "Eau"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 32,
      "Sp. Attack": 50,
      "Sp. Defense": 52,
      Speed: 65,
    },
    species: "Pond Skater Pokémon",
    description:
      "It lives in ponds and marshes that feature lots of plant life. It often fights with Dewpider, whose habitat and diet are similar.",
    evolution: {
      next: [["284", "Level 22"]],
    },
    profile: {
      height: "0.5 m",
      weight: "1.7 kg",
      egg: ["Eau 1", "Insecte"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/283.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/283.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/283.png",
    },
  },
  {
    id: 284,
    name: {
      english: "Masquerain",
      japanese: "アメモース",
      chinese: "雨翅蛾",
      french: "Maskadra",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 62,
      "Sp. Attack": 100,
      "Sp. Defense": 82,
      Speed: 80,
    },
    species: "Eyeball Pokémon",
    description:
      "Its thin, winglike antennae are highly absorbent. It waits out rainy days in tree hollows.",
    evolution: {
      prev: ["283", "Level 22"],
    },
    profile: {
      height: "0.8 m",
      weight: "3.6 kg",
      egg: ["Eau 1", "Insecte"],
      ability: [
        ["Intimidate", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/284.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/284.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/284.png",
    },
  },
  {
    id: 285,
    name: {
      english: "Shroomish",
      japanese: "キノココ",
      chinese: "蘑蘑菇",
      french: "Balignon",
    },
    type: ["Plante"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 35,
    },
    species: "Mushroom Pokémon",
    description:
      "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon’s spores are so toxic, they make trees and weeds wilt.",
    evolution: {
      next: [["286", "Level 23"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.5 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Effect Spore", "false"],
        ["Poison Heal", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/285.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/285.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/285.png",
    },
  },
  {
    id: 286,
    name: {
      english: "Breloom",
      japanese: "キノガッサ",
      chinese: "斗笠菇",
      french: "Chapignon",
    },
    type: ["Plante", "Combat"],
    base: {
      HP: 60,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 70,
    },
    species: "Mushroom Pokémon",
    description:
      "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
    evolution: {
      prev: ["285", "Level 23"],
    },
    profile: {
      height: "1.2 m",
      weight: "39.2 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Effect Spore", "false"],
        ["Poison Heal", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/286.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/286.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/286.png",
    },
  },
  {
    id: 287,
    name: {
      english: "Slakoth",
      japanese: "ナマケロ",
      chinese: "懒人獭",
      french: "Parecool",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 30,
    },
    species: "Slacker Pokémon",
    description:
      "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
    evolution: {
      next: [["288", "Level 18"]],
    },
    profile: {
      height: "0.8 m",
      weight: "24 kg",
      egg: ["Field"],
      ability: [["Truant", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/287.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/287.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/287.png",
    },
  },
  {
    id: 288,
    name: {
      english: "Vigoroth",
      japanese: "ヤルキモノ",
      chinese: "过动猿",
      french: "Vigoroth",
    },
    type: ["Normal"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Wild Monkey Pokémon",
    description:
      "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
    evolution: {
      prev: ["287", "Level 18"],
      next: [["289", "Level 36"]],
    },
    profile: {
      height: "1.4 m",
      weight: "46.5 kg",
      egg: ["Field"],
      ability: [["Vital Spirit", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/288.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/288.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/288.png",
    },
  },
  {
    id: 289,
    name: {
      english: "Slaking",
      japanese: "ケッキング",
      chinese: "请假王",
      french: "Monaflèmit",
    },
    type: ["Normal"],
    base: {
      HP: 150,
      Attack: 160,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 65,
      Speed: 100,
    },
    species: "Lazy Pokémon",
    description:
      "Wherever Slaking live, rings of over a yard in diameter appear in plantey fields. They are made by the Pokémon as it eats all the plante within reach while lying prone on the sol.",
    evolution: {
      prev: ["288", "Level 36"],
    },
    profile: {
      height: "2 m",
      weight: "130.5 kg",
      egg: ["Field"],
      ability: [["Truant", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/289.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/289.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/289.png",
    },
  },
  {
    id: 290,
    name: {
      english: "Nincada",
      japanese: "ツチニン",
      chinese: "土居忍士",
      french: "Ningale",
    },
    type: ["Insecte", "Sol"],
    base: {
      HP: 31,
      Attack: 45,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Trainee Pokémon",
    description:
      "Nincada lives undersol. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can’t withstand bright sunlight so avoids it.",
    evolution: {
      next: [
        ["291", "Level 20"],
        ["292", "Level 20, empty spot in party, Pokéball in bag"],
      ],
    },
    profile: {
      height: "0.5 m",
      weight: "5.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Compound Eyes", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/290.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/290.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/290.png",
    },
  },
  {
    id: 291,
    name: {
      english: "Ninjask",
      japanese: "テッカニン",
      chinese: "铁面忍者",
      french: "Ninjask",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 61,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 160,
    },
    species: "Ninja Pokémon",
    description:
      "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer’s abilities to the test.",
    evolution: {
      prev: ["290", "Level 20"],
    },
    profile: {
      height: "0.8 m",
      weight: "12 kg",
      egg: ["Insecte"],
      ability: [
        ["Speed Boost", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/291.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/291.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/291.png",
    },
  },
  {
    id: 292,
    name: {
      english: "Shedinja",
      japanese: "ヌケニン",
      chinese: "脱壳忍者",
      french: "Munja",
    },
    type: ["Insecte", "Fantôme"],
    base: {
      HP: 1,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Shed Pokémon",
    description:
      "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn’t even breathe.",
    evolution: {
      prev: ["290", "Level 20, empty spot in party, Pokéball in bag"],
    },
    profile: {
      height: "0.8 m",
      weight: "1.2 kg",
      egg: ["Mineral"],
      ability: [["Wonder Guard", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/292.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/292.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/292.png",
    },
  },
  {
    id: 293,
    name: {
      english: "Whismur",
      japanese: "ゴニョニョ",
      chinese: "咕妞妞",
      french: "Chuchmur",
    },
    type: ["Normal"],
    base: {
      HP: 64,
      Attack: 51,
      Defense: 23,
      "Sp. Attack": 51,
      "Sp. Defense": 23,
      Speed: 28,
    },
    species: "Whisper Pokémon",
    description:
      "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
    evolution: {
      next: [["294", "Level 20"]],
    },
    profile: {
      height: "0.6 m",
      weight: "16.3 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/293.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/293.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/293.png",
    },
  },
  {
    id: 294,
    name: {
      english: "Loudred",
      japanese: "ドゴーム",
      chinese: "吼爆弹",
      french: "Ramboum",
    },
    type: ["Normal"],
    base: {
      HP: 84,
      Attack: 71,
      Defense: 43,
      "Sp. Attack": 71,
      "Sp. Defense": 43,
      Speed: 48,
    },
    species: "Big Voglace Pokémon",
    description:
      "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
    evolution: {
      prev: ["293", "Level 20"],
      next: [["295", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "40.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/294.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/294.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/294.png",
    },
  },
  {
    id: 295,
    name: {
      english: "Exploud",
      japanese: "バクオング",
      chinese: "爆音怪",
      french: "Brouhabam",
    },
    type: ["Normal"],
    base: {
      HP: 104,
      Attack: 91,
      Defense: 63,
      "Sp. Attack": 91,
      "Sp. Defense": 73,
      Speed: 68,
    },
    species: "Loud Noise Pokémon",
    description:
      "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voglace when it is in battle.",
    evolution: {
      prev: ["294", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "84 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/295.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/295.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/295.png",
    },
  },
  {
    id: 296,
    name: {
      english: "Makuhita",
      japanese: "マクノシタ",
      chinese: "幕下力士",
      french: "Makuhita",
    },
    type: ["Combat"],
    base: {
      HP: 72,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 25,
    },
    species: "Guts Pokémon",
    description:
      "There’s a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita.",
    evolution: {
      next: [["297", "Level 24"]],
    },
    profile: {
      height: "1 m",
      weight: "86.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Thick Fat", "false"],
        ["Guts", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/296.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/296.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/296.png",
    },
  },
  {
    id: 297,
    name: {
      english: "Hariyama",
      japanese: "ハリテヤマ",
      chinese: "铁掌力士",
      french: "Hariyama",
    },
    type: ["Combat"],
    base: {
      HP: 144,
      Attack: 120,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Arm Thrust Pokémon",
    description:
      "Hariyama that are big and fat aren’t necessarily strong. There are some small ones that move nimbly and use moves skillfully.",
    evolution: {
      prev: ["296", "Level 24"],
    },
    profile: {
      height: "2.3 m",
      weight: "253.8 kg",
      egg: ["Human-Like"],
      ability: [
        ["Thick Fat", "false"],
        ["Guts", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/297.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/297.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/297.png",
    },
  },
  {
    id: 298,
    name: {
      english: "Azurill",
      japanese: "ルリリ",
      chinese: "露力丽",
      french: "Azurill",
    },
    type: ["Normal", "Fée"],
    base: {
      HP: 50,
      Attack: 20,
      Defense: 40,
      "Sp. Attack": 20,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "Polka Dot Pokémon",
    description:
      "Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
    evolution: {
      next: [["183", "high Friendship"]],
    },
    profile: {
      height: "0.2 m",
      weight: "2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/298.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/298.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/298.png",
    },
  },
  {
    id: 299,
    name: {
      english: "Nosepass",
      japanese: "ノズパス",
      chinese: "朝北鼻",
      french: "Tarinor",
    },
    type: ["Roche"],
    base: {
      HP: 30,
      Attack: 45,
      Defense: 135,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 30,
    },
    species: "Compass Pokémon",
    description:
      "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close.",
    evolution: {
      next: [["476", "level up in a Magnetic Field area"]],
    },
    profile: {
      height: "1 m",
      weight: "97 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Magnet Pull", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/299.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/299.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/299.png",
    },
  },
  {
    id: 300,
    name: {
      english: "Skitty",
      japanese: "エネコ",
      chinese: "向尾喵",
      french: "Skitty",
    },
    type: ["Normal"],
    base: {
      HP: 50,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 50,
    },
    species: "Kitten Pokémon",
    description:
      "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
    evolution: {
      next: [["301", "use Moon Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Normalize", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/300.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/300.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/300.png",
    },
  },
  {
    id: 301,
    name: {
      english: "Delcatty",
      japanese: "エネコロロ",
      chinese: "优雅猫",
      french: "Delcatty",
    },
    type: ["Normal"],
    base: {
      HP: 70,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Prim Pokémon",
    description:
      "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
    evolution: {
      prev: ["300", "use Moon Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "32.6 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Cute Charm", "false"],
        ["Normalize", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/301.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/301.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/301.png",
    },
  },
  {
    id: 302,
    name: {
      english: "Sableye",
      japanese: "ヤミラミ",
      chinese: "勾魂眼",
      french: "Ténéfix",
    },
    type: ["Ténèbres", "Fantôme"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 50,
    },
    species: "Ténèbresness Pokémon",
    description:
      "Materials from gems it has eaten float to the surface of its body and can form an infinite number of patterns among individuals.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "11 kg",
      egg: ["Human-Like"],
      ability: [
        ["Keen Eye", "false"],
        ["Stall", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/302.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/302.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/302.png",
    },
  },
  {
    id: 303,
    name: {
      english: "Mawile",
      japanese: "クチート",
      chinese: "大嘴娃",
      french: "Mysdibule",
    },
    type: ["Acier", "Fée"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Deceiver Pokémon",
    description:
      "It has two mouths. The big jaws on the back of its head can’t taste anything, so that’s the mouth it uses to eat foods it doesn’t like.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "11.5 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Intimidate", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/303.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/303.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/303.png",
    },
  },
  {
    id: 304,
    name: {
      english: "Aron",
      japanese: "ココドラ",
      chinese: "可可多拉",
      french: "Galekid",
    },
    type: ["Acier", "Roche"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 100,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "Iron Armor Pokémon",
    description:
      "Aron has a body of acier. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
    evolution: {
      next: [["305", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "60 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Roche Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/304.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/304.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/304.png",
    },
  },
  {
    id: 305,
    name: {
      english: "Lairon",
      japanese: "コドラ",
      chinese: "可多拉",
      french: "Galegon",
    },
    type: ["Acier", "Roche"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 140,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Iron Armor Pokémon",
    description:
      "Lairon feeds on iron contained in roches and eau. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
    evolution: {
      prev: ["304", "Level 32"],
      next: [["306", "Level 42"]],
    },
    profile: {
      height: "0.9 m",
      weight: "120 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Roche Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/305.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/305.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/305.png",
    },
  },
  {
    id: 306,
    name: {
      english: "Aggron",
      japanese: "ボスゴドラ",
      chinese: "波士可多拉",
      french: "Galeking",
    },
    type: ["Acier", "Roche"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 180,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Iron Armor Pokémon",
    description:
      "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a feu, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
    evolution: {
      prev: ["305", "Level 42"],
    },
    profile: {
      height: "2.1 m",
      weight: "360 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Roche Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/306.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/306.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/306.png",
    },
  },
  {
    id: 307,
    name: {
      english: "Meditite",
      japanese: "アサナン",
      chinese: "玛沙那",
      french: "Méditikka",
    },
    type: ["Combat", "Psy"],
    base: {
      HP: 30,
      Attack: 40,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 60,
    },
    species: "Meditate Pokémon",
    description:
      "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.",
    evolution: {
      next: [["308", "Level 37"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11.2 kg",
      egg: ["Human-Like"],
      ability: [
        ["Pure Power", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/307.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/307.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/307.png",
    },
  },
  {
    id: 308,
    name: {
      english: "Medicham",
      japanese: "チャーレム",
      chinese: "恰雷姆",
      french: "Charmina",
    },
    type: ["Combat", "Psy"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 80,
    },
    species: "Meditate Pokémon",
    description:
      "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
    evolution: {
      prev: ["307", "Level 37"],
    },
    profile: {
      height: "1.3 m",
      weight: "31.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Pure Power", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/308.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/308.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/308.png",
    },
  },
  {
    id: 309,
    name: {
      english: "Electrike",
      japanese: "ラクライ",
      chinese: "落雷兽",
      french: "Dynavolt",
    },
    type: ["Electrique"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 40,
      Speed: 65,
    },
    species: "Lightning Pokémon",
    description:
      "Static electriqueity builds up all over its body as strands of its long fur rub together. This Pokémon boasts incredible speed.",
    evolution: {
      next: [["310", "Level 26"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15.2 kg",
      egg: ["Field"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "false"],
        ["Minus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/309.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/309.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/309.png",
    },
  },
  {
    id: 310,
    name: {
      english: "Manectric",
      japanese: "ライボルト",
      chinese: "雷电兽",
      french: "Élecsprint",
    },
    type: ["Electrique"],
    base: {
      HP: 70,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Discharge Pokémon",
    description:
      "It stimulates its own muscles with electriqueity, so it can move quickly. It eases its soreness with electriqueity, too, so it can recover quickly as well.",
    evolution: {
      prev: ["309", "Level 26"],
    },
    profile: {
      height: "1.5 m",
      weight: "40.2 kg",
      egg: ["Field"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "false"],
        ["Minus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/310.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/310.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/310.png",
    },
  },
  {
    id: 311,
    name: {
      english: "Plusle",
      japanese: "プラスル",
      chinese: "正电拍拍",
      french: "Posipi",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Cheering Pokémon",
    description:
      "When Plusle is cheering on its partner, it flashes with electrique sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Fée"],
      ability: [
        ["Plus", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/311.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/311.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/311.png",
    },
  },
  {
    id: 312,
    name: {
      english: "Minun",
      japanese: "マイナン",
      chinese: "负电拍拍",
      french: "Négapi",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 95,
    },
    species: "Cheering Pokémon",
    description:
      "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Fée"],
      ability: [
        ["Minus", "false"],
        ["Volt Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/312.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/312.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/312.png",
    },
  },
  {
    id: 313,
    name: {
      english: "Volbeat",
      japanese: "バルビート",
      chinese: "电萤虫",
      french: "Muciole",
    },
    type: ["Insecte"],
    base: {
      HP: 65,
      Attack: 73,
      Defense: 75,
      "Sp. Attack": 47,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Feufly Pokémon",
    description:
      "Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    evolution: {},
    profile: {
      height: "0.7 m",
      weight: "17.7 kg",
      egg: ["Insecte", "Human-Like"],
      ability: [
        ["Illuminate", "false"],
        ["Swarm", "false"],
        ["Prankster", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/313.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/313.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/313.png",
    },
  },
  {
    id: 314,
    name: {
      english: "Illumise",
      japanese: "イルミーゼ",
      chinese: "甜甜萤",
      french: "Lumivole",
    },
    type: ["Insecte"],
    base: {
      HP: 65,
      Attack: 47,
      Defense: 75,
      "Sp. Attack": 73,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Feufly Pokémon",
    description:
      "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "17.7 kg",
      egg: ["Insecte", "Human-Like"],
      ability: [
        ["Oblivious", "false"],
        ["Tinted Lens", "false"],
        ["Prankster", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/314.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/314.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/314.png",
    },
  },
  {
    id: 315,
    name: {
      english: "Roselia",
      japanese: "ロゼリア",
      chinese: "毒蔷薇",
      french: "Rosélia",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 50,
      Attack: 60,
      Defense: 45,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 65,
    },
    species: "Thorn Pokémon",
    description:
      "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon’s head contain a vicious poison.",
    evolution: {
      prev: ["406", "high Friendship, Daytime"],
      next: [["407", "use Shiny Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Natural Cure", "false"],
        ["Poison Point", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/315.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/315.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/315.png",
    },
  },
  {
    id: 316,
    name: {
      english: "Gulpin",
      japanese: "ゴクリン",
      chinese: "溶食兽",
      french: "Gloupti",
    },
    type: ["Poison"],
    base: {
      HP: 70,
      Attack: 43,
      Defense: 53,
      "Sp. Attack": 43,
      "Sp. Defense": 53,
      Speed: 40,
    },
    species: "Stomach Pokémon",
    description:
      "Most of Gulpin’s body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon’s stomach contains special enzymes that dissolve anything.",
    evolution: {
      next: [["317", "Level 26"]],
    },
    profile: {
      height: "0.4 m",
      weight: "10.3 kg",
      egg: ["Amorphous"],
      ability: [
        ["Liquid Ooze", "false"],
        ["Sticky Hold", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/316.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/316.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/316.png",
    },
  },
  {
    id: 317,
    name: {
      english: "Swalot",
      japanese: "マルノーム",
      chinese: "吞食兽",
      french: "Avaltout",
    },
    type: ["Poison"],
    base: {
      HP: 100,
      Attack: 73,
      Defense: 83,
      "Sp. Attack": 73,
      "Sp. Defense": 83,
      Speed: 55,
    },
    species: "Poison Bag Pokémon",
    description:
      "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon’s mouth.",
    evolution: {
      prev: ["316", "Level 26"],
    },
    profile: {
      height: "1.7 m",
      weight: "80 kg",
      egg: ["Amorphous"],
      ability: [
        ["Liquid Ooze", "false"],
        ["Sticky Hold", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/317.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/317.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/317.png",
    },
  },
  {
    id: 318,
    name: {
      english: "Carvanha",
      japanese: "キバニア",
      chinese: "利牙鱼",
      french: "Carvanha",
    },
    type: ["Eau", "Ténèbres"],
    base: {
      HP: 45,
      Attack: 90,
      Defense: 20,
      "Sp. Attack": 65,
      "Sp. Defense": 20,
      Speed: 65,
    },
    species: "Savage Pokémon",
    description:
      "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food.",
    evolution: {
      next: [["319", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20.8 kg",
      egg: ["Eau 2"],
      ability: [
        ["Rough Skin", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/318.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/318.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/318.png",
    },
  },
  {
    id: 319,
    name: {
      english: "Sharpedo",
      japanese: "サメハダー",
      chinese: "巨牙鲨",
      french: "Sharpedo",
    },
    type: ["Eau", "Ténèbres"],
    base: {
      HP: 70,
      Attack: 120,
      Defense: 40,
      "Sp. Attack": 95,
      "Sp. Defense": 40,
      Speed: 95,
    },
    species: "Brutal Pokémon",
    description:
      "It drinks in seaeau and jets it from its rear to propel itself. It’s very sensitive to the scent of blood.",
    evolution: {
      prev: ["318", "Level 30"],
    },
    profile: {
      height: "1.8 m",
      weight: "88.8 kg",
      egg: ["Eau 2"],
      ability: [
        ["Rough Skin", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/319.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/319.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/319.png",
    },
  },
  {
    id: 320,
    name: {
      english: "Wailmer",
      japanese: "ホエルコ",
      chinese: "吼吼鲸",
      french: "Wailmer",
    },
    type: ["Eau"],
    base: {
      HP: 130,
      Attack: 70,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 35,
      Speed: 60,
    },
    species: "Ball Whale Pokémon",
    description:
      "Due to their memories of when they once lived on land, pods of them will, very rarely, wash up on shore.",
    evolution: {
      next: [["321", "Level 40"]],
    },
    profile: {
      height: "2 m",
      weight: "130 kg",
      egg: ["Field", "Eau 2"],
      ability: [
        ["Eau Veil", "false"],
        ["Oblivious", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/320.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/320.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/320.png",
    },
  },
  {
    id: 321,
    name: {
      english: "Wailord",
      japanese: "ホエルオー",
      chinese: "吼鲸王",
      french: "Wailord",
    },
    type: ["Eau"],
    base: {
      HP: 170,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 90,
      "Sp. Defense": 45,
      Speed: 60,
    },
    species: "Float Whale Pokémon",
    description:
      "When a small Wailmer is attacked by Sharpedo or Dhelmise, its whole pod works together to protect it.",
    evolution: {
      prev: ["320", "Level 40"],
    },
    profile: {
      height: "14.5 m",
      weight: "398 kg",
      egg: ["Field", "Eau 2"],
      ability: [
        ["Eau Veil", "false"],
        ["Oblivious", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/321.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/321.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/321.png",
    },
  },
  {
    id: 322,
    name: {
      english: "Numel",
      japanese: "ドンメル",
      chinese: "呆火驼",
      french: "Chamallot",
    },
    type: ["Feu", "Sol"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Numb Pokémon",
    description:
      "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon’s body grows heavy and its movements become sluggish.",
    evolution: {
      next: [["323", "Level 33"]],
    },
    profile: {
      height: "0.7 m",
      weight: "24 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Simple", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/322.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/322.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/322.png",
    },
  },
  {
    id: 323,
    name: {
      english: "Camerupt",
      japanese: "バクーダ",
      chinese: "喷火驼",
      french: "Camérupt",
    },
    type: ["Feu", "Sol"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Eruption Pokémon",
    description:
      "The humps on Camerupt’s back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
    evolution: {
      prev: ["322", "Level 33"],
    },
    profile: {
      height: "1.9 m",
      weight: "220 kg",
      egg: ["Field"],
      ability: [
        ["Magma Armor", "false"],
        ["Solid Roche", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/323.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/323.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/323.png",
    },
  },
  {
    id: 324,
    name: {
      english: "Torkoal",
      japanese: "コータス",
      chinese: "煤炭龟",
      french: "Chartor",
    },
    type: ["Feu"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 140,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      Speed: 20,
    },
    species: "Coal Pokémon",
    description:
      "It burns coal to produce energy. When it has burned through all of its coal, it becomes unable to move.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "80.4 kg",
      egg: ["Field"],
      ability: [
        ["White Smoke", "false"],
        ["Drought", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/324.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/324.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/324.png",
    },
  },
  {
    id: 325,
    name: {
      english: "Spoink",
      japanese: "バネブー",
      chinese: "跳跳猪",
      french: "Spoink",
    },
    type: ["Psy"],
    base: {
      HP: 60,
      Attack: 25,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Bounce Pokémon",
    description:
      "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon’s psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
    evolution: {
      next: [["326", "Level 32"]],
    },
    profile: {
      height: "0.7 m",
      weight: "30.6 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/325.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/325.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/325.png",
    },
  },
  {
    id: 326,
    name: {
      english: "Grumpig",
      japanese: "ブーピッグ",
      chinese: "噗噗猪",
      french: "Groret",
    },
    type: ["Psy"],
    base: {
      HP: 80,
      Attack: 45,
      Defense: 65,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      Speed: 80,
    },
    species: "Manipulate Pokémon",
    description:
      "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.",
    evolution: {
      prev: ["325", "Level 32"],
    },
    profile: {
      height: "0.9 m",
      weight: "71.5 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/326.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/326.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/326.png",
    },
  },
  {
    id: 327,
    name: {
      english: "Spinda",
      japanese: "パッチール",
      chinese: "晃晃斑",
      french: "Spinda",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Spot Panda Pokémon",
    description:
      "Each Spinda’s spot pattern is different. With its stumbling movements, it evades opponents’ attacks brilliantly!",
    evolution: {},
    profile: {
      height: "1.1 m",
      weight: "5 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Own Tempo", "false"],
        ["Tangled Feet", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/327.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/327.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/327.png",
    },
  },
  {
    id: 328,
    name: {
      english: "Trapinch",
      japanese: "ナックラー",
      chinese: "大颚蚁",
      french: "Kraknoix",
    },
    type: ["Sol"],
    base: {
      HP: 45,
      Attack: 100,
      Defense: 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 10,
    },
    species: "Ant Pit Pokémon",
    description:
      "It builds nests that double as traps, lying in wait for its prey to get caught. When night falls, it digs itself a spot beneath the sand to sleep.",
    evolution: {
      next: [["329", "Level 35"]],
    },
    profile: {
      height: "0.7 m",
      weight: "15 kg",
      egg: ["Insecte"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Arena Trap", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/328.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/328.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/328.png",
    },
  },
  {
    id: 329,
    name: {
      english: "Vibrava",
      japanese: "ビブラーバ",
      chinese: "超音波幼虫",
      french: "Vibraninf",
    },
    type: ["Sol", "Dragon"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 70,
    },
    species: "Vibration Pokémon",
    description:
      "It vibrates its wings to send out odd sound waves. Trainers who are with it need earplugs.",
    evolution: {
      prev: ["328", "Level 35"],
      next: [["330", "Level 45"]],
    },
    profile: {
      height: "1.1 m",
      weight: "15.3 kg",
      egg: ["Insecte"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/329.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/329.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/329.png",
    },
  },
  {
    id: 330,
    name: {
      english: "Flygon",
      japanese: "フライゴン",
      chinese: "沙漠蜻蜓",
      french: "Libégon",
    },
    type: ["Sol", "Dragon"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 100,
    },
    species: "Mystic Pokémon",
    description:
      "People continue to have their hearts stolen by its enchanting songs and find themselves stranded in the desert.",
    evolution: {
      prev: ["329", "Level 45"],
    },
    profile: {
      height: "2 m",
      weight: "82 kg",
      egg: ["Insecte"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/330.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/330.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/330.png",
    },
  },
  {
    id: 331,
    name: {
      english: "Cacnea",
      japanese: "サボネア",
      chinese: "刺球仙人掌",
      french: "Cacnea",
    },
    type: ["Plante"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 40,
      "Sp. Attack": 85,
      "Sp. Defense": 40,
      Speed: 35,
    },
    species: "Cactus Pokémon",
    description:
      "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
    evolution: {
      next: [["332", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "51.3 kg",
      egg: ["Plante", "Human-Like"],
      ability: [
        ["Sand Veil", "false"],
        ["Eau Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/331.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/331.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/331.png",
    },
  },
  {
    id: 332,
    name: {
      english: "Cacturne",
      japanese: "ノクタス",
      chinese: "梦歌仙人掌",
      french: "Cacturne",
    },
    type: ["Plante", "Ténèbres"],
    base: {
      HP: 70,
      Attack: 115,
      Defense: 60,
      "Sp. Attack": 115,
      "Sp. Defense": 60,
      Speed: 55,
    },
    species: "Scarecrow Pokémon",
    description:
      "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
    evolution: {
      prev: ["331", "Level 32"],
    },
    profile: {
      height: "1.3 m",
      weight: "77.4 kg",
      egg: ["Plante", "Human-Like"],
      ability: [
        ["Sand Veil", "false"],
        ["Eau Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/332.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/332.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/332.png",
    },
  },
  {
    id: 333,
    name: {
      english: "Swablu",
      japanese: "チルット",
      chinese: "青绵鸟",
      french: "Tylton",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 45,
      Attack: 40,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 75,
      Speed: 50,
    },
    species: "Cotton Bird Pokémon",
    description:
      "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
    evolution: {
      next: [["334", "Level 35"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.2 kg",
      egg: ["Vol", "Dragon"],
      ability: [
        ["Natural Cure", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/333.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/333.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/333.png",
    },
  },
  {
    id: 334,
    name: {
      english: "Altaria",
      japanese: "チルタリス",
      chinese: "七夕青鸟",
      french: "Altaria",
    },
    type: ["Dragon", "Vol"],
    base: {
      HP: 75,
      Attack: 70,
      Defense: 90,
      "Sp. Attack": 70,
      "Sp. Defense": 105,
      Speed: 80,
    },
    species: "Humming Pokémon",
    description:
      "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.",
    evolution: {
      prev: ["333", "Level 35"],
    },
    profile: {
      height: "1.1 m",
      weight: "20.6 kg",
      egg: ["Vol", "Dragon"],
      ability: [
        ["Natural Cure", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/334.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/334.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/334.png",
    },
  },
  {
    id: 335,
    name: {
      english: "Zangoose",
      japanese: "ザングース",
      chinese: "猫鼬斩",
      french: "Mangriff",
    },
    type: ["Normal"],
    base: {
      HP: 73,
      Attack: 115,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 90,
    },
    species: "Cat Ferret Pokémon",
    description:
      "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
    evolution: {},
    profile: {
      height: "1.3 m",
      weight: "40.3 kg",
      egg: ["Field"],
      ability: [
        ["Immunity", "false"],
        ["Toxic Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/335.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/335.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/335.png",
    },
  },
  {
    id: 336,
    name: {
      english: "Seviper",
      japanese: "ハブネーク",
      chinese: "饭匙蛇",
      french: "Séviper",
    },
    type: ["Poison"],
    base: {
      HP: 73,
      Attack: 100,
      Defense: 60,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      Speed: 65,
    },
    species: "Fang Snake Pokémon",
    description:
      "Seviper’s swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
    evolution: {},
    profile: {
      height: "2.7 m",
      weight: "52.5 kg",
      egg: ["Field", "Dragon"],
      ability: [
        ["Shed Skin", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/336.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/336.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/336.png",
    },
  },
  {
    id: 337,
    name: {
      english: "Lunatone",
      japanese: "ルナトーン",
      chinese: "月石",
      french: "Séléroc",
    },
    type: ["Roche", "Psy"],
    base: {
      HP: 90,
      Attack: 55,
      Defense: 65,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 70,
    },
    species: "Meteorite Pokémon",
    description:
      "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon’s intimidating red eyes cause all those who see it to become transfixed with fear.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "168 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/337.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/337.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/337.png",
    },
  },
  {
    id: 338,
    name: {
      english: "Solroche",
      japanese: "ソルロック",
      chinese: "太阳岩",
      french: "Solaroc",
    },
    type: ["Roche", "Psy"],
    base: {
      HP: 90,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 70,
    },
    species: "Meteorite Pokémon",
    description:
      "Sunlight is the source of Solroche’s power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "154 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/338.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/338.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/338.png",
    },
  },
  {
    id: 339,
    name: {
      english: "Barboach",
      japanese: "ドジョッチ",
      chinese: "泥泥鳅",
      french: "Barloche",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 50,
      Attack: 48,
      Defense: 43,
      "Sp. Attack": 46,
      "Sp. Defense": 41,
      Speed: 60,
    },
    species: "Whiskers Pokémon",
    description:
      "Its whiskers are filled with nerves. They can sense smells and flavors just as a person’s nose or tongue would.",
    evolution: {
      next: [["340", "Level 30"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.9 kg",
      egg: ["Eau 2"],
      ability: [
        ["Oblivious", "false"],
        ["Anticipation", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/339.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/339.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/339.png",
    },
  },
  {
    id: 340,
    name: {
      english: "Whiscash",
      japanese: "ナマズン",
      chinese: "鲶鱼王",
      french: "Barbicha",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 110,
      Attack: 78,
      Defense: 73,
      "Sp. Attack": 76,
      "Sp. Defense": 71,
      Speed: 60,
    },
    species: "Whiskers Pokémon",
    description:
      "Its vision is not that good. It senses vibrations in the eau with its whiskers to determine the location of its prey.",
    evolution: {
      prev: ["339", "Level 30"],
    },
    profile: {
      height: "0.9 m",
      weight: "23.6 kg",
      egg: ["Eau 2"],
      ability: [
        ["Oblivious", "false"],
        ["Anticipation", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/340.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/340.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/340.png",
    },
  },
  {
    id: 341,
    name: {
      english: "Corphish",
      japanese: "ヘイガニ",
      chinese: "龙虾小兵",
      french: "Écrapince",
    },
    type: ["Eau"],
    base: {
      HP: 43,
      Attack: 80,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Ruffian Pokémon",
    description:
      "It can adapt very well to its environment. Feebas and Corphish are about the only Pokémon to live in stagnant ditches.",
    evolution: {
      next: [["342", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11.5 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/341.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/341.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/341.png",
    },
  },
  {
    id: 342,
    name: {
      english: "Crawdaunt",
      japanese: "シザリガー",
      chinese: "铁螯龙虾",
      french: "Colhomard",
    },
    type: ["Eau", "Ténèbres"],
    base: {
      HP: 63,
      Attack: 120,
      Defense: 85,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      Speed: 55,
    },
    species: "Rogue Pokémon",
    description:
      "Its pincers often fall off. Unlike with Crabrawler or Clauncher, the meat in its claws is utterly nasty and stinking.",
    evolution: {
      prev: ["341", "Level 30"],
    },
    profile: {
      height: "1.1 m",
      weight: "32.8 kg",
      egg: ["Eau 1", "Eau 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/342.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/342.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/342.png",
    },
  },
  {
    id: 343,
    name: {
      english: "Baltoy",
      japanese: "ヤジロン",
      chinese: "天秤偶",
      french: "Balbuto",
    },
    type: ["Sol", "Psy"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Clay Doll Pokémon",
    description:
      "When they find others of their kind, they cry out loudly and gather together. Large numbers of them can be found in old graveyards.",
    evolution: {
      next: [["344", "Level 36"]],
    },
    profile: {
      height: "0.5 m",
      weight: "21.5 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/343.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/343.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/343.png",
    },
  },
  {
    id: 344,
    name: {
      english: "Claydol",
      japanese: "ネンドール",
      chinese: "念力土偶",
      french: "Kaorine",
    },
    type: ["Sol", "Psy"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 105,
      "Sp. Attack": 70,
      "Sp. Defense": 120,
      Speed: 75,
    },
    species: "Clay Doll Pokémon",
    description:
      "The ancient people who made it apparently modeled it after something that descended from the sky. It feus beams from both arms.",
    evolution: {
      prev: ["343", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "108 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/344.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/344.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/344.png",
    },
  },
  {
    id: 345,
    name: {
      english: "Lileep",
      japanese: "リリーラ",
      chinese: "触手百合",
      french: "Lilia",
    },
    type: ["Roche", "Plante"],
    base: {
      HP: 66,
      Attack: 41,
      Defense: 77,
      "Sp. Attack": 61,
      "Sp. Defense": 87,
      Speed: 23,
    },
    species: "Sea Lily Pokémon",
    description:
      "It sticks to roches with its powerful suckers and can’t be washed away no matter how rough the surf gets.",
    evolution: {
      next: [["346", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "23.8 kg",
      egg: ["Eau 3"],
      ability: [
        ["Suction Cups", "false"],
        ["Storm Drain", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/345.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/345.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/345.png",
    },
  },
  {
    id: 346,
    name: {
      english: "Cradily",
      japanese: "ユレイドル",
      chinese: "摇篮百合",
      french: "Vacilys",
    },
    type: ["Roche", "Plante"],
    base: {
      HP: 86,
      Attack: 81,
      Defense: 97,
      "Sp. Attack": 81,
      "Sp. Defense": 107,
      Speed: 43,
    },
    species: "Barnacle Pokémon",
    description:
      "This carnivorous Pokémon lived in primordial seas. It catches prey in its eight tentacles and dissolves them with digestive fluid as it eats.",
    evolution: {
      prev: ["345", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "60.4 kg",
      egg: ["Eau 3"],
      ability: [
        ["Suction Cups", "false"],
        ["Storm Drain", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/346.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/346.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/346.png",
    },
  },
  {
    id: 347,
    name: {
      english: "Anorith",
      japanese: "アノプス",
      chinese: "太古羽虫",
      french: "Anorith",
    },
    type: ["Roche", "Insecte"],
    base: {
      HP: 45,
      Attack: 95,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Old Shrimp Pokémon",
    description:
      "This is one kind of primeval insecte Pokémon. With eight wings, it could apparently swim a lot faster than you’d expect.",
    evolution: {
      next: [["348", "Level 40"]],
    },
    profile: {
      height: "0.7 m",
      weight: "12.5 kg",
      egg: ["Eau 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/347.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/347.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/347.png",
    },
  },
  {
    id: 348,
    name: {
      english: "Armaldo",
      japanese: "アーマルド",
      chinese: "太古盔甲",
      french: "Armaldo",
    },
    type: ["Roche", "Insecte"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 45,
    },
    species: "Plate Pokémon",
    description:
      "Armaldo adapted from living in eau to living on land. It has been determined that it is the ancestor of some insecte Pokémon.",
    evolution: {
      prev: ["347", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "68.2 kg",
      egg: ["Eau 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/348.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/348.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/348.png",
    },
  },
  {
    id: 349,
    name: {
      english: "Feebas",
      japanese: "ヒンバス",
      chinese: "丑丑鱼",
      french: "Barpau",
    },
    type: ["Eau"],
    base: {
      HP: 20,
      Attack: 15,
      Defense: 20,
      "Sp. Attack": 10,
      "Sp. Defense": 55,
      Speed: 80,
    },
    species: "Fish Pokémon",
    description:
      "Because of its wretched appearance, most people pay it no attention, but there are some who collect Feebas—and Feebas alone!",
    evolution: {
      next: [["350", "trade holding Prism Scale, or level up with max Beauty"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.4 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Swift Swim", "false"],
        ["Oblivious", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/349.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/349.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/349.png",
    },
  },
  {
    id: 350,
    name: {
      english: "Milotic",
      japanese: "ミロカロス",
      chinese: "美纳斯",
      french: "Milobellus",
    },
    type: ["Eau"],
    base: {
      HP: 95,
      Attack: 60,
      Defense: 79,
      "Sp. Attack": 100,
      "Sp. Defense": 125,
      Speed: 81,
    },
    species: "Tender Pokémon",
    description:
      "Its dwelling place is the bottom of big lakes. Those who behold its loveliness are said to have their hearts purified.",
    evolution: {
      prev: ["349", "trade holding Prism Scale, or level up with max Beauty"],
    },
    profile: {
      height: "6.2 m",
      weight: "162 kg",
      egg: ["Eau 1", "Dragon"],
      ability: [
        ["Marvel Scale", "false"],
        ["Competitive", "false"],
        ["Cute Charm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/350.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/350.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/350.png",
    },
  },
  {
    id: 351,
    name: {
      english: "Castform",
      japanese: "ポワルン",
      chinese: "飘浮泡泡",
      french: "Morphéo",
    },
    type: ["Normal"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Weather Pokémon",
    description:
      "Its form changes depending on the weather. The rougher conditions get, the rougher Castform’s disposition!",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.8 kg",
      egg: ["Fée", "Amorphous"],
      ability: [["Forecast", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/351.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/351.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/351.png",
    },
  },
  {
    id: 352,
    name: {
      english: "Kecleon",
      japanese: "カクレオン",
      chinese: "变隐龙",
      french: "Kecleon",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      Speed: 40,
    },
    species: "Color Swap Pokémon",
    description:
      "Its color changes for concealment and also when its mood or health changes. The ténèbreser the color, the healthier it is.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "22 kg",
      egg: ["Field"],
      ability: [
        ["Color Change", "false"],
        ["Protean", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/352.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/352.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/352.png",
    },
  },
  {
    id: 353,
    name: {
      english: "Shuppet",
      japanese: "カゲボウズ",
      chinese: "怨影娃娃",
      french: "Polichombr",
    },
    type: ["Fantôme"],
    base: {
      HP: 44,
      Attack: 75,
      Defense: 35,
      "Sp. Attack": 63,
      "Sp. Defense": 33,
      Speed: 45,
    },
    species: "Puppet Pokémon",
    description:
      "There’s a proverb that says, “Shun the house where Shuppet gather in the growing dusk.”",
    evolution: {
      next: [["354", "Level 37"]],
    },
    profile: {
      height: "0.6 m",
      weight: "2.3 kg",
      egg: ["Amorphous"],
      ability: [
        ["Insomnia", "false"],
        ["Frisk", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/353.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/353.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/353.png",
    },
  },
  {
    id: 354,
    name: {
      english: "Banette",
      japanese: "ジュペッタ",
      chinese: "诅咒娃娃",
      french: "Branette",
    },
    type: ["Fantôme"],
    base: {
      HP: 64,
      Attack: 115,
      Defense: 65,
      "Sp. Attack": 83,
      "Sp. Defense": 63,
      Speed: 65,
    },
    species: "Marionette Pokémon",
    description:
      "Resentment at being cast off made it spring into being. Some say that treating it well will satisfy it, and it will once more become a stuffed toy.",
    evolution: {
      prev: ["353", "Level 37"],
    },
    profile: {
      height: "1.1 m",
      weight: "12.5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Insomnia", "false"],
        ["Frisk", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/354.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/354.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/354.png",
    },
  },
  {
    id: 355,
    name: {
      english: "Duskull",
      japanese: "ヨマワル",
      chinese: "夜巡灵",
      french: "Skelénox",
    },
    type: ["Fantôme"],
    base: {
      HP: 20,
      Attack: 40,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 90,
      Speed: 25,
    },
    species: "Requiem Pokémon",
    description:
      "Duskull wanders lost among the deep ténèbresness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
    evolution: {
      next: [["356", "Level 37"]],
    },
    profile: {
      height: "0.8 m",
      weight: "15 kg",
      egg: ["Amorphous"],
      ability: [
        ["Levitate", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/355.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/355.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/355.png",
    },
  },
  {
    id: 356,
    name: {
      english: "Dusclops",
      japanese: "サマヨール",
      chinese: "彷徨夜灵",
      french: "Téraclope",
    },
    type: ["Fantôme"],
    base: {
      HP: 40,
      Attack: 70,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      Speed: 25,
    },
    species: "Beckon Pokémon",
    description:
      "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops’s bidding.",
    evolution: {
      prev: ["355", "Level 37"],
      next: [["477", "trade holding Reaper Cloth"]],
    },
    profile: {
      height: "1.6 m",
      weight: "30.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/356.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/356.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/356.png",
    },
  },
  {
    id: 357,
    name: {
      english: "Tropius",
      japanese: "トロピウス",
      chinese: "热带龙",
      french: "Tropius",
    },
    type: ["Plante", "Vol"],
    base: {
      HP: 99,
      Attack: 68,
      Defense: 83,
      "Sp. Attack": 72,
      "Sp. Defense": 87,
      Speed: 51,
    },
    species: "Fruit Pokémon",
    description:
      "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/357.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/357.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/357.png",
    },
  },
  {
    id: 358,
    name: {
      english: "Chimecho",
      japanese: "チリーン",
      chinese: "风铃铃",
      french: "Éoko",
    },
    type: ["Psy"],
    base: {
      HP: 75,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Wind Chime Pokémon",
    description:
      "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
    evolution: {
      prev: ["433", "high Friendship, Nighttime"],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/358.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/358.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/358.png",
    },
  },
  {
    id: 359,
    name: {
      english: "Absol",
      japanese: "アブソル",
      chinese: "阿勃梭鲁",
      french: "Absol",
    },
    type: ["Ténèbres"],
    base: {
      HP: 65,
      Attack: 130,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      Speed: 75,
    },
    species: "Disaster Pokémon",
    description:
      "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "47 kg",
      egg: ["Field"],
      ability: [
        ["Pressure", "false"],
        ["Super Luck", "false"],
        ["Justified", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/359.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/359.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/359.png",
    },
  },
  {
    id: 360,
    name: {
      english: "Wynaut",
      japanese: "ソーナノ",
      chinese: "小果然",
      french: "Okéoké",
    },
    type: ["Psy"],
    base: {
      HP: 95,
      Attack: 23,
      Defense: 48,
      "Sp. Attack": 23,
      "Sp. Defense": 48,
      Speed: 23,
    },
    species: "Bright Pokémon",
    description:
      "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
    evolution: {
      next: [["202", "Level 15"]],
    },
    profile: {
      height: "0.6 m",
      weight: "14 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Shadow Tag", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/360.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/360.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/360.png",
    },
  },
  {
    id: 361,
    name: {
      english: "Snorunt",
      japanese: "ユキワラシ",
      chinese: "雪童子",
      french: "Stalgamin",
    },
    type: ["Glace"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Snow Hat Pokémon",
    description:
      "Rich people from cold areas all share childhood memories of playing with Snorunt.",
    evolution: {
      next: [
        ["362", "Level 42"],
        ["478", "use Dawn Stone, Female"],
      ],
    },
    profile: {
      height: "0.7 m",
      weight: "16.8 kg",
      egg: ["Fée", "Mineral"],
      ability: [
        ["Inner Focus", "false"],
        ["Glace Body", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/361.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/361.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/361.png",
    },
  },
  {
    id: 362,
    name: {
      english: "Glalie",
      japanese: "オニゴーリ",
      chinese: "冰鬼护",
      french: "Oniglali",
    },
    type: ["Glace"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 80,
    },
    species: "Face Pokémon",
    description:
      "Its actual body is a roche that isn’t particularly hard. Glalie absorbs moisture from the air and drapes itself in an armor of glace.",
    evolution: {
      prev: ["361", "Level 42"],
    },
    profile: {
      height: "1.5 m",
      weight: "256.5 kg",
      egg: ["Fée", "Mineral"],
      ability: [
        ["Inner Focus", "false"],
        ["Glace Body", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/362.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/362.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/362.png",
    },
  },
  {
    id: 363,
    name: {
      english: "Spheal",
      japanese: "タマザラシ",
      chinese: "海豹球",
      french: "Obalie",
    },
    type: ["Glace", "Eau"],
    base: {
      HP: 70,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      Speed: 25,
    },
    species: "Clap Pokémon",
    description:
      "Spheal always travels by rolling around on its ball-like body. When the season for glace floes arrives, this Pokémon can be seen rolling about on glace and crossing the sea.",
    evolution: {
      next: [["364", "Level 32"]],
    },
    profile: {
      height: "0.8 m",
      weight: "39.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Glace Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/363.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/363.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/363.png",
    },
  },
  {
    id: 364,
    name: {
      english: "Sealeo",
      japanese: "トドグラー",
      chinese: "海魔狮",
      french: "Phogleur",
    },
    type: ["Glace", "Eau"],
    base: {
      HP: 90,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      Speed: 45,
    },
    species: "Ball Roll Pokémon",
    description:
      "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object’s aroma and texture to determine whether it likes the object or not.",
    evolution: {
      prev: ["363", "Level 32"],
      next: [["365", "Level 44"]],
    },
    profile: {
      height: "1.1 m",
      weight: "87.6 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Glace Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/364.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/364.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/364.png",
    },
  },
  {
    id: 365,
    name: {
      english: "Walrein",
      japanese: "トドゼルガ",
      chinese: "帝牙海狮",
      french: "Kaimorse",
    },
    type: ["Glace", "Eau"],
    base: {
      HP: 110,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Glace Break Pokémon",
    description:
      "Walrein swims all over in frigid seaeau while crushing glacebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.",
    evolution: {
      prev: ["364", "Level 44"],
    },
    profile: {
      height: "1.4 m",
      weight: "150.6 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Glace Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/365.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/365.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/365.png",
    },
  },
  {
    id: 366,
    name: {
      english: "Clamperl",
      japanese: "パールル",
      chinese: "珍珠贝",
      french: "Coquiperl",
    },
    type: ["Eau"],
    base: {
      HP: 35,
      Attack: 64,
      Defense: 85,
      "Sp. Attack": 74,
      "Sp. Defense": 55,
      Speed: 32,
    },
    species: "Bivalve Pokémon",
    description:
      "Clamperl’s pearls are exceedingly precious. They can be more than 10 times as costly as Shellder’s pearls.",
    evolution: {
      next: [
        ["367", "trade holding Deep Sea Tooth"],
        ["368", "trade holding Deep Sea Scale"],
      ],
    },
    profile: {
      height: "0.4 m",
      weight: "52.5 kg",
      egg: ["Eau 1"],
      ability: [
        ["Shell Armor", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/366.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/366.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/366.png",
    },
  },
  {
    id: 367,
    name: {
      english: "Huntail",
      japanese: "ハンテール",
      chinese: "猎斑鱼",
      french: "Serpang",
    },
    type: ["Eau"],
    base: {
      HP: 55,
      Attack: 104,
      Defense: 105,
      "Sp. Attack": 94,
      "Sp. Defense": 75,
      Speed: 52,
    },
    species: "Deep Sea Pokémon",
    description:
      "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen.",
    evolution: {
      prev: ["366", "trade holding Deep Sea Tooth"],
    },
    profile: {
      height: "1.7 m",
      weight: "27 kg",
      egg: ["Eau 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/367.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/367.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/367.png",
    },
  },
  {
    id: 368,
    name: {
      english: "Gorebyss",
      japanese: "サクラビス",
      chinese: "樱花鱼",
      french: "Rosabyss",
    },
    type: ["Eau"],
    base: {
      HP: 55,
      Attack: 84,
      Defense: 105,
      "Sp. Attack": 114,
      "Sp. Defense": 75,
      Speed: 52,
    },
    species: "South Sea Pokémon",
    description:
      "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon.",
    evolution: {
      prev: ["366", "trade holding Deep Sea Scale"],
    },
    profile: {
      height: "1.8 m",
      weight: "22.6 kg",
      egg: ["Eau 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/368.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/368.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/368.png",
    },
  },
  {
    id: 369,
    name: {
      english: "Relicanth",
      japanese: "ジーランス",
      chinese: "古空棘鱼",
      french: "Relicanth",
    },
    type: ["Eau", "Roche"],
    base: {
      HP: 100,
      Attack: 90,
      Defense: 130,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 55,
    },
    species: "Longevity Pokémon",
    description:
      "The reason it hasn’t changed at all in a hundred million years is that it’s apparently already a perfect life-form.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "23.4 kg",
      egg: ["Eau 1", "Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Roche Head", "false"],
        ["Sturdy", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/369.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/369.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/369.png",
    },
  },
  {
    id: 370,
    name: {
      english: "Luvdisc",
      japanese: "ラブカス",
      chinese: "爱心鱼",
      french: "Lovdisc",
    },
    type: ["Eau"],
    base: {
      HP: 43,
      Attack: 30,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      Speed: 97,
    },
    species: "Rendezvous Pokémon",
    description:
      "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola’s branches.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "8.7 kg",
      egg: ["Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/370.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/370.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/370.png",
    },
  },
  {
    id: 371,
    name: {
      english: "Bagon",
      japanese: "タツベイ",
      chinese: "宝贝龙",
      french: "Draby",
    },
    type: ["Dragon"],
    base: {
      HP: 45,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 30,
      Speed: 50,
    },
    species: "Roche Head Pokémon",
    description:
      "Some theories suggest that its behavior of forcefully bashing its head into things stimulates cells that affect its evolution.",
    evolution: {
      next: [["372", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "42.1 kg",
      egg: ["Dragon"],
      ability: [
        ["Roche Head", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/371.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/371.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/371.png",
    },
  },
  {
    id: 372,
    name: {
      english: "Shelgon",
      japanese: "コモルー",
      chinese: "甲壳龙",
      french: "Drackhaus",
    },
    type: ["Dragon"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 100,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Endurance Pokémon",
    description:
      "Shelgon lives deep within caves. It stays shut up in its hard shell, dreaming of the day it will be able to fly.",
    evolution: {
      prev: ["371", "Level 30"],
      next: [["373", "Level 50"]],
    },
    profile: {
      height: "1.1 m",
      weight: "110.5 kg",
      egg: ["Dragon"],
      ability: [
        ["Roche Head", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/372.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/372.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/372.png",
    },
  },
  {
    id: 373,
    name: {
      english: "Salamence",
      japanese: "ボーマンダ",
      chinese: "暴飞龙",
      french: "Drattak",
    },
    type: ["Dragon", "Vol"],
    base: {
      HP: 95,
      Attack: 135,
      Defense: 80,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      Speed: 100,
    },
    species: "Dragon Pokémon",
    description:
      "Thanks to its fervent wishes, the cells in its body finally mutated, and at last it has its heart’s desire—wings.",
    evolution: {
      prev: ["372", "Level 50"],
    },
    profile: {
      height: "1.5 m",
      weight: "102.6 kg",
      egg: ["Dragon"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/373.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/373.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/373.png",
    },
  },
  {
    id: 374,
    name: {
      english: "Beldum",
      japanese: "ダンバル",
      chinese: "铁哑铃",
      french: "Terhal",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 80,
      "Sp. Attack": 35,
      "Sp. Defense": 60,
      Speed: 30,
    },
    species: "Iron Ball Pokémon",
    description:
      "If you anger it, it will do more than rampage. It will also burst out strong magnetism, causing nearby machines to break.",
    evolution: {
      next: [["375", "Level 20"]],
    },
    profile: {
      height: "0.6 m",
      weight: "95.2 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/374.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/374.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/374.png",
    },
  },
  {
    id: 375,
    name: {
      english: "Metang",
      japanese: "メタング",
      chinese: "金属怪",
      french: "Métang",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 60,
      Attack: 75,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "Iron Claw Pokémon",
    description:
      "It flies at high speeds around the skies. When it finds its prey, Metang takes a firm grip with its sharp claws and never lets go.",
    evolution: {
      prev: ["374", "Level 20"],
      next: [["376", "Level 45"]],
    },
    profile: {
      height: "1.2 m",
      weight: "202.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/375.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/375.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/375.png",
    },
  },
  {
    id: 376,
    name: {
      english: "Metagross",
      japanese: "メタグロス",
      chinese: "巨金怪",
      french: "Métalosse",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 80,
      Attack: 135,
      Defense: 130,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 70,
    },
    species: "Iron Leg Pokémon",
    description:
      "It analyzes its opponents with more accuracy than a supercomputer, which enables it to calmly back them into a corner.",
    evolution: {
      prev: ["375", "Level 45"],
    },
    profile: {
      height: "1.6 m",
      weight: "550 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/376.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/376.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/376.png",
    },
  },
  {
    id: 377,
    name: {
      english: "Regiroche",
      japanese: "レジロック",
      chinese: "雷吉洛克",
      french: "Regiroche",
    },
    type: ["Roche"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 200,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Roche Peak Pokémon",
    description:
      "Regiroche’s body is composed entirely of roches. Recently, a study made the startling discovery that the roches were all unearthed from different locations.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "230 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Sturdy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/377.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/377.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/377.png",
    },
  },
  {
    id: 378,
    name: {
      english: "Regglace",
      japanese: "レジアイス",
      chinese: "雷吉艾斯",
      french: "Regglace",
    },
    type: ["Glace"],
    base: {
      HP: 80,
      Attack: 50,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 200,
      Speed: 50,
    },
    species: "Glaceberg Pokémon",
    description:
      "Regglace cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "175 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Glace Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/378.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/378.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/378.png",
    },
  },
  {
    id: 379,
    name: {
      english: "Regiacier",
      japanese: "レジスチル",
      chinese: "雷吉斯奇鲁",
      french: "Regiacier",
    },
    type: ["Acier"],
    base: {
      HP: 80,
      Attack: 75,
      Defense: 150,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      Speed: 50,
    },
    species: "Iron Pokémon",
    description:
      "Regiacier was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "205 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/379.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/379.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/379.png",
    },
  },
  {
    id: 380,
    name: {
      english: "Latias",
      japanese: "ラティアス",
      chinese: "拉帝亚斯",
      french: "Latias",
    },
    type: ["Dragon", "Psy"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      Speed: 110,
    },
    species: "Eon Pokémon",
    description:
      "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "40 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/380.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/380.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/380.png",
    },
  },
  {
    id: 381,
    name: {
      english: "Latios",
      japanese: "ラティオス",
      chinese: "拉帝欧斯",
      french: "Latios",
    },
    type: ["Dragon", "Psy"],
    base: {
      HP: 80,
      Attack: 90,
      Defense: 80,
      "Sp. Attack": 130,
      "Sp. Defense": 110,
      Speed: 110,
    },
    species: "Eon Pokémon",
    description:
      "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/381.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/381.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/381.png",
    },
  },
  {
    id: 382,
    name: {
      english: "Kyogre",
      japanese: "カイオーガ",
      chinese: "盖欧卡",
      french: "Kyogre",
    },
    type: ["Eau"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 90,
      "Sp. Attack": 150,
      "Sp. Defense": 140,
      Speed: 90,
    },
    species: "Sea Basin Pokémon",
    description:
      "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
    evolution: {},
    profile: {
      height: "4.5 m",
      weight: "352 kg",
      egg: ["Undiscovered"],
      ability: [["Drizzle", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/382.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/382.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/382.png",
    },
  },
  {
    id: 383,
    name: {
      english: "Groudon",
      japanese: "グラードン",
      chinese: "固拉多",
      french: "Groudon",
    },
    type: ["Sol"],
    base: {
      HP: 100,
      Attack: 150,
      Defense: 140,
      "Sp. Attack": 100,
      "Sp. Defense": 90,
      Speed: 90,
    },
    species: "Continent Pokémon",
    description:
      "Through Primal Reversion and with nature’s full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
    evolution: {},
    profile: {
      height: "3.5 m",
      weight: "950 kg",
      egg: ["Undiscovered"],
      ability: [["Drought", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/383.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/383.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/383.png",
    },
  },
  {
    id: 384,
    name: {
      english: "Rayquaza",
      japanese: "レックウザ",
      chinese: "烈空坐",
      french: "Rayquaza",
    },
    type: ["Dragon", "Vol"],
    base: {
      HP: 105,
      Attack: 150,
      Defense: 90,
      "Sp. Attack": 150,
      "Sp. Defense": 90,
      Speed: 95,
    },
    species: "Sky High Pokémon",
    description:
      "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
    evolution: {},
    profile: {
      height: "7 m",
      weight: "206.5 kg",
      egg: ["Undiscovered"],
      ability: [["Air Lock", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/384.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/384.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/384.png",
    },
  },
  {
    id: 385,
    name: {
      english: "Jirachi",
      japanese: "ジラーチ",
      chinese: "基拉祈",
      french: "Jirachi",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Wish Pokémon",
    description:
      "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voglace of purity. It is said to make true any wish that people desire.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "1.1 kg",
      egg: ["Undiscovered"],
      ability: [["Serene Grace", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/385.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/385.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/385.png",
    },
  },
  {
    id: 386,
    name: {
      english: "Deoxys",
      japanese: "デオキシス",
      chinese: "代欧奇希斯",
      french: "Deoxys",
    },
    type: ["Psy"],
    base: {
      HP: 50,
      Attack: 150,
      Defense: 50,
      "Sp. Attack": 150,
      "Sp. Defense": 50,
      Speed: 150,
    },
    species: "DNA Pokémon",
    description:
      "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "60.8 kg",
      egg: ["Undiscovered"],
      ability: [["Pressure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/386.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/386.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/386.png",
    },
  },
  {
    id: 387,
    name: {
      english: "Turtwig",
      japanese: "ナエトル",
      chinese: "草苗龟",
      french: "Tortipouss",
    },
    type: ["Plante"],
    base: {
      HP: 55,
      Attack: 68,
      Defense: 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 31,
    },
    species: "Tiny Leaf Pokémon",
    description:
      "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
    evolution: {
      next: [["388", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "10.2 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/387.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/387.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/387.png",
    },
  },
  {
    id: 388,
    name: {
      english: "Grotle",
      japanese: "ハヤシガメ",
      chinese: "树林龟",
      french: "Boskara",
    },
    type: ["Plante"],
    base: {
      HP: 75,
      Attack: 89,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 36,
    },
    species: "Grove Pokémon",
    description:
      "It knows where pure eau wells up. It carries fellow Pokémon there on its back.",
    evolution: {
      prev: ["387", "Level 18"],
      next: [["389", "Level 32"]],
    },
    profile: {
      height: "1.1 m",
      weight: "97 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/388.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/388.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/388.png",
    },
  },
  {
    id: 389,
    name: {
      english: "Torterra",
      japanese: "ドダイトス",
      chinese: "土台龟",
      french: "Torterra",
    },
    type: ["Plante", "Sol"],
    base: {
      HP: 95,
      Attack: 109,
      Defense: 105,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 56,
    },
    species: "Continent Pokémon",
    description:
      "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
    evolution: {
      prev: ["388", "Level 32"],
    },
    profile: {
      height: "2.2 m",
      weight: "310 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/389.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/389.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/389.png",
    },
  },
  {
    id: 390,
    name: {
      english: "Chimchar",
      japanese: "ヒコザル",
      chinese: "小火焰猴",
      french: "Ouisticram",
    },
    type: ["Feu"],
    base: {
      HP: 44,
      Attack: 58,
      Defense: 44,
      "Sp. Attack": 58,
      "Sp. Defense": 44,
      Speed: 61,
    },
    species: "Chimp Pokémon",
    description:
      "The gas made in its belly burns from its rear end. The feu burns weakly when it feels sick.",
    evolution: {
      next: [["391", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "6.2 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/390.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/390.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/390.png",
    },
  },
  {
    id: 391,
    name: {
      english: "Monferno",
      japanese: "モウカザル",
      chinese: "猛火猴",
      french: "Chimpenfeu",
    },
    type: ["Feu", "Combat"],
    base: {
      HP: 64,
      Attack: 78,
      Defense: 52,
      "Sp. Attack": 78,
      "Sp. Defense": 52,
      Speed: 81,
    },
    species: "Playful Pokémon",
    description:
      "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
    evolution: {
      prev: ["390", "Level 14"],
      next: [["392", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "22 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/391.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/391.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/391.png",
    },
  },
  {
    id: 392,
    name: {
      english: "Infernape",
      japanese: "ゴウカザル",
      chinese: "烈焰猴",
      french: "Simiabraz",
    },
    type: ["Feu", "Combat"],
    base: {
      HP: 76,
      Attack: 104,
      Defense: 71,
      "Sp. Attack": 104,
      "Sp. Defense": 71,
      Speed: 108,
    },
    species: "Flame Pokémon",
    description:
      "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
    evolution: {
      prev: ["391", "Level 36"],
    },
    profile: {
      height: "1.2 m",
      weight: "55 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/392.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/392.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/392.png",
    },
  },
  {
    id: 393,
    name: {
      english: "Piplup",
      japanese: "ポッチャマ",
      chinese: "波加曼",
      french: "Tiplouf",
    },
    type: ["Eau"],
    base: {
      HP: 53,
      Attack: 51,
      Defense: 53,
      "Sp. Attack": 61,
      "Sp. Defense": 56,
      Speed: 40,
    },
    species: "Penguin Pokémon",
    description:
      "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
    evolution: {
      next: [["394", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.2 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/393.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/393.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/393.png",
    },
  },
  {
    id: 394,
    name: {
      english: "Prinplup",
      japanese: "ポッタイシ",
      chinese: "波皇子",
      french: "Prinplouf",
    },
    type: ["Eau"],
    base: {
      HP: 64,
      Attack: 66,
      Defense: 68,
      "Sp. Attack": 81,
      "Sp. Defense": 76,
      Speed: 50,
    },
    species: "Penguin Pokémon",
    description:
      "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.",
    evolution: {
      prev: ["393", "Level 16"],
      next: [["395", "Level 36"]],
    },
    profile: {
      height: "0.8 m",
      weight: "23 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/394.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/394.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/394.png",
    },
  },
  {
    id: 395,
    name: {
      english: "Empoleon",
      japanese: "エンペルト",
      chinese: "帝王拿波",
      french: "Pingoléon",
    },
    type: ["Eau", "Acier"],
    base: {
      HP: 84,
      Attack: 86,
      Defense: 88,
      "Sp. Attack": 111,
      "Sp. Defense": 101,
      Speed: 60,
    },
    species: "Emperor Pokémon",
    description:
      "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
    evolution: {
      prev: ["394", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "84.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/395.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/395.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/395.png",
    },
  },
  {
    id: 396,
    name: {
      english: "Starly",
      japanese: "ムックル",
      chinese: "姆克儿",
      french: "Étourmi",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 60,
    },
    species: "Starling Pokémon",
    description:
      "They flock around mountains and fields, chasing after insecte Pokémon. Their singing is noisy and annoying.",
    evolution: {
      next: [["397", "Level 14"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/396.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/396.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/396.png",
    },
  },
  {
    id: 397,
    name: {
      english: "Staravia",
      japanese: "ムクバード",
      chinese: "姆克鸟",
      french: "Étourvol",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 55,
      Attack: 75,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 80,
    },
    species: "Starling Pokémon",
    description:
      "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
    evolution: {
      prev: ["396", "Level 14"],
      next: [["398", "Level 34"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15.5 kg",
      egg: ["Vol"],
      ability: [
        ["Intimidate", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/397.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/397.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/397.png",
    },
  },
  {
    id: 398,
    name: {
      english: "Staraptor",
      japanese: "ムクホーク",
      chinese: "姆克鹰",
      french: "Étouraptor",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 85,
      Attack: 120,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      Speed: 100,
    },
    species: "Predator Pokémon",
    description:
      "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
    evolution: {
      prev: ["397", "Level 34"],
    },
    profile: {
      height: "1.2 m",
      weight: "24.9 kg",
      egg: ["Vol"],
      ability: [
        ["Intimidate", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/398.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/398.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/398.png",
    },
  },
  {
    id: 399,
    name: {
      english: "Bidoof",
      japanese: "ビッパ",
      chinese: "大牙狸",
      french: "Keunotor",
    },
    type: ["Normal"],
    base: {
      HP: 59,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      Speed: 31,
    },
    species: "Plump Mouse Pokémon",
    description:
      "It constantly gnaws on logs and roches to whittle down its front teeth. It nests alongside eau.",
    evolution: {
      next: [["400", "Level 15"]],
    },
    profile: {
      height: "0.5 m",
      weight: "20 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Simple", "false"],
        ["Unaware", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/399.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/399.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/399.png",
    },
  },
  {
    id: 400,
    name: {
      english: "Bibarel",
      japanese: "ビーダル",
      chinese: "大尾狸",
      french: "Castorno",
    },
    type: ["Normal", "Eau"],
    base: {
      HP: 79,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      Speed: 71,
    },
    species: "Beaver Pokémon",
    description:
      "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
    evolution: {
      prev: ["399", "Level 15"],
    },
    profile: {
      height: "1 m",
      weight: "31.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Simple", "false"],
        ["Unaware", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/400.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/400.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/400.png",
    },
  },
  {
    id: 401,
    name: {
      english: "Kricketot",
      japanese: "コロボーシ",
      chinese: "圆法师",
      french: "Crikzik",
    },
    type: ["Insecte"],
    base: {
      HP: 37,
      Attack: 25,
      Defense: 41,
      "Sp. Attack": 25,
      "Sp. Defense": 41,
      Speed: 25,
    },
    species: "Cricket Pokémon",
    description:
      "When its antennae hit each other, it sounds like the music of a xylophone.",
    evolution: {
      next: [["402", "Level 10"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.2 kg",
      egg: ["Insecte"],
      ability: [
        ["Shed Skin", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/401.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/401.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/401.png",
    },
  },
  {
    id: 402,
    name: {
      english: "Kricketune",
      japanese: "コロトック",
      chinese: "音箱蟀",
      french: "Mélokrik",
    },
    type: ["Insecte"],
    base: {
      HP: 77,
      Attack: 85,
      Defense: 51,
      "Sp. Attack": 55,
      "Sp. Defense": 51,
      Speed: 65,
    },
    species: "Cricket Pokémon",
    description:
      "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
    evolution: {
      prev: ["401", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "25.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/402.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/402.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/402.png",
    },
  },
  {
    id: 403,
    name: {
      english: "Shinx",
      japanese: "コリンク",
      chinese: "小猫怪",
      french: "Lixy",
    },
    type: ["Electrique"],
    base: {
      HP: 45,
      Attack: 65,
      Defense: 34,
      "Sp. Attack": 40,
      "Sp. Defense": 34,
      Speed: 45,
    },
    species: "Flash Pokémon",
    description:
      "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
    evolution: {
      next: [["404", "Level 15"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/403.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/403.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/403.png",
    },
  },
  {
    id: 404,
    name: {
      english: "Luxio",
      japanese: "ルクシオ",
      chinese: "勒克猫",
      french: "Luxio",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 49,
      "Sp. Attack": 60,
      "Sp. Defense": 49,
      Speed: 60,
    },
    species: "Spark Pokémon",
    description:
      "Strong electriqueity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
    evolution: {
      prev: ["403", "Level 15"],
      next: [["405", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "30.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/404.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/404.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/404.png",
    },
  },
  {
    id: 405,
    name: {
      english: "Luxray",
      japanese: "レントラー",
      chinese: "伦琴猫",
      french: "Luxray",
    },
    type: ["Electrique"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 79,
      "Sp. Attack": 95,
      "Sp. Defense": 79,
      Speed: 70,
    },
    species: "Gleam Eyes Pokémon",
    description:
      "Luxray’s ability to see through objects comes in handy when it’s scouting for danger.",
    evolution: {
      prev: ["404", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "42 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/405.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/405.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/405.png",
    },
  },
  {
    id: 406,
    name: {
      english: "Budew",
      japanese: "スボミー",
      chinese: "含羞苞",
      french: "Rozbouton",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Bud Pokémon",
    description:
      "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
    evolution: {
      next: [["315", "high Friendship, Daytime"]],
    },
    profile: {
      height: "0.2 m",
      weight: "1.2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Natural Cure", "false"],
        ["Poison Point", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/406.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/406.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/406.png",
    },
  },
  {
    id: 407,
    name: {
      english: "Roserade",
      japanese: "ロズレイド",
      chinese: "罗丝雷朵",
      french: "Roserade",
    },
    type: ["Plante", "Poison"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 65,
      "Sp. Attack": 125,
      "Sp. Defense": 105,
      Speed: 90,
    },
    species: "Bouquet Pokémon",
    description:
      "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
    evolution: {
      prev: ["315", "use Shiny Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "14.5 kg",
      egg: ["Fée", "Plante"],
      ability: [
        ["Natural Cure", "false"],
        ["Poison Point", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/407.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/407.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/407.png",
    },
  },
  {
    id: 408,
    name: {
      english: "Cranidos",
      japanese: "ズガイドス",
      chinese: "头盖龙",
      french: "Kranidos",
    },
    type: ["Roche"],
    base: {
      HP: 67,
      Attack: 125,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 58,
    },
    species: "Head Butt Pokémon",
    description:
      "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries.",
    evolution: {
      next: [["409", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "31.5 kg",
      egg: ["Monster"],
      ability: [
        ["Mold Breaker", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/408.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/408.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/408.png",
    },
  },
  {
    id: 409,
    name: {
      english: "Rampardos",
      japanese: "ラムパルド",
      chinese: "战槌龙",
      french: "Charkos",
    },
    type: ["Roche"],
    base: {
      HP: 97,
      Attack: 165,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 58,
    },
    species: "Head Butt Pokémon",
    description:
      "This ancient Pokémon used headbutts skillfully. Its brain was really small, so some theories suggest that its stupidity led to its extinction.",
    evolution: {
      prev: ["408", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "102.5 kg",
      egg: ["Monster"],
      ability: [
        ["Mold Breaker", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/409.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/409.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/409.png",
    },
  },
  {
    id: 410,
    name: {
      english: "Shieldon",
      japanese: "タテトプス",
      chinese: "盾甲龙",
      french: "Dinoclier",
    },
    type: ["Roche", "Acier"],
    base: {
      HP: 30,
      Attack: 42,
      Defense: 118,
      "Sp. Attack": 42,
      "Sp. Defense": 88,
      Speed: 30,
    },
    species: "Shield Pokémon",
    description:
      "Although its fossils can be found in layers of primeval roche, nothing but its face has ever been discovered.",
    evolution: {
      next: [["411", "Level 30"]],
    },
    profile: {
      height: "0.5 m",
      weight: "57 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Soundproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/410.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/410.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/410.png",
    },
  },
  {
    id: 411,
    name: {
      english: "Bastiodon",
      japanese: "トリデプス",
      chinese: "护城龙",
      french: "Bastiodon",
    },
    type: ["Roche", "Acier"],
    base: {
      HP: 60,
      Attack: 52,
      Defense: 168,
      "Sp. Attack": 47,
      "Sp. Defense": 138,
      Speed: 30,
    },
    species: "Shield Pokémon",
    description:
      "This Pokémon is from roughly 100 million years ago. Its terrifyingly tough face is harder than acier.",
    evolution: {
      prev: ["410", "Level 30"],
    },
    profile: {
      height: "1.3 m",
      weight: "149.5 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Soundproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/411.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/411.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/411.png",
    },
  },
  {
    id: 412,
    name: {
      english: "Burmy",
      japanese: "ミノムッチ",
      chinese: "结草儿",
      french: "Cheniti",
    },
    type: ["Insecte"],
    base: {
      HP: 40,
      Attack: 29,
      Defense: 45,
      "Sp. Attack": 29,
      "Sp. Defense": 45,
      Speed: 36,
    },
    species: "Bagworm Pokémon",
    description:
      "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
    evolution: {
      next: [
        ["413", "Level 20, Female"],
        ["414", "Level 20, Male"],
      ],
    },
    profile: {
      height: "0.2 m",
      weight: "3.4 kg",
      egg: ["Insecte"],
      ability: [
        ["Shed Skin", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/412.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/412.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/412.png",
    },
  },
  {
    id: 413,
    name: {
      english: "Wormadam",
      japanese: "ミノマダム",
      chinese: "结草贵妇",
      french: "Cheniselle",
    },
    type: ["Insecte", "Plante"],
    base: {
      HP: 60,
      Attack: 59,
      Defense: 85,
      "Sp. Attack": 79,
      "Sp. Defense": 105,
      Speed: 36,
    },
    species: "Bagworm Pokémon",
    description:
      "When Burmy evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.",
    evolution: {
      prev: ["412", "Level 20, Female"],
    },
    profile: {
      height: "0.5 m",
      weight: "6.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Anticipation", "false"],
        ["Overcoat", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/413.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/413.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/413.png",
    },
  },
  {
    id: 414,
    name: {
      english: "Mothim",
      japanese: "ガーメイル",
      chinese: "绅士蛾",
      french: "Papilord",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 70,
      Attack: 94,
      Defense: 50,
      "Sp. Attack": 94,
      "Sp. Defense": 50,
      Speed: 66,
    },
    species: "Moth Pokémon",
    description:
      "It flutters around at night and steals honey from the Combee hive.",
    evolution: {
      prev: ["412", "Level 20, Male"],
    },
    profile: {
      height: "0.9 m",
      weight: "23.3 kg",
      egg: ["Insecte"],
      ability: [
        ["Swarm", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/414.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/414.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/414.png",
    },
  },
  {
    id: 415,
    name: {
      english: "Combee",
      japanese: "ミツハニー",
      chinese: "三蜜蜂",
      french: "Apitrini",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 30,
      Attack: 30,
      Defense: 42,
      "Sp. Attack": 30,
      "Sp. Defense": 42,
      Speed: 70,
    },
    species: "Tiny Bee Pokémon",
    description:
      "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
    evolution: {
      next: [["416", "Level 21, Female"]],
    },
    profile: {
      height: "0.3 m",
      weight: "5.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Honey Gather", "false"],
        ["Hustle", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/415.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/415.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/415.png",
    },
  },
  {
    id: 416,
    name: {
      english: "Vespiquen",
      japanese: "ビークイン",
      chinese: "蜂女王",
      french: "Apireine",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 102,
      "Sp. Attack": 80,
      "Sp. Defense": 102,
      Speed: 40,
    },
    species: "Beehive Pokémon",
    description:
      "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
    evolution: {
      prev: ["415", "Level 21, Female"],
    },
    profile: {
      height: "1.2 m",
      weight: "38.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/416.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/416.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/416.png",
    },
  },
  {
    id: 417,
    name: {
      english: "Pachirisu",
      japanese: "パチリス",
      chinese: "帕奇利兹",
      french: "Pachirisu",
    },
    type: ["Electrique"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 70,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 95,
    },
    species: "EleSquirrel Pokémon",
    description:
      "A pair may be seen rubbing their cheek pouches together in an effort to share stored electriqueity.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "3.9 kg",
      egg: ["Field", "Fée"],
      ability: [
        ["Run Away", "false"],
        ["Pickup", "false"],
        ["Volt Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/417.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/417.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/417.png",
    },
  },
  {
    id: 418,
    name: {
      english: "Buizel",
      japanese: "ブイゼル",
      chinese: "泳圈鼬",
      french: "Mustébouée",
    },
    type: ["Eau"],
    base: {
      HP: 55,
      Attack: 65,
      Defense: 35,
      "Sp. Attack": 60,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Sea Weasel Pokémon",
    description:
      "It inflates the flotation sac around its neck and pokes its head out of the eau to see what is going on.",
    evolution: {
      next: [["419", "Level 26"]],
    },
    profile: {
      height: "0.7 m",
      weight: "29.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/418.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/418.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/418.png",
    },
  },
  {
    id: 419,
    name: {
      english: "Floatzel",
      japanese: "フローゼル",
      chinese: "浮潜鼬",
      french: "Mustéflott",
    },
    type: ["Eau"],
    base: {
      HP: 85,
      Attack: 105,
      Defense: 55,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      Speed: 115,
    },
    species: "Sea Weasel Pokémon",
    description:
      "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
    evolution: {
      prev: ["418", "Level 26"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.5 kg",
      egg: ["Eau 1", "Field"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/419.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/419.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/419.png",
    },
  },
  {
    id: 420,
    name: {
      english: "Cherubi",
      japanese: "チェリンボ",
      chinese: "樱花宝",
      french: "Ceribou",
    },
    type: ["Plante"],
    base: {
      HP: 45,
      Attack: 35,
      Defense: 45,
      "Sp. Attack": 62,
      "Sp. Defense": 53,
      Speed: 35,
    },
    species: "Cherry Pokémon",
    description:
      "It evolves by sucking the energy out of the small ball where it had been storing nutrients.",
    evolution: {
      next: [["421", "Level 25"]],
    },
    profile: {
      height: "0.4 m",
      weight: "3.3 kg",
      egg: ["Fée", "Plante"],
      ability: [["Chlorophyll", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/420.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/420.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/420.png",
    },
  },
  {
    id: 421,
    name: {
      english: "Cherrim",
      japanese: "チェリム",
      chinese: "樱花儿",
      french: "Ceriflor",
    },
    type: ["Plante"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 87,
      "Sp. Defense": 78,
      Speed: 85,
    },
    species: "Blossom Pokémon",
    description:
      "If it senses strong sunlight, it opens its folded petals to absorb the sun’s rays with its whole body.",
    evolution: {
      prev: ["420", "Level 25"],
    },
    profile: {
      height: "0.5 m",
      weight: "9.3 kg",
      egg: ["Fée", "Plante"],
      ability: [["Flower Gift", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/421.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/421.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/421.png",
    },
  },
  {
    id: 422,
    name: {
      english: "Shellos",
      japanese: "カラナクシ",
      chinese: "无壳海兔",
      french: "Sancoki",
    },
    type: ["Eau"],
    base: {
      HP: 76,
      Attack: 48,
      Defense: 48,
      "Sp. Attack": 57,
      "Sp. Defense": 62,
      Speed: 34,
    },
    species: "Sea Slug Pokémon",
    description:
      "When it senses danger, a purple liquid oozes out of it. The liquid is thought to be something like greasy sweat.",
    evolution: {
      next: [["423", "Level 30"]],
    },
    profile: {
      height: "0.3 m",
      weight: "6.3 kg",
      egg: ["Eau 1", "Amorphous"],
      ability: [
        ["Sticky Hold", "false"],
        ["Storm Drain", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/422.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/422.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/422.png",
    },
  },
  {
    id: 423,
    name: {
      english: "Gastrodon",
      japanese: "トリトドン",
      chinese: "海兔兽",
      french: "Tritosor",
    },
    type: ["Eau", "Sol"],
    base: {
      HP: 111,
      Attack: 83,
      Defense: 68,
      "Sp. Attack": 92,
      "Sp. Defense": 82,
      Speed: 39,
    },
    species: "Sea Slug Pokémon",
    description:
      "Their shape and color change, depending on their environment and diet. There are many of them at beaches where the waves are calm.",
    evolution: {
      prev: ["422", "Level 30"],
    },
    profile: {
      height: "0.9 m",
      weight: "29.9 kg",
      egg: ["Eau 1", "Amorphous"],
      ability: [
        ["Sticky Hold", "false"],
        ["Storm Drain", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/423.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/423.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/423.png",
    },
  },
  {
    id: 424,
    name: {
      english: "Ambipom",
      japanese: "エテボース",
      chinese: "双尾怪手",
      french: "Capidextre",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 66,
      "Sp. Attack": 60,
      "Sp. Defense": 66,
      Speed: 115,
    },
    species: "Long Tail Pokémon",
    description:
      "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that’s proof it really likes you.",
    evolution: {
      prev: ["190", "after Double Hit learned"],
    },
    profile: {
      height: "1.2 m",
      weight: "20.3 kg",
      egg: ["Field"],
      ability: [
        ["Technician", "false"],
        ["Pickup", "false"],
        ["Skill Link", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/424.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/424.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/424.png",
    },
  },
  {
    id: 425,
    name: {
      english: "Drifloon",
      japanese: "フワンテ",
      chinese: "飘飘球",
      french: "Baudrive",
    },
    type: ["Fantôme", "Vol"],
    base: {
      HP: 90,
      Attack: 50,
      Defense: 34,
      "Sp. Attack": 60,
      "Sp. Defense": 44,
      Speed: 70,
    },
    species: "Balloon Pokémon",
    description:
      "Wandering souls gathered together to form this Pokémon. When trying to make friends with children, Drifloon grabs them by the hand.",
    evolution: {
      next: [["426", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.2 kg",
      egg: ["Amorphous"],
      ability: [
        ["Aftermath", "false"],
        ["Unburden", "false"],
        ["Flare Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/425.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/425.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/425.png",
    },
  },
  {
    id: 426,
    name: {
      english: "Drifblim",
      japanese: "フワライド",
      chinese: "随风球",
      french: "Grodrive",
    },
    type: ["Fantôme", "Vol"],
    base: {
      HP: 150,
      Attack: 80,
      Defense: 44,
      "Sp. Attack": 90,
      "Sp. Defense": 54,
      Speed: 80,
    },
    species: "Blimp Pokémon",
    description:
      "The raw material for the gas inside its body is souls. When its body starts to deflate, it’s thought to carry away people and Pokémon.",
    evolution: {
      prev: ["425", "Level 28"],
    },
    profile: {
      height: "1.2 m",
      weight: "15 kg",
      egg: ["Amorphous"],
      ability: [
        ["Aftermath", "false"],
        ["Unburden", "false"],
        ["Flare Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/426.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/426.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/426.png",
    },
  },
  {
    id: 427,
    name: {
      english: "Buneary",
      japanese: "ミミロル",
      chinese: "卷卷耳",
      french: "Laporeille",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 66,
      Defense: 44,
      "Sp. Attack": 44,
      "Sp. Defense": 56,
      Speed: 85,
    },
    species: "Rabbit Pokémon",
    description:
      "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it’s attacked by an enemy.",
    evolution: {
      next: [["428", "high Friendship"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.5 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Run Away", "false"],
        ["Klutz", "false"],
        ["Limber", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/427.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/427.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/427.png",
    },
  },
  {
    id: 428,
    name: {
      english: "Lopunny",
      japanese: "ミミロップ",
      chinese: "长耳兔",
      french: "Lockpin",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 76,
      Defense: 84,
      "Sp. Attack": 54,
      "Sp. Defense": 96,
      Speed: 105,
    },
    species: "Rabbit Pokémon",
    description:
      "It’s notably wary and has a dislike of combat, but at the same time, it can deliver powerful kicks with its lithe legs.",
    evolution: {
      prev: ["427", "high Friendship"],
    },
    profile: {
      height: "1.2 m",
      weight: "33.3 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Cute Charm", "false"],
        ["Klutz", "false"],
        ["Limber", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/428.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/428.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/428.png",
    },
  },
  {
    id: 429,
    name: {
      english: "Mismagius",
      japanese: "ムウマージ",
      chinese: "梦妖魔",
      french: "Magirêve",
    },
    type: ["Fantôme"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      Speed: 105,
    },
    species: "Magical Pokémon",
    description:
      "Its muttered curses can cause awful headaches or terrifying visions that torment others.",
    evolution: {
      prev: ["200", "use Dusk Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "4.4 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/429.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/429.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/429.png",
    },
  },
  {
    id: 430,
    name: {
      english: "Honchkrow",
      japanese: "ドンカラス",
      chinese: "乌鸦头头",
      french: "Corboss",
    },
    type: ["Ténèbres", "Vol"],
    base: {
      HP: 100,
      Attack: 125,
      Defense: 52,
      "Sp. Attack": 105,
      "Sp. Defense": 52,
      Speed: 71,
    },
    species: "Big Boss Pokémon",
    description:
      "Its goons take care of most of the combat for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent.",
    evolution: {
      prev: ["198", "use Dusk Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "27.3 kg",
      egg: ["Vol"],
      ability: [
        ["Insomnia", "false"],
        ["Super Luck", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/430.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/430.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/430.png",
    },
  },
  {
    id: 431,
    name: {
      english: "Glameow",
      japanese: "ニャルマー",
      chinese: "魅力喵",
      french: "Chaglam",
    },
    type: ["Normal"],
    base: {
      HP: 49,
      Attack: 55,
      Defense: 42,
      "Sp. Attack": 42,
      "Sp. Defense": 37,
      Speed: 85,
    },
    species: "Catty Pokémon",
    description:
      "When it’s happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.",
    evolution: {
      next: [["432", "Level 38"]],
    },
    profile: {
      height: "0.5 m",
      weight: "3.9 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Own Tempo", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/431.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/431.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/431.png",
    },
  },
  {
    id: 432,
    name: {
      english: "Purugly",
      japanese: "ブニャット",
      chinese: "东施喵",
      french: "Chaffreux",
    },
    type: ["Normal"],
    base: {
      HP: 71,
      Attack: 82,
      Defense: 64,
      "Sp. Attack": 64,
      "Sp. Defense": 59,
      Speed: 112,
    },
    species: "Tiger Cat Pokémon",
    description:
      "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
    evolution: {
      prev: ["431", "Level 38"],
    },
    profile: {
      height: "1 m",
      weight: "43.8 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Defiant", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/432.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/432.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/432.png",
    },
  },
  {
    id: 433,
    name: {
      english: "Chingling",
      japanese: "リーシャン",
      chinese: "铃铛响",
      french: "Korillon",
    },
    type: ["Psy"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 50,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Bell Pokémon",
    description:
      "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
    evolution: {
      next: [["358", "high Friendship, Nighttime"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.6 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/433.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/433.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/433.png",
    },
  },
  {
    id: 434,
    name: {
      english: "Stunky",
      japanese: "スカンプー",
      chinese: "臭鼬噗",
      french: "Moufouette",
    },
    type: ["Poison", "Ténèbres"],
    base: {
      HP: 63,
      Attack: 63,
      Defense: 47,
      "Sp. Attack": 41,
      "Sp. Defense": 41,
      Speed: 74,
    },
    species: "Skunk Pokémon",
    description:
      "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
    evolution: {
      next: [["435", "Level 34"]],
    },
    profile: {
      height: "0.4 m",
      weight: "19.2 kg",
      egg: ["Field"],
      ability: [
        ["Stench", "false"],
        ["Aftermath", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/434.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/434.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/434.png",
    },
  },
  {
    id: 435,
    name: {
      english: "Skuntank",
      japanese: "スカタンク",
      chinese: "坦克臭鼬",
      french: "Moufflair",
    },
    type: ["Poison", "Ténèbres"],
    base: {
      HP: 103,
      Attack: 93,
      Defense: 67,
      "Sp. Attack": 71,
      "Sp. Defense": 61,
      Speed: 84,
    },
    species: "Skunk Pokémon",
    description:
      "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.",
    evolution: {
      prev: ["434", "Level 34"],
    },
    profile: {
      height: "1 m",
      weight: "38 kg",
      egg: ["Field"],
      ability: [
        ["Stench", "false"],
        ["Aftermath", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/435.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/435.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/435.png",
    },
  },
  {
    id: 436,
    name: {
      english: "Bronzor",
      japanese: "ドーミラー",
      chinese: "铜镜怪",
      french: "Archéomire",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 57,
      Attack: 24,
      Defense: 86,
      "Sp. Attack": 24,
      "Sp. Defense": 86,
      Speed: 23,
    },
    species: "Bronze Pokémon",
    description:
      "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
    evolution: {
      next: [["437", "Level 33"]],
    },
    profile: {
      height: "0.5 m",
      weight: "60.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Levitate", "false"],
        ["Heatproof", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/436.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/436.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/436.png",
    },
  },
  {
    id: 437,
    name: {
      english: "Bronzong",
      japanese: "ドータクン",
      chinese: "青铜钟",
      french: "Archéodong",
    },
    type: ["Acier", "Psy"],
    base: {
      HP: 67,
      Attack: 89,
      Defense: 116,
      "Sp. Attack": 79,
      "Sp. Defense": 116,
      Speed: 33,
    },
    species: "Bronze Bell Pokémon",
    description:
      "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
    evolution: {
      prev: ["436", "Level 33"],
    },
    profile: {
      height: "1.3 m",
      weight: "187 kg",
      egg: ["Mineral"],
      ability: [
        ["Levitate", "false"],
        ["Heatproof", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/437.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/437.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/437.png",
    },
  },
  {
    id: 438,
    name: {
      english: "Bonsly",
      japanese: "ウソハチ",
      chinese: "盆才怪",
      french: "Manzaï",
    },
    type: ["Roche"],
    base: {
      HP: 50,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 10,
      "Sp. Defense": 45,
      Speed: 10,
    },
    species: "Bonsai Pokémon",
    description:
      "If its body gets too damp, it will die. So, in a process reminiscent of sweating, its eyes expel moisture.",
    evolution: {
      next: [["185", "after Mimic learned"]],
    },
    profile: {
      height: "0.5 m",
      weight: "15 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Sturdy", "false"],
        ["Roche Head", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/438.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/438.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/438.png",
    },
  },
  {
    id: 439,
    name: {
      english: "Mime Jr.",
      japanese: "マネネ",
      chinese: "魔尼尼",
      french: "Mime Jr",
    },
    type: ["Psy", "Fée"],
    base: {
      HP: 20,
      Attack: 25,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Mime Pokémon",
    description:
      "When this gifted mimic surprises an opponent, Mime Jr. feels so happy that it ends up forgetting it was imitating something.",
    evolution: {
      next: [["122", "after Mimic learned"]],
    },
    profile: {
      height: "0.6 m",
      weight: "13 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Soundproof", "false"],
        ["Filter", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/439.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/439.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/439.png",
    },
  },
  {
    id: 440,
    name: {
      english: "Happiny",
      japanese: "ピンプク",
      chinese: "小福蛋",
      french: "Ptiravi",
    },
    type: ["Normal"],
    base: {
      HP: 100,
      Attack: 5,
      Defense: 5,
      "Sp. Attack": 15,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Playhouse Pokémon",
    description:
      "When it sees something round and white, Happiny puts it into the pouch on its stomach. It sometimes becomes overloaded and can’t move.",
    evolution: {
      next: [["113", "hold Oval Stone, Daytime"]],
    },
    profile: {
      height: "0.6 m",
      weight: "24.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/440.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/440.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/440.png",
    },
  },
  {
    id: 441,
    name: {
      english: "Chatot",
      japanese: "ペラップ",
      chinese: "聒噪鸟",
      french: "Pijako",
    },
    type: ["Normal", "Vol"],
    base: {
      HP: 76,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 92,
      "Sp. Defense": 42,
      Speed: 91,
    },
    species: "Music Note Pokémon",
    description:
      "It can learn and speak human words. If they gather, they all learn the same saying.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "1.9 kg",
      egg: ["Vol"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/441.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/441.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/441.png",
    },
  },
  {
    id: 442,
    name: {
      english: "Spiritomb",
      japanese: "ミカルゲ",
      chinese: "花岩怪",
      french: "Spiritomb",
    },
    type: ["Fantôme", "Ténèbres"],
    base: {
      HP: 50,
      Attack: 92,
      Defense: 108,
      "Sp. Attack": 92,
      "Sp. Defense": 108,
      Speed: 35,
    },
    species: "Forbidden Pokémon",
    description:
      "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "108 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/442.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/442.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/442.png",
    },
  },
  {
    id: 443,
    name: {
      english: "Gible",
      japanese: "フカマル",
      chinese: "圆陆鲨",
      french: "Griknot",
    },
    type: ["Dragon", "Sol"],
    base: {
      HP: 58,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      Speed: 42,
    },
    species: "Land Shark Pokémon",
    description:
      "Its original home is an area much hotter than Alola. If you’re planning to live with one, your heating bill will soar.",
    evolution: {
      next: [["444", "Level 24"]],
    },
    profile: {
      height: "0.7 m",
      weight: "20.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/443.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/443.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/443.png",
    },
  },
  {
    id: 444,
    name: {
      english: "Gabite",
      japanese: "ガバイト",
      chinese: "尖牙陆鲨",
      french: "Carmache",
    },
    type: ["Dragon", "Sol"],
    base: {
      HP: 68,
      Attack: 90,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 55,
      Speed: 82,
    },
    species: "Cave Pokémon",
    description:
      "It sheds its skin and gradually grows larger. Its scales can be sol into a powder and used as raw materials for traditional medicine.",
    evolution: {
      prev: ["443", "Level 24"],
      next: [["445", "Level 48"]],
    },
    profile: {
      height: "1.4 m",
      weight: "56 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/444.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/444.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/444.png",
    },
  },
  {
    id: 445,
    name: {
      english: "Garchomp",
      japanese: "ガブリアス",
      chinese: "烈咬陆鲨",
      french: "Carchacrok",
    },
    type: ["Dragon", "Sol"],
    base: {
      HP: 108,
      Attack: 130,
      Defense: 95,
      "Sp. Attack": 80,
      "Sp. Defense": 85,
      Speed: 102,
    },
    species: "Mach Pokémon",
    description:
      "Its fine scales don’t just reduce wind resistance—their sharp edges also cause injury to any opponent who attacks it.",
    evolution: {
      prev: ["444", "Level 48"],
    },
    profile: {
      height: "1.9 m",
      weight: "95 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/445.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/445.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/445.png",
    },
  },
  {
    id: 446,
    name: {
      english: "Munchlax",
      japanese: "ゴンベ",
      chinese: "小卡比兽",
      french: "Goinfrex",
    },
    type: ["Normal"],
    base: {
      HP: 135,
      Attack: 85,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 85,
      Speed: 5,
    },
    species: "Big Eater Pokémon",
    description:
      "Anything that looks edible, Munchlax will go on and swallow whole. Its stomach is tough enough to handle it even if the food has gone rotten.",
    evolution: {
      next: [["143", "high Friendship"]],
    },
    profile: {
      height: "0.6 m",
      weight: "105 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pickup", "false"],
        ["Thick Fat", "false"],
        ["Gluttony", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/446.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/446.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/446.png",
    },
  },
  {
    id: 447,
    name: {
      english: "Riolu",
      japanese: "リオル",
      chinese: "利欧路",
      french: "Riolu",
    },
    type: ["Combat"],
    base: {
      HP: 40,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Emanation Pokémon",
    description:
      "It uses waves called auras to communicate with others of its kind. It doesn’t make any noise during this time, so its enemies can’t detect it.",
    evolution: {
      next: [["448", "high Friendship, Daytime"]],
    },
    profile: {
      height: "0.7 m",
      weight: "20.2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Steadfast", "false"],
        ["Inner Focus", "false"],
        ["Prankster", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/447.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/447.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/447.png",
    },
  },
  {
    id: 448,
    name: {
      english: "Lucario",
      japanese: "ルカリオ",
      chinese: "路卡利欧",
      french: "Lucario",
    },
    type: ["Combat", "Acier"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 70,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      Speed: 90,
    },
    species: "Aura Pokémon",
    description:
      "Lucario reads its opponent’s feelings with its aura waves. It finds out things it would rather not know, so it gets stressed out easily.",
    evolution: {
      prev: ["447", "high Friendship, Daytime"],
    },
    profile: {
      height: "1.2 m",
      weight: "54 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Steadfast", "false"],
        ["Inner Focus", "false"],
        ["Justified", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/448.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/448.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/448.png",
    },
  },
  {
    id: 449,
    name: {
      english: "Hippopotas",
      japanese: "ヒポポタス",
      chinese: "沙河马",
      french: "Hippopotas",
    },
    type: ["Sol"],
    base: {
      HP: 68,
      Attack: 72,
      Defense: 78,
      "Sp. Attack": 38,
      "Sp. Defense": 42,
      Speed: 32,
    },
    species: "Hippo Pokémon",
    description:
      "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
    evolution: {
      next: [["450", "Level 34"]],
    },
    profile: {
      height: "0.8 m",
      weight: "49.5 kg",
      egg: ["Field"],
      ability: [
        ["Sand Stream", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/449.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/449.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/449.png",
    },
  },
  {
    id: 450,
    name: {
      english: "Hippowdon",
      japanese: "カバルドン",
      chinese: "河马兽",
      french: "Hippodocus",
    },
    type: ["Sol"],
    base: {
      HP: 108,
      Attack: 112,
      Defense: 118,
      "Sp. Attack": 68,
      "Sp. Defense": 72,
      Speed: 47,
    },
    species: "Heavyweight Pokémon",
    description:
      "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
    evolution: {
      prev: ["449", "Level 34"],
    },
    profile: {
      height: "2 m",
      weight: "300 kg",
      egg: ["Field"],
      ability: [
        ["Sand Stream", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/450.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/450.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/450.png",
    },
  },
  {
    id: 451,
    name: {
      english: "Skorupi",
      japanese: "スコルピ",
      chinese: "钳尾蝎",
      french: "Rapion",
    },
    type: ["Poison", "Insecte"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Scorpion Pokémon",
    description:
      "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
    evolution: {
      next: [["452", "Level 40"]],
    },
    profile: {
      height: "0.8 m",
      weight: "12 kg",
      egg: ["Insecte", "Eau 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Sniper", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/451.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/451.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/451.png",
    },
  },
  {
    id: 452,
    name: {
      english: "Drapion",
      japanese: "ドラピオン",
      chinese: "龙王蝎",
      french: "Drascore",
    },
    type: ["Poison", "Ténèbres"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 110,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Ogre Scorpion Pokémon",
    description:
      "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
    evolution: {
      prev: ["451", "Level 40"],
    },
    profile: {
      height: "1.3 m",
      weight: "61.5 kg",
      egg: ["Insecte", "Eau 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Sniper", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/452.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/452.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/452.png",
    },
  },
  {
    id: 453,
    name: {
      english: "Croagunk",
      japanese: "グレッグル",
      chinese: "不良蛙",
      french: "Cradopaud",
    },
    type: ["Poison", "Combat"],
    base: {
      HP: 48,
      Attack: 61,
      Defense: 40,
      "Sp. Attack": 61,
      "Sp. Defense": 40,
      Speed: 50,
    },
    species: "Toxic Mouth Pokémon",
    description:
      "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
    evolution: {
      next: [["454", "Level 37"]],
    },
    profile: {
      height: "0.7 m",
      weight: "23 kg",
      egg: ["Human-Like"],
      ability: [
        ["Anticipation", "false"],
        ["Dry Skin", "false"],
        ["Poison Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/453.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/453.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/453.png",
    },
  },
  {
    id: 454,
    name: {
      english: "Toxicroak",
      japanese: "ドクロッグ",
      chinese: "毒骷蛙",
      french: "Coatox",
    },
    type: ["Poison", "Combat"],
    base: {
      HP: 83,
      Attack: 106,
      Defense: 65,
      "Sp. Attack": 86,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Toxic Mouth Pokémon",
    description:
      "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
    evolution: {
      prev: ["453", "Level 37"],
    },
    profile: {
      height: "1.3 m",
      weight: "44.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Anticipation", "false"],
        ["Dry Skin", "false"],
        ["Poison Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/454.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/454.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/454.png",
    },
  },
  {
    id: 455,
    name: {
      english: "Carnivine",
      japanese: "マスキッパ",
      chinese: "尖牙笼",
      french: "Vortente",
    },
    type: ["Plante"],
    base: {
      HP: 74,
      Attack: 100,
      Defense: 72,
      "Sp. Attack": 90,
      "Sp. Defense": 72,
      Speed: 46,
    },
    species: "Insecte Catcher Pokémon",
    description:
      "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "27 kg",
      egg: ["Plante"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/455.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/455.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/455.png",
    },
  },
  {
    id: 456,
    name: {
      english: "Finneon",
      japanese: "ケイコウオ",
      chinese: "荧光鱼",
      french: "Écayon",
    },
    type: ["Eau"],
    base: {
      HP: 49,
      Attack: 49,
      Defense: 56,
      "Sp. Attack": 49,
      "Sp. Defense": 61,
      Speed: 66,
    },
    species: "Wing Fish Pokémon",
    description:
      "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls.",
    evolution: {
      next: [["457", "Level 31"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7 kg",
      egg: ["Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Storm Drain", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/456.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/456.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/456.png",
    },
  },
  {
    id: 457,
    name: {
      english: "Lumineon",
      japanese: "ネオラント",
      chinese: "霓虹鱼",
      french: "Luminéon",
    },
    type: ["Eau"],
    base: {
      HP: 69,
      Attack: 69,
      Defense: 76,
      "Sp. Attack": 69,
      "Sp. Defense": 86,
      Speed: 91,
    },
    species: "Neon Pokémon",
    description:
      "They traverse the deep eaus as if crawling over the seafloor. The fantastic lights of its fins shine like stars in the night sky.",
    evolution: {
      prev: ["456", "Level 31"],
    },
    profile: {
      height: "1.2 m",
      weight: "24 kg",
      egg: ["Eau 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Storm Drain", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/457.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/457.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/457.png",
    },
  },
  {
    id: 458,
    name: {
      english: "Mantyke",
      japanese: "タマンタ",
      chinese: "小球飞鱼",
      french: "Babimanta",
    },
    type: ["Eau", "Vol"],
    base: {
      HP: 45,
      Attack: 20,
      Defense: 50,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      Speed: 50,
    },
    species: "Kite Pokémon",
    description:
      "Mantyke are friendly toward people and will approach boats closely. The patterns on their backs differ depending on their habitat.",
    evolution: {
      next: [["226", "with Remoraid in party"]],
    },
    profile: {
      height: "1 m",
      weight: "65 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Swift Swim", "false"],
        ["Eau Absorb", "false"],
        ["Eau Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/458.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/458.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/458.png",
    },
  },
  {
    id: 459,
    name: {
      english: "Snover",
      japanese: "ユキカブリ",
      chinese: "雪笠怪",
      french: "Blizzi",
    },
    type: ["Plante", "Glace"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 50,
      "Sp. Attack": 62,
      "Sp. Defense": 60,
      Speed: 40,
    },
    species: "Frost Tree Pokémon",
    description:
      "In the spring, it grows berries with the texture of frozen treats around its belly.",
    evolution: {
      next: [["460", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "50.5 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Snow Warning", "false"],
        ["Soundproof", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/459.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/459.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/459.png",
    },
  },
  {
    id: 460,
    name: {
      english: "Abomasnow",
      japanese: "ユキノオー",
      chinese: "暴雪王",
      french: "Blizzaroi",
    },
    type: ["Plante", "Glace"],
    base: {
      HP: 90,
      Attack: 92,
      Defense: 75,
      "Sp. Attack": 92,
      "Sp. Defense": 85,
      Speed: 60,
    },
    species: "Frost Tree Pokémon",
    description:
      "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
    evolution: {
      prev: ["459", "Level 40"],
    },
    profile: {
      height: "2.2 m",
      weight: "135.5 kg",
      egg: ["Monster", "Plante"],
      ability: [
        ["Snow Warning", "false"],
        ["Soundproof", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/460.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/460.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/460.png",
    },
  },
  {
    id: 461,
    name: {
      english: "Weavile",
      japanese: "マニューラ",
      chinese: "玛狃拉",
      french: "Dimoret",
    },
    type: ["Ténèbres", "Glace"],
    base: {
      HP: 70,
      Attack: 120,
      Defense: 65,
      "Sp. Attack": 45,
      "Sp. Defense": 85,
      Speed: 125,
    },
    species: "Sharp Claw Pokémon",
    description:
      "Thanks to its increased intelligence, scrapping over food is a thing of the past. A scratch from its claws will give you a case of frostbite!",
    evolution: {
      prev: ["215", "hold Razor Claw, Nighttime"],
    },
    profile: {
      height: "1.1 m",
      weight: "34 kg",
      egg: ["Field"],
      ability: [
        ["Pressure", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/461.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/461.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/461.png",
    },
  },
  {
    id: 462,
    name: {
      english: "Magnezone",
      japanese: "ジバコイル",
      chinese: "自爆磁怪",
      french: "Magnézone",
    },
    type: ["Electrique", "Acier"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 115,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Magnet Area Pokémon",
    description:
      "There are still people who believe that this Pokémon came from outer space. It emanates a powerful magnetic field.",
    evolution: {
      prev: ["82", "level up in a Magnetic Field area"],
    },
    profile: {
      height: "1.2 m",
      weight: "180 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/462.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/462.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/462.png",
    },
  },
  {
    id: 463,
    name: {
      english: "Lickilicky",
      japanese: "ベロベルト",
      chinese: "大舌舔",
      french: "Coudlangue",
    },
    type: ["Normal"],
    base: {
      HP: 110,
      Attack: 85,
      Defense: 95,
      "Sp. Attack": 80,
      "Sp. Defense": 95,
      Speed: 50,
    },
    species: "Licking Pokémon",
    description:
      "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue.",
    evolution: {
      prev: ["108", "after Rollout learned"],
    },
    profile: {
      height: "1.7 m",
      weight: "140 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Oblivious", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/463.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/463.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/463.png",
    },
  },
  {
    id: 464,
    name: {
      english: "Rhyperior",
      japanese: "ドサイドン",
      chinese: "超甲狂犀",
      french: "Rhinastoc",
    },
    type: ["Sol", "Roche"],
    base: {
      HP: 115,
      Attack: 140,
      Defense: 130,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 40,
    },
    species: "Drill Pokémon",
    description:
      "It puts roches in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
    evolution: {
      prev: ["112", "trade holding Protector"],
    },
    profile: {
      height: "2.4 m",
      weight: "282.8 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Solid Roche", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/464.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/464.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/464.png",
    },
  },
  {
    id: 465,
    name: {
      english: "Tangrowth",
      japanese: "モジャンボ",
      chinese: "巨蔓藤",
      french: "Bouldeneu",
    },
    type: ["Plante"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 125,
      "Sp. Attack": 110,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Vine Pokémon",
    description:
      "Its vines grow so profusely that, in the warm season, you can’t even see its eyes.",
    evolution: {
      prev: ["114", "after Ancient Power learned"],
    },
    profile: {
      height: "2 m",
      weight: "128.6 kg",
      egg: ["Plante"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/465.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/465.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/465.png",
    },
  },
  {
    id: 466,
    name: {
      english: "Electivire",
      japanese: "エレキブル",
      chinese: "电击魔兽",
      french: "Élekable",
    },
    type: ["Electrique"],
    base: {
      HP: 75,
      Attack: 123,
      Defense: 67,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 95,
    },
    species: "Thunderbolt Pokémon",
    description:
      "A single Electivire can provide enough electriqueity for all the buildings in a big city for a year.",
    evolution: {
      prev: ["125", "trade holding Electirizer"],
    },
    profile: {
      height: "1.8 m",
      weight: "138.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Motor Drive", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/466.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/466.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/466.png",
    },
  },
  {
    id: 467,
    name: {
      english: "Magmortar",
      japanese: "ブーバーン",
      chinese: "鸭嘴炎兽",
      french: "Maganon",
    },
    type: ["Feu"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 67,
      "Sp. Attack": 125,
      "Sp. Defense": 95,
      Speed: 83,
    },
    species: "Blast Pokémon",
    description:
      "Magmortar takes down its enemies by shooting feuballs, which burn them to a blackened crisp. It avoids this method when hunting prey.",
    evolution: {
      prev: ["126", "trade holding Magmarizer"],
    },
    profile: {
      height: "1.6 m",
      weight: "68 kg",
      egg: ["Human-Like"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/467.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/467.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/467.png",
    },
  },
  {
    id: 468,
    name: {
      english: "Togekiss",
      japanese: "トゲキッス",
      chinese: "波克基斯",
      french: "Togekiss",
    },
    type: ["Fée", "Vol"],
    base: {
      HP: 85,
      Attack: 50,
      Defense: 95,
      "Sp. Attack": 120,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Jubilee Pokémon",
    description:
      "It shares many blessings with people who respect one another’s rights and avoid needless strife.",
    evolution: {
      prev: ["176", "use Shiny Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "38 kg",
      egg: ["Vol", "Fée"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/468.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/468.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/468.png",
    },
  },
  {
    id: 469,
    name: {
      english: "Yanmega",
      japanese: "メガヤンマ",
      chinese: "远古巨蜓",
      french: "Yanmega",
    },
    type: ["Insecte", "Vol"],
    base: {
      HP: 86,
      Attack: 76,
      Defense: 86,
      "Sp. Attack": 116,
      "Sp. Defense": 56,
      Speed: 95,
    },
    species: "Ogre Darner Pokémon",
    description:
      "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
    evolution: {
      prev: ["193", "after Ancient Power learned"],
    },
    profile: {
      height: "1.9 m",
      weight: "51.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Speed Boost", "false"],
        ["Tinted Lens", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/469.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/469.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/469.png",
    },
  },
  {
    id: 470,
    name: {
      english: "Leafeon",
      japanese: "リーフィア",
      chinese: "叶伊布",
      french: "Phyllali",
    },
    type: ["Plante"],
    base: {
      HP: 65,
      Attack: 110,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      Speed: 95,
    },
    species: "Verdant Pokémon",
    description:
      "It gets its nutrition from photosynthesis. It lives a quiet life deep in forests where clean rivers flow.",
    evolution: {
      prev: ["133", "level up near a Mossy Roche"],
    },
    profile: {
      height: "1 m",
      weight: "25.5 kg",
      egg: ["Field"],
      ability: [
        ["Leaf Guard", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/470.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/470.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/470.png",
    },
  },
  {
    id: 471,
    name: {
      english: "Glaceon",
      japanese: "グレイシア",
      chinese: "冰伊布",
      french: "Givrali",
    },
    type: ["Glace"],
    base: {
      HP: 65,
      Attack: 60,
      Defense: 110,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      Speed: 65,
    },
    species: "Fresh Snow Pokémon",
    description:
      "It can instantaneously freeze any moisture that’s around it, creating glace pellets to shoot at its prey.",
    evolution: {
      prev: ["133", "level up near an Icy Roche"],
    },
    profile: {
      height: "0.8 m",
      weight: "25.9 kg",
      egg: ["Field"],
      ability: [
        ["Snow Cloak", "false"],
        ["Glace Body", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/471.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/471.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/471.png",
    },
  },
  {
    id: 472,
    name: {
      english: "Gliscor",
      japanese: "グライオン",
      chinese: "天蝎王",
      french: "Scorvol",
    },
    type: ["Sol", "Vol"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 125,
      "Sp. Attack": 45,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Fang Scorpion Pokémon",
    description:
      "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest.",
    evolution: {
      prev: ["207", "hold Razor Fang, Nighttime"],
    },
    profile: {
      height: "2 m",
      weight: "42.5 kg",
      egg: ["Insecte"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Sand Veil", "false"],
        ["Poison Heal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/472.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/472.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/472.png",
    },
  },
  {
    id: 473,
    name: {
      english: "Mamoswine",
      japanese: "マンムー",
      chinese: "象牙猪",
      french: "Mammochon",
    },
    type: ["Glace", "Sol"],
    base: {
      HP: 110,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 60,
      Speed: 80,
    },
    species: "Twin Tusk Pokémon",
    description:
      "Its impressive tusks are made of glace. The population thinned when it turned warm after the glace age.",
    evolution: {
      prev: ["221", "after Ancient Power learned"],
    },
    profile: {
      height: "2.5 m",
      weight: "291 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/473.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/473.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/473.png",
    },
  },
  {
    id: 474,
    name: {
      english: "Porygon-Z",
      japanese: "ポリゴンＺ",
      chinese: "多边兽Ｚ",
      french: "Porygon-Z",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 135,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Virtual Pokémon",
    description:
      "A faulty update was added to its programming. Its behavior is notglaceably strange, so the experiment may have been a failure.",
    evolution: {
      prev: ["233", "trade holding Dubious Disc"],
    },
    profile: {
      height: "0.9 m",
      weight: "34 kg",
      egg: ["Mineral"],
      ability: [
        ["Adaptability", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/474.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/474.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/474.png",
    },
  },
  {
    id: 475,
    name: {
      english: "Gallade",
      japanese: "エルレイド",
      chinese: "艾路雷朵",
      french: "Gallame",
    },
    type: ["Psy", "Combat"],
    base: {
      HP: 68,
      Attack: 125,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Blade Pokémon",
    description:
      "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
    evolution: {
      prev: ["281", "use Dawn Stone, Male"],
    },
    profile: {
      height: "1.6 m",
      weight: "52 kg",
      egg: ["Amorphous"],
      ability: [
        ["Steadfast", "false"],
        ["Justified", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/475.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/475.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/475.png",
    },
  },
  {
    id: 476,
    name: {
      english: "Probopass",
      japanese: "ダイノーズ",
      chinese: "大朝北鼻",
      french: "Tarinorme",
    },
    type: ["Roche", "Acier"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 145,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      Speed: 40,
    },
    species: "Compass Pokémon",
    description:
      "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders.",
    evolution: {
      prev: ["299", "level up in a Magnetic Field area"],
    },
    profile: {
      height: "1.4 m",
      weight: "340 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Magnet Pull", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/476.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/476.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/476.png",
    },
  },
  {
    id: 477,
    name: {
      english: "Dusknoir",
      japanese: "ヨノワール",
      chinese: "黑夜魔灵",
      french: "Noctunoir",
    },
    type: ["Fantôme"],
    base: {
      HP: 45,
      Attack: 100,
      Defense: 135,
      "Sp. Attack": 65,
      "Sp. Defense": 135,
      Speed: 45,
    },
    species: "Gripper Pokémon",
    description:
      "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
    evolution: {
      prev: ["356", "trade holding Reaper Cloth"],
    },
    profile: {
      height: "2.2 m",
      weight: "106.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/477.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/477.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/477.png",
    },
  },
  {
    id: 478,
    name: {
      english: "Froslass",
      japanese: "ユキメノコ",
      chinese: "雪妖女",
      french: "Momartik",
    },
    type: ["Glace", "Fantôme"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 70,
      Speed: 110,
    },
    species: "Snow Land Pokémon",
    description:
      "It’s said that on nights of terrible blizzards, it comes down to human settlements. If you hear it knocking at your door, do not open it!",
    evolution: {
      prev: ["361", "use Dawn Stone, Female"],
    },
    profile: {
      height: "1.3 m",
      weight: "26.6 kg",
      egg: ["Fée", "Mineral"],
      ability: [
        ["Snow Cloak", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/478.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/478.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/478.png",
    },
  },
  {
    id: 479,
    name: {
      english: "Rotom",
      japanese: "ロトム",
      chinese: "洛托姆",
      french: "Motisma",
    },
    type: ["Electrique", "Fantôme"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 77,
      "Sp. Attack": 95,
      "Sp. Defense": 77,
      Speed: 91,
    },
    species: "Plasma Pokémon",
    description:
      "Its body is composed of plasma. It is known to infiltrate electronic devglaces and wreak havoc.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/479.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/479.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/479.png",
    },
  },
  {
    id: 480,
    name: {
      english: "Uxie",
      japanese: "ユクシー",
      chinese: "由克希",
      french: "Créhelf",
    },
    type: ["Psy"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 130,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      Speed: 95,
    },
    species: "Knowledge Pokémon",
    description:
      "It is said that its emergence gave humans the intelligence to improve their quality of life.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/480.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/480.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/480.png",
    },
  },
  {
    id: 481,
    name: {
      english: "Mesprit",
      japanese: "エムリット",
      chinese: "艾姆利多",
      french: "Créfollet",
    },
    type: ["Psy"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 105,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      Speed: 80,
    },
    species: "Emotion Pokémon",
    description:
      "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake’s surface.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/481.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/481.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/481.png",
    },
  },
  {
    id: 482,
    name: {
      english: "Azelf",
      japanese: "アグノム",
      chinese: "亚克诺姆",
      french: "Créfadet",
    },
    type: ["Psy"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 70,
      "Sp. Attack": 125,
      "Sp. Defense": 70,
      Speed: 115,
    },
    species: "Willpower Pokémon",
    description:
      "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/482.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/482.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/482.png",
    },
  },
  {
    id: 483,
    name: {
      english: "Dialga",
      japanese: "ディアルガ",
      chinese: "帝牙卢卡",
      french: "Dialga",
    },
    type: ["Acier", "Dragon"],
    base: {
      HP: 100,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 150,
      "Sp. Defense": 100,
      Speed: 90,
    },
    species: "Temporal Pokémon",
    description:
      "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    evolution: {},
    profile: {
      height: "5.4 m",
      weight: "683 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/483.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/483.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/483.png",
    },
  },
  {
    id: 484,
    name: {
      english: "Palkia",
      japanese: "パルキア",
      chinese: "帕路奇亚",
      french: "Palkia",
    },
    type: ["Eau", "Dragon"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 100,
      "Sp. Attack": 150,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Spatial Pokémon",
    description:
      "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
    evolution: {},
    profile: {
      height: "4.2 m",
      weight: "336 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/484.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/484.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/484.png",
    },
  },
  {
    id: 485,
    name: {
      english: "Heatran",
      japanese: "ヒードラン",
      chinese: "席多蓝恩",
      french: "Heatran",
    },
    type: ["Feu", "Acier"],
    base: {
      HP: 91,
      Attack: 90,
      Defense: 106,
      "Sp. Attack": 130,
      "Sp. Defense": 106,
      Speed: 77,
    },
    species: "Lava Dome Pokémon",
    description:
      "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "430 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Flash Feu", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/485.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/485.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/485.png",
    },
  },
  {
    id: 486,
    name: {
      english: "Regigigas",
      japanese: "レジギガス",
      chinese: "雷吉奇卡斯",
      french: "Regigigas",
    },
    type: ["Normal"],
    base: {
      HP: 110,
      Attack: 160,
      Defense: 110,
      "Sp. Attack": 80,
      "Sp. Defense": 110,
      Speed: 100,
    },
    species: "Colossal Pokémon",
    description:
      "There is an enduring legend that states this Pokémon towed continents with ropes.",
    evolution: {},
    profile: {
      height: "3.7 m",
      weight: "420 kg",
      egg: ["Undiscovered"],
      ability: [["Slow Start", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/486.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/486.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/486.png",
    },
  },
  {
    id: 487,
    name: {
      english: "Giratina",
      japanese: "ギラティナ",
      chinese: "骑拉帝纳",
      french: "Giratina",
    },
    type: ["Fantôme", "Dragon"],
    base: {
      HP: 150,
      Attack: 100,
      Defense: 120,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      Speed: 90,
    },
    species: "Renegade Pokémon",
    description:
      "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
    evolution: {},
    profile: {
      height: "4.5 m",
      weight: "750 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/487.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/487.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/487.png",
    },
  },
  {
    id: 488,
    name: {
      english: "Cresselia",
      japanese: "クレセリア",
      chinese: "克雷色利亚",
      french: "Cresselia",
    },
    type: ["Psy"],
    base: {
      HP: 120,
      Attack: 70,
      Defense: 120,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      Speed: 85,
    },
    species: "Lunar Pokémon",
    description:
      "Those who sleep holding Cresselia’s feather are assured of joyful dreams. It is said to represent the crescent moon.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "85.6 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "0:100",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/488.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/488.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/488.png",
    },
  },
  {
    id: 489,
    name: {
      english: "Phione",
      japanese: "フィオネ",
      chinese: "霏欧纳",
      french: "Phione",
    },
    type: ["Eau"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 80,
    },
    species: "Sea Drifter Pokémon",
    description:
      "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "3.1 kg",
      egg: ["Eau 1", "Fée"],
      ability: [["Hydration", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/489.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/489.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/489.png",
    },
  },
  {
    id: 490,
    name: {
      english: "Manaphy",
      japanese: "マナフィ",
      chinese: "玛纳霏",
      french: "Manaphy",
    },
    type: ["Eau"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Seafaring Pokémon",
    description:
      "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "1.4 kg",
      egg: ["Eau 1", "Fée"],
      ability: [["Hydration", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/490.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/490.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/490.png",
    },
  },
  {
    id: 491,
    name: {
      english: "Ténèbresrai",
      japanese: "ダークライ",
      chinese: "达克莱伊",
      french: "Ténèbresrai",
    },
    type: ["Ténèbres"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 90,
      "Sp. Attack": 135,
      "Sp. Defense": 90,
      Speed: 125,
    },
    species: "Pitch-Black Pokémon",
    description:
      "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "50.5 kg",
      egg: ["Undiscovered"],
      ability: [["Bad Dreams", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/491.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/491.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/491.png",
    },
  },
  {
    id: 492,
    name: {
      english: "Shaymin",
      japanese: "シェイミ",
      chinese: "谢米",
      french: "Shaymin",
    },
    type: ["Plante"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Gratitude Pokémon",
    description:
      "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "2.1 kg",
      egg: ["Undiscovered"],
      ability: [["Natural Cure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/492.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/492.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/492.png",
    },
  },
  {
    id: 493,
    name: {
      english: "Arceus",
      japanese: "アルセウス",
      chinese: "阿尔宙斯",
      french: "Arceus",
    },
    type: ["Normal"],
    base: {
      HP: 120,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 120,
      "Sp. Defense": 120,
      Speed: 120,
    },
    species: "Alpha Pokémon",
    description:
      "It is told in mythology that this Pokémon was born before the universe even existed.",
    evolution: {},
    profile: {
      height: "3.2 m",
      weight: "320 kg",
      egg: ["Undiscovered"],
      ability: [["Multitype", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/493.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/493.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/493.png",
    },
  },
];

// if(typeof(data[4].evolution.next) !== 'undefined') {
//     let monPokemon = data[4];
//     if(36 >= parseInt(data[4].evolution.next[0][1].substring(6))) {
//         console.log("Votre "+ data[4].name.french + " évolue en " + data[data[4].evolution.next[0][0]-1].name.french);
//         console.log(data[data[4].evolution.next[0][0]-1].base);
//     }
//     console.log("Pokemon name : " +  data[1].name.french);
//     console.log("prochaine évolution possible d'id : "+data[4].evolution.next[0][0])
//         console.log("prochaine évolution possible au niveau : "+data[4].evolution.next[0][1].substring(6));
//     // console.log(data[4].evolution.next[0][0])
// } else {
//     console.log("un probleme est detecté")
// }
