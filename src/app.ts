import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '#DEVRECORDINGS';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: false },
      { route: ['mylist'], name: 'mylist', moduleId: 'mylist', nav: true, title: 'My List' }
    ]);

    this.router = router;
  }
}
