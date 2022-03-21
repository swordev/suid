const prettier = require(`${__dirname}/../../.prettierrc`);
module.exports = {
  ...prettier,
  importOrder: [
    "^prismjs",
    "^prismjs/components/prism-typescript$",
    "^prismjs/components/prism-tsx$",
    "^[./]",
  ],
};
