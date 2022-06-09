import genIconsMaterialTyping from "./genIconsMaterialTyping";

async function prebuild() {
  await genIconsMaterialTyping();
}

export default prebuild;
