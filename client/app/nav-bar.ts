import { bindable } from "aurelia-framework";
import { inject } from "aurelia-framework";
import { AuthService } from "aurelia-auth";
import { BindingEngine } from "aurelia-framework";

@inject(AuthService, BindingEngine)

export class NavBar {
    @bindable router = null;
    _isAuthenticated = false;
    subscription = {};
    displayName = "";

    bindingEngine: BindingEngine;

    constructor(public auth: AuthService, bindingEngine: BindingEngine) {
        this.auth = auth;
        this.bindingEngine = bindingEngine;
        this.subscription = bindingEngine.propertyObserver(this, "_isAuthenticated")
            .subscribe((newValue, oldValue) => {
                console.log("event");
                if (this.isAuthenticated) {
                    this.auth.getMe().then(data => {
                        return this.displayName = data.displayName;
                    });
                }
            });
        this._isAuthenticated = this.auth.isAuthenticated();
    };

    get isAuthenticated() {
        this._isAuthenticated = this.auth.isAuthenticated();
        return this._isAuthenticated;
    };
}