import IDevRecordingsModel = require("./interfaces/IDevRecordingsModel");

class DevRecordingsModel {

    private _recordingsModel: IDevRecordingsModel;

    constructor(recordingModel: IDevRecordingsModel) {
        this._recordingsModel = recordingModel;
    }
    get address (): string {
        return this._recordingsModel.address;
    }
}
Object.seal(DevRecordingsModel);
export =  DevRecordingsModel;