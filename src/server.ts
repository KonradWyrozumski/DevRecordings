"use strict";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as indexRoute from "./routes/index";

class Server {
      public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set("views", path.join(__dirname, "."));
        this.app.set("view engine", "ejs");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, '../')));
        this.app.set('port', process.env.PORT || 9000);
        
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
        console.log("Starting server ... ");
    }
    routes() {
        let router;
        router = express.Router();
        var index = new indexRoute.Index();
        router.get("/", index.index.bind(index.index));
        this.app.use(router);
    }
}

var server = Server.bootstrap();
var appServer = server.app.listen(server.app.get('port'), function() {
    console.log('Express server listening on port ' + appServer.address().port);
});

module.exports = server.app;
