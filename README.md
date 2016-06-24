# Hosted Web App Starter Pack

This starter pack is designed to get started building your Windows Hosted Web App as fast as possible.

Benefits of the starter pack are:
- Tools to help you generate, package, and launch your Windows App
- Sass support
- ES6 syntax using Babel
- Code Linting with ESLint
- Automatic Browser/App refresh on HTML, CSS, JS changes using BrowserSync

## Getting started

To get started, first fork the repo. Then clone to your machine and install the dependencies.

```
git clone https://github.com/<USERNAME>/hwa-starter.git && cd hwa-starter
npm install
```

To set up a local server with BrowswerSync to serve the content:

```
npm run serve
```

Next you can generate and launch a Windows app pointing to `localhost`. This has the same features as viewing your app in the browser, such as automatic refresh with BrowserSync, but it also allows you to access the Windows APIs from JavaScript.

```
npm run launch:local
```

## Going to Production

#### Deploying content

The first step to move to production is to deploy the build output from the `dist/` folder. If you'd like to use Github Pages, you can simply run the following command:

```
npm run deploy
```

#### Packaging the production app

// TODO -> Write packaging instructions

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
