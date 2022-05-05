module.exports = async ({ core }) => {
  const output = {};
  const published = JSON.parse(process.env.PUBLISHED_PACKAGES);

  for (const { name, version } of published) {
    output[`${name}:version`] = version;
    output[`${name}:published`] = true;
    if (name === "@suid/site") {
      output[`${name}:gh-pages-branch`] = version.includes("next")
        ? "gh-pages-next"
        : "gh-pages";
    }
  }

  for (const name in output) {
    core.setOutput(name, output[name]);
  }

  console.log(output);
};
