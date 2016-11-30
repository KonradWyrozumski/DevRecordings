import { Router, RouterConfiguration } from "aurelia-router";
import { AuthService, AuthorizeStep, FetchConfig } from "aurelia-auth";
import { inject } from "aurelia-framework";

@inject(AuthService, FetchConfig)
export class App {

  router: Router;
  fetchConfig: FetchConfig;

  constructor(public authService: AuthService, fetchConfig: FetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  activate() {
    this.fetchConfig.configure();
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "#DEVRECORDINGS";
    config.addPipelineStep("authorize", AuthorizeStep);
    config.map([
      { route: ["", "home"], name: "home", moduleId: "home", nav: false },
      { route: ["login"], name: "login", moduleId: "login", nav: false },
      { route: ["logout"], name: "logout", moduleId: "logout", nav: false },
      { route: ["signup"], name: "signup", moduleId: "signup", nav: false },
      { route: ["mylist"], name: "mylist", moduleId: "mylist", nav: true, title: "My Recordings" }
    ]);

    this.router = router;
  }
}
