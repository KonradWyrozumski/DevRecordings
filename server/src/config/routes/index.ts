import * as express from "express";
import DevRecordings = require("../routes/DevRecordings");

let app = express();

class Routes {

    get routes() {

        app.use("/recordings", new DevRecordings().routes);
        return app;
    }
}

Object.seal(Routes);
export = Routes;