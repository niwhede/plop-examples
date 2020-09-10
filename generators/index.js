const componentGenerator = require("./component");
const viewGenerator = require("./view");
const otherGenerator = require("./other");
const demoGenerator = require("./demo");
const expressGenerator = require("./express");

const path = require("path");
const { execSync } = require("child_process");

module.exports = function (plop) {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("view", viewGenerator);
  plop.setGenerator("other", otherGenerator);
  plop.setGenerator("demo", demoGenerator);
  plop.setGenerator("express", expressGenerator);

  plop.setActionType("prettify", (answers, config) => {
    // Copied from react-boilerplate
    const folderPath = `${path.join(
      __dirname,
      "/../src/",
      config.path,
      plop.getHelper("properCase")(answers.name),
      "**",
      "**.tsx"
    )}`;

    try {
      execSync(`yarn prettify "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
};
