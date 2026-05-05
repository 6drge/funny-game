const plr = document.getElementById("player");
const the = "the";
document.addEventListener("keydown", movement);

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

function movement(e) {
    sleep(500)
    console.log("1st");
  movements.postMessage([plr, e.key]);
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
