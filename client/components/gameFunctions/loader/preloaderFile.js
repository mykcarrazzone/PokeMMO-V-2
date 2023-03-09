export function preloaderFile(self) {
  self.progressBar = self.add.graphics();
  self.progressBox = self.add.graphics();

  self.progressBox.fillStyle(0x222222, 0.8);
  self.progressBox.fillRect(
    window.innerWidth / 2 - 150,
    window.innerHeight / 2 - 30,
    300,
    50
  );

  self.loadingText = self.make.text({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2 - 50,
    text: "Chargement en cours...",
    style: {
      font: "20px monospace",
      fill: "#ffffff",
    },
  });
  self.loadingText.setOrigin(0.5, 0.5);

  self.percentText = self.make.text({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    text: "0%",
    style: {
      font: "18px monospace",
      fill: "#ffffff",
    },
  });
  self.percentText.setOrigin(0.5, 0.5);

  self.load.on("progress", function (value) {
    self.percentText.setText(parseInt(value * 100) + "%");
    self.progressBar.clear();
    self.progressBar.fillStyle(0xffffff, 1);
    self.progressBar.fillRect(
      window.innerWidth / 2 - 150 + 10,
      window.innerHeight / 2 - 30 + 10,
      280 * value,
      30
    );
  });
}
