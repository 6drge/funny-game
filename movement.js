onmessage = (keys) => {
  if (keys.includes("s")) {
      postMessage("translate(0px, 10px)");
  }
  if (keys.includes("d")) {
      postMessage("translate(10px, 0px)");
  }
  if (keys.includes("w")) {
      postMessage("translate(0px, -10px)");
  }
  if (keys.includes("a")) {
      postMessage("translate(-10px, 0px)");
  }
};
