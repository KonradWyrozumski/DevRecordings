import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';

@inject(AuthService)

export class NavBar {
    @bindable router = null;
    
    constructor(public auth: AuthService) {
        this.auth = auth;
    };

    get isAuthenticated() {
        return this.auth.isAuthenticated();
    };
}