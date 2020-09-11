
/**
 * Examples of all inquirer prompts
 */

module.exports = {
  description: "Inquirer demo",
  prompts: [
    {
      type: "input",
      name: "input",
      message: "Enter some text",
      default: 'Default text'
    },
    {
      type: "password",
      name: "password",
      message: "Enter a password",
      mask: true,
    },
    {
      type: "number",
      name: "number",
      message: "Enter a number",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Yes or no",
      default: true,
    },
    {
      type: "list",
      name: "list",
      message: "A list",
      choices: [
        {
          name: "First choice",
          value: "1",
        },
        {
          name: "Second choice",
          value: "2",
        },
        {
          name: "Third choice",
          value: "3",
        },
      ],
    },
    {
      type: "rawlist",
      name: "rawlist",
      message: "A raw list",
      choices: [
        {
          name: "First choice",
          value: "1",
        },
        {
          name: "Second choice",
          value: "2",
        },
        {
          name: "Third choice",
          value: "3",
        },
      ],
    },
    {
      type: "checkbox",
      name: "checkbox",
      message: "A checkbox list",
      choices: [
        {
          name: "First choice",
          value: "first",
        },
        {
          name: "Second choice",
          value: "second",
        },
        {
          name: "Third choice",
          value: "third",
        },
      ],
    },
    {
      type: 'expand',
      name: 'expand',
      message: 'Expand',
      choices: [
        {
          name: "Yes",
          value: "yes",
          key: "y"
        },
        {
          name: "No",
          value: "no",
          key: "n"
        },
        {
          name: "Maybe",
          value: "maybe",
          key: "m"
        },
      ]
    },
    {
      type: 'editor',
      name: 'editor',
      message: 'Opens default editor',
    },
  ],
  actions: (data) => {
    console.log(data);
    return [];
  },
};
