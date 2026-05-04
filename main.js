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
    console.log("1st")
  if (e.key == "s") {
    plr.style.transform += "translate(0px, 10px)";
      console.log("2nd");
  }
  if (e.key == "d") {
    plr.style.transform += "translate(10px, 0px)";
      console.log("2nd");
  }
  if (e.key == "w") {
    plr.style.transform += "translate(0px, -10px)";
      console.log("2nd");
  }
  if (e.key == "a") {
    plr.style.transform += "translate(-10px, 0px)";
      console.log("2nd");
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
