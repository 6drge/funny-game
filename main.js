const plr = document.getElementById("player");
const the = "the";
document.addEventListener("keydown", movement);

function getTranslateXY(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return {
        translateX: matrix.m41,
        translateY: matrix.m42
    };
}

function movement(e) {
  if (e.key == "w") {
    let xy = getTranslateXY(plr);
    let x1 = xy.translateX;
    let x2 = xy.translateY;
    let up = x1+1;
    plr.style.transform = "translate(${x1}px, ${up}px);"
  }
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
