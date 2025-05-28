export function setupInput() {
  const input = {
    forwardPressed: false,
    backwardPressed: false,
    leftPressed: false,
    rightPressed: false,
    jump: false,
    crouched: false
  }
  document.addEventListener("keydown", onDocumentKeyDown, false);
  document.addEventListener("keyup", onDocumentKeyUp, false);
  function onDocumentKeyDown(event: KeyboardEvent) {
    var keyCode = event.which;
    if (keyCode == 87) {
      input.forwardPressed = true;
    } else if (keyCode == 83) {
      input.backwardPressed = true;
    } else if (keyCode == 65) {
      input.leftPressed = true;
    } else if (keyCode == 68) {
      input.rightPressed = true;
    } else if (keyCode == 32) {
      input.jump = true;
    } else if (keyCode == 16) {
      input.crouched = true;
    }
  };
  function onDocumentKeyUp(event: KeyboardEvent) {
    var keyCode = event.which;
    if (keyCode == 87) {
      input.forwardPressed = false;
    } else if (keyCode == 83) {
      input.backwardPressed = false;
    } else if (keyCode == 65) {
      input.leftPressed = false;
    } else if (keyCode == 68) {
      input.rightPressed = false;
    } else if (keyCode == 32) {
      input.jump = false;
    } else if (keyCode == 16) {
      input.crouched = false;
    }
  };
  return input;
}