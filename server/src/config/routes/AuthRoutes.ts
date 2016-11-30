import express = require("express");
import AuthController = require("./../../controllers/AuthController");
import AuthUtils = require("../../controllers/authUtils");

let router = express.Router();
class AuthRoutes {
    private _authController: AuthController;

    constructor() {
        this._authController = new AuthController();
    }
    get routes() {
        let authUtils = new AuthUtils();
        let controller = this._authController;

        router.post("/login", controller.login);
        router.post("/signup", controller.signup);
        router.post("/google", controller.authenticate);

        router.use(authUtils.ensureAuthenticated);
        router.get("/me", controller.me);

        return router;
    }


}

Object.seal(AuthRoutes);
export = AuthRoutes;