export function createMessageBoxUi(data) {
  const {
    scene,
    x,
    y,
    text,
    radius,
    fontFamily,
    textColor,
    shadow,
    backgroundColor,
    fontSize,
    padding,
  } = data;

  // Ajouter le texte
  const texte = scene.add
    .text(x, y, text, {
      fontFamily: fontFamily,
      shadow: {
        offsetX: shadow,
        offsetY: shadow,
        color: "#000000",
        blur: 0,
        stroke: true,
        fill: true,
      },
      fontSize: fontSize,
      color: textColor,
    })
    .setScrollFactor(0)
    .setDepth(3020)
    .setScale(1);

  // Ajouter le graphique
  let graphics = scene.add
    .graphics()
    .setScrollFactor(0)
    .setDepth(3010)
    .setScale(1);

  const width = texte.width + padding * 2;
  const height = texte.height + padding * 2;
  graphics.fillStyle(backgroundColor.replace("#", "0x"), 1);
  graphics.fillRoundedRect(x - padding, y - padding, width, height, radius);

  // Animation de transition
  graphics.alpha = 0;
  graphics.y -= height;
  scene.tweens.add({
    targets: graphics,
    y: graphics.y + height,
    alpha: 1,
    duration: 2000,
    ease: "Cubic.easeOut",
  });

  texte.alpha = 0;
  texte.setPosition(x, y - height);
  scene.tweens.add({
    targets: texte,
    y: y,
    alpha: 1,
    duration: 2000,
    ease: "Cubic.easeOut",
  });

  // Regrouper le texte et le graphique
  let group = scene.add.group();
  group.add(graphics);
  group.add(texte);
}

export const funcAddMapNameSign = (value, self) => {
  const mapOwnPlayer = "Maison de";
  let mapName;

  try {
    if (typeof value !== "string") {
      throw new Error("[funcAddMapNameSign] - Invalid value in @if");
    } else if (value.length > 0) {
      mapName = value.includes(mapOwnPlayer) ? (value = "Maison") : value;
    } else {
      throw new Error("[funcAddMapNameSign] - Invalid value in @else");
    }
  } catch (error) {
    console.log("Error in addMapNameSign: ", error);
  }

  createMessageBoxUi({
    scene: self,
    x: 186,
    y: 76.5,
    text: mapName,
    radius: 5,
    fontFamily: "Comic Sans Ms",
    textColor: "#ffffff",
    shadow: 1,
    backgroundColor: "#1F2937",
    fontSize: 17,
    padding: 12.5,
  });
};
