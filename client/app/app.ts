import { Router, RouterConfiguration } from 'aurelia-router';
import { AuthService, AuthorizeStep } from 'aurelia-auth';
import { inject } from 'aurelia-framework';

@inject(AuthService)
export class App {
  router: Router;

  constructor(public authService: AuthService) {
    console.log(authService.isAuthenticated());
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '#DEVRECORDINGS';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: false },
      { route: ['login'], name: 'login', moduleId: 'login', nav: false, title: 'Log in' },
      { route: ['signup'], name: 'signup', moduleId: 'signup', nav: false },
      { route: ['mylist'], name: 'mylist', moduleId: 'mylist', nav: true, title: 'My List' }
    ]);

    this.router = router;
  }
}
