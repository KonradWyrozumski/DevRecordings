import "jquery";
import "bootstrap";
import {Aurelia} from "aurelia-framework";
import AuthConfig = require("./config/authConfig");

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-auth", (baseConfig) => {
         baseConfig.configure(AuthConfig.config);
    });


  aurelia.start().then(() => aurelia.setRoot());
}
