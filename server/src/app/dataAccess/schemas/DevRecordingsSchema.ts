import DataAccess = require('../DataAccess');
import IDevRecordingsModel = require("./../../model/interfaces/IDevRecordingsModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var mongoSchema = mongoose.Schema;
class DevRecordingsSchema {

    static get schema() {
        var schema = mongoose.Schema({
            address: {
                type: String,
                required: true
            },
            thumbnailUrl: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            hostname: {
                type: String,
                required: true
            },
            createdById: {
                type: mongoSchema.Types.ObjectId, ref: 'UserModel'
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IDevRecordingsModel>("Recordings", DevRecordingsSchema.schema);
export = schema; ""