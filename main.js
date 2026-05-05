const plr = document.getElementById("player");
const the = "the fish";
document.addEventListener("keydown", movement);
document.addEventListener("keyup", notMoving);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getTranslateXY(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return {
        translateX: matrix.m41,
        translateY: matrix.m42
    };
}

const movements = new Worker("movement.js");

movements.onmessage = function(event) {
  plr.style.transform += event.data;
}

let keys = ["none","none","none","none"];

function notMoving(e) {
  if (e.key == "w" || "a" || "s" || "d") {
    keys[keys.indexOf(e.key)] = "none";
  }
}

function movement(e) {
    sleep(100);
    console.log("1st");
    if (e.key == "w") {
      keys[0] = e.key;
    }
    if (e.key == "a") {
      keys[1] = e.key;
    }
    if (e.key == "s") {
      keys[2] = e.key;
    }
    if (e.key == "d") {
      keys[3] = e.key;
    }
    movements.postMessage(keys);
}

function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}
