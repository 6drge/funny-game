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
    let y1 = xy[1];
    let up = y1+1;
    plr.style.transform = "translate(${x1}px, ${up}px);";
  }
  if (e.key == "d") {
    let xy = getTranslateXY(plr);
    let x1 = xy[0];
    let right = x1+1;
    plr.style.transform = "translate(${right}px, ${y1}px);";
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
