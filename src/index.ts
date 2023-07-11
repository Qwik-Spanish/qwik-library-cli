#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { intro } from '@clack/prompts';
import colors from 'picocolors';

import { getQuestions } from './constants/questions';
import { createDirectoriesFilesContent, createProject, postProccess } from './utils/project';

// Take different template options to create new project

const TEMPLATE_OPTIONS = fs.readdirSync(path.join(__dirname, 'templates'));


intro(
  colors.inverse(
    `Qwik Library Generator CLI by ${colors.yellow(
      ' Anartz Mugika Ledo - @mugan86 '
    )}`
  )
);

const ACTUAL_DIRECTORY = process.cwd();

inquirer.prompt(getQuestions(TEMPLATE_OPTIONS)).then((answers) => {
  
  // Extract answers all data
  const { project, template, author, email, webpage } = answers;

  const templatePath = path.join(__dirname, 'templates', template);
  const pathTarget = path.join(ACTUAL_DIRECTORY, project);

  if (!createProject(pathTarget)) return;

  createDirectoriesFilesContent(templatePath, project, {
    author,
    email,
    webpage,
  }, ACTUAL_DIRECTORY);

  postProccess(templatePath, pathTarget);
});

