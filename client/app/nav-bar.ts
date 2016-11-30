import { bindable } from "aurelia-framework";
import { inject } from "aurelia-framework";
import { AuthService } from "aurelia-auth";
import { BindingEngine } from "aurelia-framework";
import * as $ from "jquery";

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

    public minimalizeNavbar() {
        $("body").toggleClass("mini-navbar");
        this.smoothlyMenu();
    }

    private smoothlyMenu() {
        if (!$("body").hasClass("mini-navbar") || $("body").hasClass("body-small")) {
            $("#side-menu").hide();
            setTimeout(
                function () {
                    $("#side-menu").fadeIn(400);
                }, 200);
        } else {
            $("#side-menu").removeAttr("style");
        }
    }
}