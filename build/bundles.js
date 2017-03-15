module.exports = {
  "bundles": {
    "dist/client/app/client-app-build": {
      "includes": [
        "add-mylist.js",
        "app.js",
        "editTags.js",
        "home.js",
        "login.js",
        "logout.js",
        "main.js",
        "mylist.js",
        "nav-bar.js",
        "notification-state.js",
        "notification.js",
        "recordings.js",
        "show-all-recordings.js",
        "show-my-recordings.js",
        "signup.js",
        "spinner.js"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": false,
        "rev": false
      }
    },
    "dist/client/app/aurelia": {
      "includes": [
        "jquery",
        "bootstrap",    
        "aurelia-framework",
        "aurelia-fetch-client",
        "aurelia-bootstrapper",
        "aurelia-router",
        "aurelia-templating",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-history-browser",
        "aurelia-templating-router"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": false,
        "rev": false
      }
    }
  }
};
