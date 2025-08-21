export interface InputDirection {
  forwardPressed: boolean;
  backwardPressed: boolean;
  leftPressed: boolean;
  rightPressed: boolean;
  space: boolean;
  control: boolean;
}

export function setupInput() {
  const input = {
    forwardPressed: false,
    backwardPressed: false,
    leftPressed: false,
    rightPressed: false,
    space: false,
    control: false
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
      input.space = true;
    } else if (keyCode == 16) {
      input.control = true;
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
      input.space = false;
    } else if (keyCode == 16) {
      input.control = false;
    }
  };
  return input;
}