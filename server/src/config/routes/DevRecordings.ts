import express = require("express");
import DevRecordingsController = require("./../../controllers/DevRecordingsController");
import AuthUtils = require('../../controllers/authUtils');

var router = express.Router();
class DevRecordingsRoutes {
    private _devRecordingsController: DevRecordingsController;

    constructor() {
        this._devRecordingsController = new DevRecordingsController();
    }
    get routes() {
        var authUtils = new AuthUtils();
        
        var controller = this._devRecordingsController;

        router.get("/", controller.retrieve);

        router.use(authUtils.ensureAuthenticated);
        router.post("/", controller.create);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);
        return router;
    }


}

Object.seal(DevRecordingsRoutes);
export = DevRecordingsRoutes;