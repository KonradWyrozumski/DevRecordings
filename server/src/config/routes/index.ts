import * as express from "express";
import DevRecordings = require('../routes/DevRecordings');

var app = express();

class Routes {

    get routes() {

        app.use("/recordings", new DevRecordings().routes);
        return app;
    }
}
export = Routes;