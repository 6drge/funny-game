onmessage = (e) => {
  let plr = e[0]
  let key = e[1]
  if (key == "s") {
    plr.style.transform += "translate(0px, 10px)";
      console.log("2nd");
  }
  if (key == "d") {
    plr.style.transform += "translate(10px, 0px)";
      console.log("2nd");
  }
  if (key == "w") {
    plr.style.transform += "translate(0px, -10px)";
      console.log("2nd");
  }
  if (key == "a") {
    plr.style.transform += "translate(-10px, 0px)";
      console.log("2nd");
  }
};
