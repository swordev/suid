import genIconsMaterialTyping from "~/actions/genIconsMaterialTyping";

async function prebuild() {
  await genIconsMaterialTyping();
}

export default prebuild;
