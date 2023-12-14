# <div align="center">📋 QikServ Front End Test</div>

<a href="https://qikserv-gabriel-pasquantonio.netlify.app/">
<img src="./readme-image.png"/>
                             </a>

## QikServ Front End Test

The project `QikServ Front End Test` is an single-page web application written using React with Typescript that allows user to get the restaurant and menu details response from the QikServe APIs.

## Getting Started

The following is recommended for the development environment:

1. Usage of [Visual Studio Code](https://code.visualstudio.com/) as IDE and the following plugins:

   - ESLint

2. [Node.js](https://nodejs.org/en/download/)
3. [Yarn](https://yarnpkg.com/)
4. [GIT](https://git-scm.com/)

## 🛠️ Technologies

<ul>
  <li><a href="https://reactjs.org/">React JS</a></li>
  <li><a href="https://nodejs.org/en/">Node.Js</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://redux.js.org/">Redux</a></li>
  <li><a href="https://storybook.js.org/">Story Book</a></li>
  <li><a href="https://styled-components.com/">Styled Components</a></li>
  <li><a href="https://emotion.sh/docs/introduction">Emotion</a></li>

</ul>

### Folder Structure

`./frontend-challeng/`
├── `.gitignore` -> _ignore settings from git_
├── `public` -> static and public files
├── `src` -> react code
└── `README.md` -> _content of this file_

`./frontend/src/`
├── `assets` -> folder to store static images, such as logos and icons
├── `components` ->reusable React components, separated into subfolders
└── `features` -> folder to store each "feature" block
└── `helpers` -> folder to store helper function methods to be used across the app
├── `hooks` -> folder to store custom hooks
├── `mocks` -> folder to store mocked data if needed
├── `models` -> folder to organize TypeScript types from the project
├── `routes` -> folder to organize routing pages from project
├── `services` ->services for external access
└── `store` -> folder to store slices from our state managment tool - redux
└── `theme.ts` -> theme specification for styled-system

## Run

```
$ git clone https://github.com/gapasquantonio/frontend.git
```

### 1. Install yarn

See [how to install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

### 2. Install dependencies in `package.json`

```zsh
# running `yarn` in your shell will install dependencies
yarn
```

### 3. Start development server

Instead of using storybook, you can use the dev server.

```zsh
yarn dev
```

The application will open in the browser on http://localhost:3000

## Commits

This project was build around [Karma pattern](http://karma-runner.github.io/6.3/dev/git-commit-msg.html) into commit messages
