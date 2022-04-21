import patchWsModulesLinks from "~/actions/patchWsModulesLinks";

async function postinstall() {
  await patchWsModulesLinks();
}

export default postinstall;
