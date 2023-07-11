import { EMAIL_REGEX, NAME_PACKAGE_REGEX, WEBPAGE_REGEX } from './regex';

export function getQuestions(templateOptions: string[]) {
  return [
    {
      name: 'template',
      type: 'list',
      message: 'Select project template',
      choices: templateOptions,
    },
    {
      name: 'project',
      type: 'input',
      message: 'What is the name of the project?',
      validate: function (input: string) {
        if (NAME_PACKAGE_REGEX.pattern.test(input)) {
          return true;
        }
        return NAME_PACKAGE_REGEX.message;
      },
    },
    {
      name: 'author',
      type: 'input',
      message: 'Package Author - Name and Lastname',
    },
    {
      name: 'email',
      type: 'input',
      message: 'Author - Email',
      validate: function (input: string) {
        if (EMAIL_REGEX.pattern.test(input)) {
          return true;
        }
        return EMAIL_REGEX.message;
      },
    },
    {
      name: 'webpage',
      type: 'input',
      message: 'Author - Webpage',
      validate: function (input: string) {
        if (WEBPAGE_REGEX.pattern.test(input)) {
          return true;
        }
        return WEBPAGE_REGEX.message;
      },
    },
  ];
}
