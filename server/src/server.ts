/// <reference path="../typings/index.d.ts" />

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import BaseRoutes = require("./config/routes/index");
import AuthRoutes = require("./config/routes/AuthRoutes");

class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();

    this.config();

    this.routes();
  }

  private config() {
    this.app.set("views", path.join(__dirname, "."));
    this.app.set("view engine", "ejs");
    this.app.engine("html", require("ejs").renderFile);

    this.app.use(bodyParser.json());

    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(this.allowCrossDomain);

    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(express.static(path.join(__dirname, "../client")));
    this.app.use(express.static(path.join(__dirname, "../../node_modules")));
    this.app.use(express.static(path.join(__dirname, "../../jspm_packages")));
    this.app.use(express.static(path.join(__dirname, "../../")));

    this.app.set("port", process.env.PORT || 9000);
  }


  private routes() {
    this.app.use("/api", new BaseRoutes().routes);
    this.app.use("/auth", new AuthRoutes().routes);
  }

  private allowCrossDomain = function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
     res.header("Access-Control-Allow-Headers", "Content-Type");

     next();
 };
}

let server = Server.bootstrap();

server.app.listen(server.app.get("port"), function() {
     console.log("Express server listening on port " + server.app.get("port"));
 });