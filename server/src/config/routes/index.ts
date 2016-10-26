import * as express from "express";
import DevRecordings = require('../routes/DevRecordings');

var app = express();

class Routes {

    get routes() {

        app.use("/", new DevRecordings().routes);
        
        return app;
    }
}
export = Routes;