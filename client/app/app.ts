import { Router, RouterConfiguration } from "aurelia-router";
import { AuthService, AuthorizeStep, FetchConfig } from "aurelia-auth";
import { inject } from "aurelia-framework";
import { Spinner } from "./spinner";

@inject(AuthService, FetchConfig, Spinner)
export class App {

  router: Router;
  fetchConfig: FetchConfig;
  spinner: Spinner;

  constructor(public authService: AuthService, fetchConfig: FetchConfig, spinner: Spinner) {
    this.fetchConfig = fetchConfig;
    this.spinner = spinner;
  }

  activate() {
    this.fetchConfig.configure();
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "#DEVRECORDINGS";
    config.addPipelineStep("authorize", AuthorizeStep);
    config.map([
      { route: ["", "home"], name: "home", moduleId: "home", nav: true, title: "All Recordings", settings: { styles: "fa-desktop" } },
      { route: ["login"], name: "login", moduleId: "login", nav: false },
      { route: ["logout"], name: "logout", moduleId: "logout", nav: false },
      { route: ["signup"], name: "signup", moduleId: "signup", nav: false },
      { route: ["mylist"], name: "mylist", moduleId: "mylist", nav: true, title: "My Recordings", settings: { styles: "fa-th-large" }, auth: true }
    ]);

    this.router = router;
  }
}
