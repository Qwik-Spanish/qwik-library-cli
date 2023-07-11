import { GIT_IGNORE } from './git-ignore.content';
import fs from 'fs';
import path from 'path';
import colors from 'picocolors';
import chalk from 'chalk';
import shell from 'shelljs';
import { render } from './templates';

export function createProject(projectPath: string) {
  // Comprobar que no existe el directorio
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(
        'The project cannot be created because it already exists. Please try with a different name.'
      )
    );
    return false;
  }
  fs.mkdirSync(projectPath);
  return true;
}

export /**
 * Create new project from questions answers and use data to customization our project
 * @param templatePath Select template path to copy all directory
 * @param projectName Assign desire project name
 * @param renderData Dinamically render data to add in package name, author, email, web,...
 */
function createDirectoriesFilesContent(
  templatePath: string,
  projectName: string,
  renderData: { author: string; email: string; webpage: string },
  actualDirectory: string
) {
  const listFileDirectories = fs.readdirSync(templatePath);

  listFileDirectories.forEach((item: string) => {
    const originalPath = path.join(templatePath, item);

    const stats = fs.statSync(originalPath);

    const writePath = path.join(actualDirectory, projectName, item);

    if (stats.isFile()) {
      let contents = fs.readFileSync(originalPath, 'utf-8');
      try {
        contents = render(contents, { projectName, ...renderData }); // values use to implement in templates dinamically
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
        path.join(projectName, item),
        renderData,
        actualDirectory
      );
    }
  });
}

export function postProccess(templatePath: string, targetPath: string) {
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
    console.log(
      chalk.yellow(
        `Please wait a moment until the project dependencies are installed... :)`
      )
    );
    const result = shell.exec('npm install');
    console.log(chalk.green(`Add all dependencies correctly in ${targetPath}`));

    if (result.code != 0) {
      console.log(
        chalk.redBright('No dependencies installed, try running `npm install`')
      );
      return false;
    }
  }
}
