import RecordingsRepository = require("./../repository/RecordingsRepository");
import IDevRecordingsBusiness = require("./interfaces/IDevRecordingsBusiness");
import IDevRecordingsModel = require("./../model/interfaces/IDevRecordingsModel");
import DevRecordingsModel = require("./../model/DevRecordingsModel");

class DevRecordingsBusiness implements IDevRecordingsBusiness {
    private _recordingsRepository: RecordingsRepository;

    constructor() {
        this._recordingsRepository = new RecordingsRepository();
    }

    create(item: IDevRecordingsModel, callback: (error: any, result: any) => void) {
        this._recordingsRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._recordingsRepository.retrieve(callback);
    }

    update(_id: string, item: IDevRecordingsModel, callback: (error: any, result: any) => void) {

        this._recordingsRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this._recordingsRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._recordingsRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IDevRecordingsModel) => void) {
        this._recordingsRepository.findById(_id, callback);
    }

    getOgData(model: IDevRecordingsModel) {
        var ogs = require('open-graph-scraper');
        var options = { url: model.address };

        return ogs(options);
    }

    updateOgData(model: IDevRecordingsModel, response) {
        var ogDataUrl = (((response || {}).data || {}).ogImage || {}).url;
        var ogTitle = ((response || {}).data || {}).ogTitle;

        model.thumbnailUrl = ogDataUrl;
        model.title = ogTitle;
    }

    updateUserId(model: IDevRecordingsModel, userId: string) {
        model.createdById = userId;
    }

    updateAddressUrl(model: IDevRecordingsModel) {
        var URI = require('urijs');
        var uriAddress = new URI(model.address);
        if (uriAddress.scheme() === '') {
            model.address = 'http://' + model.address;
        }

        model.hostname = uriAddress.hostname();
    }

}


Object.seal(DevRecordingsBusiness);
export = DevRecordingsBusiness;