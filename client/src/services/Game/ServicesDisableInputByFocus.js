export const servicesDisableInputByFocus = (self) => {
  document.addEventListener("mousedown", function (event) {
    var elementClicked = document.elementFromPoint(
      event.clientX,
      event.clientY
    );

    if (elementClicked.nodeName == "CANVAS") {
      self.gameHasFocused = true;
      self.input.keyboard.enabled = true;
      self.input.keyboard.enableGlobalCapture();
    } else {
      self.gameHasFocused = false;
      self.input.keyboard.enabled = false;
      self.input.keyboard.disableGlobalCapture();
    }
  });
};
