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
    {
      type: "confirm",
      name: "wantStories",
      default: false,
      message: "Do you want stories?",
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "../src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./component/component.js.hbs",
        abortOnFail: true,
      },
    ];

    if (data.wantTests) {
      actions.push({
        type: "add",
        path:
          "../src/components/{{properCase name}}/{{properCase name}}.test.tsx",
        templateFile: "./component/component-test.js.hbs",
        abortOnFail: true,
      });
    }

    if (data.wantStories) {
      actions.push({
        type: "add",
        path:
          "../src/components/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "./component/component-stories.js.hbs",
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
