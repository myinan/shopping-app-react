# React Template Repository
### Template repository for React projects.

- `Node.js` and `npm` are installed globally. Dependencies of projects are managed locally.<br>
  Use the `nvm install --lts` command to install the latest Node.js version, with Node Version Manager (When you use NVM to update Node.js, it also updates npm to the latest version that corresponds to the installed Node.js version.).

- After running the command `npm install` locally to install dependencies, run the command `npm update --save-dev` to update your project's package.json file to include dependency versions.

- ### Used VSCod Plugins:
  - **ESLint**: Integrates ESLint into VS Code. The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally, do so by running npm init @eslint/config (this will install eslint locally and let you configure the installation.)
  Setting the following rule on **settings.json** will automatically fix the fixable ESLint errors on `.js` files when you save(ctrl+s) the file:
  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ```
  - **Prettier-Code Formatter**: Integrates Prettier into VS Code. This extension will use prettier from your project's local dependencies.
  Setting the following rule on **settings.json** will automatically format the `.js`, `.jsx` and `.css` files when you save(ctrl+s):
  ```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
  ```
  - **Atom One Dark Theme (font: Fira Mono Medium)**
  - **Error Lens**
  - **ES7+ React/Redux/React-Native snippets** <br> [**vscode-react-javascript-snippets Extension, Snippets Reference Page**](https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md "github.com/r5n-dev/vscode-react-javascript-snippets/")
  - **Material Icon Theme**
  - **Svg Preview**
  - **WSL (Windows Subsystem for Linux) extension**
  - **Git History**
  - **GitLense**
  - **Live Server**
