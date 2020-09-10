module.exports = {
  description: "Functional React component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
    },
    {
      type: "confirm",
      name: "wantTests",
      default: true,
      message: "Do you want tests?",
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: "add",
        path: "../src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./component/component.js.hbs",
        abortOnFail: true,
      },
    ];

    // If the user wants i18n messages
    if (data.wantTests) {
      actions.push({
        type: "add",
        path:
          "../src/components/{{properCase name}}/{{properCase name}}.test.tsx",
        templateFile: "./component/component-test.js.hbs",
        abortOnFail: true,
      });
    }

    // actions.push({
    //   type: "prettify",
    //   path: "/components/",
    // });

    return actions;
  },
};
