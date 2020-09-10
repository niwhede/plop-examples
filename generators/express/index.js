module.exports = {
  description: "Functional React component",
  prompts: [
    {
      type: "input",
      name: "path",
      message: "Endpoint",
    },
    {
      type: "rawlist",
      name: "method",
      message: "Which method?",
      choices: [
        {
          name: 'get',
          value: 'get'
        },
        {
          name: 'post',
          value: 'post'
        },
        {
          name: 'put',
          value: 'put'
        },
      ]
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "../express/{{properCase path}}/{{properCase path}}.js",
        templateFile: "./express/routes.js.hbs",
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
