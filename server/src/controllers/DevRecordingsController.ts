
import express = require("express");
import DevRecordingsBusiness = require("./../app/business/DevRecordingsBusiness");
import IBaseController = require("./BaseController");
import IDevRecordingsModel = require("./../app/model/interfaces/IDevRecordingsModel");

class DevRecordingsController implements IBaseController <DevRecordingsBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var model: IDevRecordingsModel = <IDevRecordingsModel>req.body;
            var devRecordingsBusiness = new DevRecordingsBusiness();
            devRecordingsBusiness.create(model, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            var model: IDevRecordingsModel = <IDevRecordingsModel>req.body;
            var _id: string = req.params._id;
            var devRecordingsBusiness = new DevRecordingsBusiness();
            devRecordingsBusiness.update(_id, model, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var devRecordingsBusiness = new DevRecordingsBusiness();
            devRecordingsBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try {

            var devRecordingsBusiness = new DevRecordingsBusiness();
            devRecordingsBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var devRecordingsBusiness = new DevRecordingsBusiness();
            devRecordingsBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = DevRecordingsController;