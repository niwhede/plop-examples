const componentGenerator = require("./component");
const path = require("path");
const { execSync } = require("child_process");

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", componentGenerator);
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
