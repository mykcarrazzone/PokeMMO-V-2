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

  let texte = scene.add
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

  // Créer un graphique pour le fond de texte
  let graphics = scene.add
    .graphics()
    .setScrollFactor(0)
    .setDepth(1009)
    .setScale(1);
  graphics.beginPath();

  let width = texte.width + padding * 2;
  let height = texte.height + padding * 2;

  // Dessiner le fond de texte arrondi
  graphics.fillStyle(backgroundColor.replace("#", "0x"), 1);
  graphics.fillRoundedRect(x - padding, y - padding, width, height, radius);

  // Regrouper le texte et le graphique
  let group = scene.add.group();
  group.add(graphics);
  group.add(texte);
}
