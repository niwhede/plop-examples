const componentGenerator = require("./component");

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", componentGenerator);
};
