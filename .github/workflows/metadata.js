module.exports = async ({ core }) => {
  const output = {};
  const published = JSON.parse(process.env.PUBLISHED_PACKAGES);

  for (const { name, version } of published) {
    output[`${name}:version`] = version;
    if (name === "@suid/site") {
      output[`${name}:published`] = !version.includes("next");
    } else {
      output[`${name}:published`] = true;
    }
  }

  for (const name in output) {
    core.setOutput(name, output[name]);
  }

  console.log(output);
};
