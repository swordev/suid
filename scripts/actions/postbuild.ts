import genRes from "~/actions/genRes";
import patchLibModulesLinks from "~/actions/patchLibModulesLinks";

async function postbuild() {
  await genRes();
  await patchLibModulesLinks();
}

export default postbuild;
