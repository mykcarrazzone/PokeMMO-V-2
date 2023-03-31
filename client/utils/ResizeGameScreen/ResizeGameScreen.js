export function resizeGameScreen(self) {
  if (window.innerWidth < 768) {
    self.cameras.main.setZoom(0.5);
  } else if (window.innerWidth < 1024) {
    self.cameras.main.setZoom(0.7);
  } else if (window.innerWidth < 1440) {
    self.cameras.main.setZoom(0.8);
  } else {
    self.cameras.main.setZoom(1.3);
  }
}
