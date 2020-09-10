module.exports = {
  description: "Other",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
    },
    {
      type: "checkbox",
      name: "styledSystem",
      message: "This is checkbox",
      choices: [
        {
          name: "Space",
          value: "SpaceProps"
        },
        {
          name: "Layout",
          value: "LayoutProps"
        },
      ]
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "../src/other/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./other/other.js.hbs",
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/other/",
    });

    return actions;
  },
};
