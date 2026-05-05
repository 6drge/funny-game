onmessage = (e) => {
  let plr = e[0];
  let keys = e[1];
  if (keys.includes("s")) {
    plr.style.transform += "translate(0px, 10px)";
      console.log("2nd");
  }
  if (keys.includes("d")) {
    plr.style.transform += "translate(10px, 0px)";
      console.log("2nd");
  }
  if (keys.includes("w")) {
    plr.style.transform += "translate(0px, -10px)";
      console.log("2nd");
  }
  if (keys.includes("a")) {
    plr.style.transform += "translate(-10px, 0px)";
      console.log("2nd");
  }
};
