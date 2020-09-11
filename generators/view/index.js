module.exports = {
  description: "Appication view",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "../src/views/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./component/component.js.hbs",
        abortOnFail: true,
      },
    ];
    actions.push({
      type: "prettify",
      path: "/views/",
    });

    return actions;
  },
};
