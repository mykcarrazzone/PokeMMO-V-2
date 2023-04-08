export const servicesDisableInputByFocus = (self) => {
  /** FOR DIALOG SCENE */
  self.dialogIsActive = false;
  self.events.on("Dialog", (active) => {
    console.log("In Dialog", active);
    if (active) {
      self.dialogIsActive = true;
      console.log("Dialog", active);
      self.input.keyboard.enabled = false;
      self.input.keyboard.disableGlobalCapture();
    } else {
      self.dialogIsActive = false;
      console.log("Dialog", active);
      self.input.keyboard.enabled = true;
      self.input.keyboard.enableGlobalCapture();
    }
  });
  /***/

  /** FOR GAME SCENE */
  document.addEventListener("mousedown", function (event) {
    var elementClicked = document.elementFromPoint(
      event.clientX,
      event.clientY
    );

    if (elementClicked.nodeName == "CANVAS" && !self.dialogIsActive) {
      self.gameHasFocused = true;
      self.input.keyboard.enabled = true;
      self.input.keyboard.enableGlobalCapture();
    } else {
      self.gameHasFocused = false;
      self.input.keyboard.enabled = false;
      self.input.keyboard.disableGlobalCapture();
    }
  });
  /***/
};
