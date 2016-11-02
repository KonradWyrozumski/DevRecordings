import { AuthService } from 'aurelia-auth';
import { inject } from 'aurelia-framework';
@inject(AuthService)

export class Login {
    private auth: AuthService;
    
    constructor(auth: AuthService) {
        this.auth = auth;
    };

    heading = 'Login';

    email = '';
    password = '';
    login() {
        var creds = "grant_type=password&email=" + this.email + "&password=" + this.password;
        return this.auth.login(this.email, this.password)
            .then(response => {
                console.log(this.auth);
                console.log("success logged " + response);
            })
            .catch(err => {
                err.json().then(function (e) {
                    console.log("login failure : " + e.message);
                });
            });
    };

    authenticate(name) {
        return this.auth.authenticate(name, false, null)
            .then((response) => {
            });

    }
}