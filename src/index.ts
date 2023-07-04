#!/usr/bin/env node

import { render } from './utils/templates';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';

// Take different template options to create new project

const TEMPLATE_OPTIONS = fs.readdirSync(path.join(__dirname, 'templates'));

const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: '¿Qué tipo de project quieres generar?',
    choices: TEMPLATE_OPTIONS,
  },
  {
    name: 'project',
    type: 'input',
    message: '¿Cuál es el nombre del proyecto?',
    validate: function (input: string) {
      if (/^([a-z@]{1}[a-z\-\.\\\/0-9]{0,213})+$/.test(input)) {
        return true;
      }
      return 'El nombre del project solo puede tener 214 carácteres y tiene que empezar en minúsculas o con una arroba';
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
      chalk.red('No puedes crear el project porque ya existe, intenta con otro')
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
    shell.cd(targetPath);
    isNode && shell.exec('git init');
    console.log(chalk.green(`Instalando las dependencias en ${targetPath}`));
    const result = shell.exec('yarn');
    if (result.code != 0) {
      return false;
    }
  }
}

/**
 * 





 */
