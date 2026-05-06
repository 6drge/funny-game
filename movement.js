onmessage = (e) => {
  let keys = e.data;
  let transform = "translate(0px, 0px)";
  if (keys.includes("s")) {
      transform += "translate(0px, 10px)";
  }
  if (keys.includes("d")) {
      transform += "translate(10px, 0px)";
  }
  if (keys.includes("w")) {
      transform += "translate(0px, -10px)";
  }
  if (keys.includes("a")) {
      transform += "translate(-10px, 0px)"
  }
  postMessage(transform);
};
