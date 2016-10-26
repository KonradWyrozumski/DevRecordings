import DevRecordingsModel = require("./../model/DevRecordingsModel");
import IDevRecordingsModel = require("./../model/interfaces/IDevRecordingsModel");
import DevRecordingsSchema = require("./../dataAccess/schemas/DevRecordingsSchema");
import RepositoryBase = require("./BaseRepository");

class RecordingsRepository  extends RepositoryBase<IDevRecordingsModel> {
    constructor () {
        super(DevRecordingsSchema);
    }
}

Object.seal(RecordingsRepository);
export = RecordingsRepository;