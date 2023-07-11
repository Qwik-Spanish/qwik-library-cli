# Qwik Library Generator from  CLI

[![npm](https://img.shields.io/npm/v/@mugan86/qwik-library-cli)](https://www.npmjs.com/package/@mugan86/qwik-library-cli)


Package: https://www.npmjs.com/package/@mugan86/qwik-library-cli

## Instrucciones / Instructions

* [Español](#español)
* [English](#english)


## ESPAÑOL

Generador de proyectos por consola para agilizar el proceso de creación de nuevos proyectos de librería en Qwik con configuraciones que se han probado y adaptado a las necesidades de producción

## Instrucciones de uso

Para poder trabajar con el CLI y generar proyectos de librería con agilidad, debemos de seguir las siguientes instrucciones.

### Iniciar la ejecución

#### Ejecutar sin instalar nada

Descargamos el fichero binario mediante la ejecución de `npx`:

```bash
/* Última versión */
npx @mugan86/qwik-library-cli

/* Versión concreta */
npx @mugan86/qwik-library-cli@<version>
```

#### Instalando el CLI en nuestro equipo

Ejecutamos para instalar globalmente:

```bash
npm i -g @mugan86/qwik-library-cli
```

Y una vez instalado, ejecutaremos el siguiente comando, que será accesible desde cualquier parte de nuestro equipo:

```bash
qwik-library-cli
```

### Trabajando con el CLI en marcha

Una vez ejecutado el proyecto de CLI desde nuestra opción preferida (sin instalar / instalando), en los dos casos nos debería de mostrar una ventana como la que veís a continuación:


![CLI Start Templates](https://raw.githubusercontent.com/Qwik-Spanish/qwik-library-cli/master/docs/images/cli-start-templates.png)

Tenemos la opción de seleccionar los proyectos que están almacenados en `src/templates`

¿Qué contiene cada proyecto?

- `hello-logo`: Librería muy básica donde encontramos los componentes que se nos proporciona por defecto en la documentación oficial. A diferencia de lo que podemos obtener en la plantilla oficial se implementan unas configuraciones adicionales para mejorar y resolver algunos problemas encontrados como la generación de types entre otras cosas.
- `leaflet-map`: Plantilla ideal para iniciar una librería de componentes basada para proyectos de mapas. En este caso obtendremos lo básico que se necesita para visualizar un mapa, con sus dependencias y configuraciones que son necesarias para su correcto funcionamiento. Basado en [este artículo](https://medium.com/@mugan86/qwik-integrar-mapas-con-leaflet-32435b75b4f6) escrito hace un tiempo.
- `counter`: Proyecto de contador. Ejemplo de contador / descontador donde trabajamos haciendo uso de un custom hook, que nos sirva de base para poder inspirarno y crear proyectos más avanzados.

¿Tienes alguna sugerencia y / o idea de mejora? ¿Quieres colaborar?

## Contacto

En esta sección os facilito las diferentes formas de seguirme y/o poder contactarme para colaborar (no consultorías, recibo e-mails de este estilo para ayudar a crear proyectos y gratis, no tengo tiempo)

- Github: [mugan86](https://github.com/mugan86)
- Medium Tech Blog: [mugan86](https://mugan86.medium.com/)
- Youtube: [mugan86](https://www.youtube.com/mugan86)
- Twitter: [mugan86](https://twitter.com/mugan86)

## ENGLISH

Console project generator to streamline the process of creating new library projects in Qwik with configurations that have been tested and adapted to production needs

## Instructions for use

In order to work with the CLI and generate library projects with agility, we must follow the following instructions.

### Start execution

#### Run without installing anything

We download the binary file by running `npx`:

```bash
/* Last version */
npx @mugan86/qwik-library-cli

/* Specific version */
npx @mugan86/qwik-library-cli@<version>
```

#### Installing the CLI on our computer

We execute to install globally:

```bash
npm i -g @mugan86/qwik-library-cli
```

And once installed, we will execute the following command, which will be accessible from any part of our computer:

```bash
qwik-library-cli
```

### Working with the CLI running

Once the CLI project has been executed from our preferred option (without installing / installing), in both cases it should show us a window like the one you see below:


![CLI Start Templates](https://raw.githubusercontent.com/Qwik-Spanish/qwik-library-cli/master/docs/images/cli-start-templates.png)

We have the option to select the projects that are stored in `src/templates`

What does each project contain?

- `hello-logo`: Very basic library where we find the components that are provided by default in the official documentation. Unlike what we can get in the official template, some additional configurations are implemented to improve and solve some problems encountered, such as type generation, among other things.
- `leaflet-map`: Ideal template for starting a component-based library for map projects. In this case we will obtain the basics that are needed to visualize a map, with its dependencies and configurations that are necessary for its proper functioning. Based on [this article](https://medium.com/@mugan86/qwik-integrate-maps-with-leaflet-32435b75b4f6) written a while ago.
- `counter`: Counter project. Example of a counter / discounter where we work using a custom hook, which serves as a base to inspire us and create more advanced projects.

Do you have any suggestions and / or ideas for improvement? Do you want to collaborate?

## Contact

In this section I provide you with the different ways to follow me and/or be able to contact me to collaborate (not consultancies, I receive e-mails of this style to help create projects and for free, I don't have time)

- Github: [mugan86](https://github.com/mugan86)
- Medium Tech Blog: [mugan86](https://mugan86.medium.com/)
- Youtube: [mugan86](https://www.youtube.com/mugan86)
- Twitter: [mugan86](https://twitter.com/mugan86)