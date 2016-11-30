import { AuthService } from "aurelia-auth";
import { inject } from "aurelia-framework";
@inject(AuthService)

export class Login {
    private auth: AuthService;

    constructor(auth: AuthService) {
        this.auth = auth;
    };

    email = "";
    password = "";

    login() {
        let creds = "grant_type=password&email=" + this.email + "&password=" + this.password;
        return this.auth.login(this.email, this.password);
    };

    authenticate(name) {
        return this.auth.authenticate(name, false, null);
    }
}