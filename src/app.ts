import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '#DEVRECORDINGS';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: false },
      { route: ['mylibrary'], name: 'mylibrary', moduleId: 'mylibrary', nav: true, title: 'My Library' }
    ]);

    this.router = router;
  }
}
