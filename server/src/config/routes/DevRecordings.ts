import express = require("express");
import DevRecordingsController = require("./../../controllers/DevRecordingsController");
var router = express.Router();
class DevRecordingsRoutes {
    private _devRecordingsController: DevRecordingsController;

    constructor() {
        this._devRecordingsController = new DevRecordingsController();
    }
    get routes() {
        var controller = this._devRecordingsController;

        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        router.put("/:_id", controller.update);
        router.get("/:_id", controller.findById);
        router.delete("/:_id", controller.delete);
        return router;
    }


}

Object.seal(DevRecordingsRoutes);
export = DevRecordingsRoutes;