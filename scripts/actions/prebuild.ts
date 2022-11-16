import genIconsMaterialTyping from "./genIconsMaterialTyping.js";

async function prebuild() {
  await genIconsMaterialTyping();
}

export default prebuild;
