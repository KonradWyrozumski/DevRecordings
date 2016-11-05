import { AuthService } from 'aurelia-auth';
import { inject } from 'aurelia-framework';


@inject(AuthService)

export class Logout {

    private authService: AuthService;

    constructor(authService) {
        this.authService = authService;
    };

    activate() {
        this.authService.logout("#/login");
    }
}