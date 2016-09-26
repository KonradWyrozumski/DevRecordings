module.exports = {
  "bundles": {
    "dist/client-app-build": {
      "includes": [
        "app.js",
        "home.js",
        "main.js",
        "mylist.js",
        "notification.js",
        "notification-state.js"        
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-router",
        "aurelia-templating",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-history-browser",
        "aurelia-templating-router",
        "bootstrap",
        "jquery"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
