#!/usr/bin/env node

import { render } from './utils/templates';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';
import { intro } from '@clack/prompts';
import colors from 'picocolors';
import { GIT_IGNORE } from './utils/git-ignore.content';

// Take different template options to create new project

const TEMPLATE_OPTIONS = fs.readdirSync(path.join(__dirname, 'templates'));

const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'Select project template',
    choices: TEMPLATE_OPTIONS,
  },
  {
    name: 'project',
    type: 'input',
    message: 'What is the name of the project?',
    validate: function (input: string) {
      if (/^([a-z@]{1}[a-z\-\.\\\/0-9]{0,213})+$/.test(input)) {
        return true;
      }
      return 'The project name can only have 214 characters and must start with a lowercase letter or an at sign.';
    },
  },
  /*{
        name: 'github',
        type: 'input',
        message: 'Usuario Github'
    },
    {
        name: 'author',
        type: 'input',
        message: 'Desarrolador - Nombre y Apellidos'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Desarrollador - Email'
    }*/
];

intro(
  colors.inverse(`Qwik Library Generator CLI by ${colors.yellow(' Anartz Mugika Ledo - @mugan86 ')}`)
)

const ACTUAL_DIRECTORY = process.cwd();
inquirer.prompt(QUESTIONS).then((answers) => {
  const template = answers['template'];
  const project = answers['project'];

  const templatePath = path.join(__dirname, 'templates', template);
  const pathTarget = path.join(ACTUAL_DIRECTORY, project);
  console.log(template, project, templatePath, pathTarget);
  if (!createProject(pathTarget)) return;

  createDirectoriesFilesContent(templatePath, project);

  postProccess(templatePath, pathTarget);
});

function createProject(projectPath: string) {
  // Comprobar que no existe el directorio
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red('The project cannot be created because it already exists. Please try with a different name.')
    );
    return false;
  }
  fs.mkdirSync(projectPath);
  return true;
}

function createDirectoriesFilesContent(
  templatePath: string,
  projectName: string
) {
  const listFileDirectories = fs.readdirSync(templatePath);

  listFileDirectories.forEach((item) => {
    const originalPath = path.join(templatePath, item);

    const stats = fs.statSync(originalPath);

    const writePath = path.join(ACTUAL_DIRECTORY, projectName, item);

    if (stats.isFile()) {
      let contents = fs.readFileSync(originalPath, 'utf-8');
      try {
        contents = render(contents, { projectName }); // values use to implement in templates dinamically
      } catch (e) {
        contents = fs.readFileSync(originalPath, 'utf-8');
      }

      fs.writeFileSync(writePath, contents, 'utf-8');
      // Aditional info
      const CREATE = chalk.green('CREATE ');
      const size = stats['size'];
      console.log(`${CREATE} ${writePath} (${size} bytes)`);
    } else if (stats.isDirectory()) {
      fs.mkdirSync(writePath);
      createDirectoriesFilesContent(
        path.join(templatePath, item),
        path.join(projectName, item)
      );
    }
  });
}

function postProccess(templatePath: string, targetPath: string) {
  const isNode = fs.existsSync(path.join(templatePath, 'package.json'));

  if (isNode) {
    // Contenido del archivo .gitignore
    const gitignoreContent = GIT_IGNORE;
    shell.cd(targetPath);
    isNode && shell.exec('git init');
    // We have created the .gitignore file.
    shell.ShellString(gitignoreContent).to('.gitignore');
    // Verifying if the .gitignore file was created correctly...
    if (shell.test('-f', '.gitignore')) {
      console.log(`${colors.green(' .gitignore create correctly ')}`);
    } else {
      console.error('Error al crear el archivo .gitignore.');
    }
    console.log(chalk.green(`Installing the dependencies in ${targetPath}`));
    const result = shell.exec('npm install');
    if (result.code != 0) {
      return false;
    }
  }
}
