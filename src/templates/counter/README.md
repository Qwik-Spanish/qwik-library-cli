# Qwik Counter Library Template - by Anartz Mugika Ledo ⚡️

Next I will add all the information that we need to know to be able to work with the development of libraries in Qwik.

Here I leave the links of interest about Qwik as documentation, support,...

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik on GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Builder.io](https://www.builder.io/)

---

## Project Structure

Within the project in the section where we will develop our library (in `src` directory), we can find these example files to start working with it

Inside your project, you'll see the following directories and files:

```bash

└── src/
    ├── components/
    │   └── counter
    |       └── index.tsx
    ├── hooks/
    |       └── useCounter.ts
    ...
    ├── root.tsx
    └── index.ts
```

- `src/components`: Recommended directory for components. By default this directory has a basic base component to work with a counter using a hook.

- `src/hooks`: Recommended directory for hooks. By default this directory has a basic base hook to work with a counter component.

- `index.ts`: The entry point of your component library, make sure that all components, classes, interfaces, etc, that will be public are exported from this file.

- `root.tsx`: We can use this file to test the components created while we are developing to facilitate the process and make testing more agile, before packaging it for distribution. To test it we only have to execute the command `npm start` or `npm dev`.

## After developing the library

I recommended read [this article](https://medium.com/@mugan86/qwik-creando-librer%C3%ADa-y-publicar-en-npm-428afd4cf3ff) (in Spanish, comming soon in English).

## Contact info

In this section I provide you with the different ways to follow me and/or be able to contact me to collaborate (not consultancies, I receive e-mails of this style to help create projects and for free, I don't have time)

- Github: [mugan86](https://github.com/mugan86)
- Medium Tech Blog: [mugan86](https://mugan86.medium.com/)
- Youtube: [mugan86](https://www.youtube.com/mugan86)
- Twitter: [mugan86](https://twitter.com/mugan86)
