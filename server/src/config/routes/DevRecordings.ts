import express = require("express");
import DevRecordingsController = require("./../../controllers/DevRecordingsController");

var router = express.Router();
class DevRecordingsRoutes {
    private _devRecordingsController: DevRecordingsController;

    constructor () {
        this._devRecordingsController = new DevRecordingsController();
    }
    get routes () {
        var controller = this._devRecordingsController;

        router.get("/recordings", controller.retrieve);
        router.post("/recordings", controller.create);
        router.put("/recordings/:_id", controller.update);
        router.get("/recordings/:_id", controller.findById);
        router.delete("/recordings/:_id", controller.delete);

        return router;
    }


}

Object.seal(DevRecordingsRoutes);
export = DevRecordingsRoutes;