export const funcStartAudio = (value, self) => {
  /** Add Walking sound for the player */
  self.sounds["se"] = {
    walk: self.sound.add("walk", {
      loop: false,
      volume: 1,
      rate: 1,
    }),
    bike: self.sound.add("bike", {
      loop: false,
      volume: 1,
      rate: 1,
    }),

    bump: self.sound.add("bump", {
      loop: false,
      volume: 1,
    }),
  };

  try {
    const name = value.split("|")[0];
    const loop = value.split("|")[1] === "true";
    const volume = parseFloat(value.split("|")[2]);
    const rate = parseFloat(value.split("|")[3]);

    if (!name.match(/^[A-Z][a-zA-Z]+$/)) {
      throw new Error("Invalid name format");
    }

    if (typeof loop !== "boolean") {
      throw new Error("Invalid loop value");
    }

    if (isNaN(volume) || volume < 0 || volume > 1) {
      throw new Error("Invalid volume value");
    }

    if (isNaN(rate) || rate < 0.5 || rate > 4) {
      throw new Error("Invalid rate value");
    }

    self.sounds["bgm"] = {
      map: self.sound.add(name, {
        loop: loop,
        volume: volume,
        rate: rate,
      }),
    };

    self.sounds["bgm"].map.play();
  } catch (error) {
    console.error(error);
  }
};

