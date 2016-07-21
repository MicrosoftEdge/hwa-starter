# Hosted Web App Starter Pack

#### Everything you need to get started building a Windows Hosted Web App as quickly as possible.
Generates a Windows hosted web application based on a W3C Web App manifest.  

Benefits of the starter pack are: 
- Tools to help you generate, package, and launch your Windows App
- Template W3C Manifest. 
- Sass support
- ES6 syntax using Babel
- Code Linting with ESLint
- Automatic Browser/App refresh on HTML, CSS, JS changes using BrowserSync

## Getting started

#### Setup
To get started, first fork the repo. Then clone to your machine and install the dependencies.

```
git clone https://github.com/<USERNAME>/hwa-starter.git && cd hwa-starter
npm install
```

#### Test

To set up a local server with BrowswerSync to serve the content:

```
npm run serve
```

Next you can generate and launch a Windows app pointing to `localhost`. This has the same features as viewing your app in the browser, such as automatic refresh with BrowserSync, but it also allows you to access the Windows APIs from JavaScript.

```
npm run launch:local
```

## Deploy

#### Deploying content

The first step to move to production is to deploy the build output from the `dist/` folder. If you'd like to use Github Pages, you can simply run the following command:

```
npm run deploy
```

#### Build Production App, Submit to Store
You can create an APPX package with your app contents for submission to the Windows Store, even on platforms that do not support installing the Windows SDK such as OS X and Linux.

1. Set up a Microsoft Developer account [here](http://dev.windows.com/en-us).

1. Reserve the name of your app and obtain its identity details (under **App management | App identity**), including _Name_, _Publisher_, and _PublisherDisplayName_.

1. Generate the app pointing at production content:

```
npm run generate:prod
```

Optionally test the production app using:

```
npm run launch:prod
```

1. Update the **appmanifest.xml** file located in the **_tmp/prod/<APP-NAME>/windows/manifest_** directory of the app with the identity details. The app manifest XML has already included placeholders indicating where each piece of information needs to be replaced.

1. Build the APPX package:

```
npm run package
```

1. Upload package to the Windows Store, and then complete the submission process.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
