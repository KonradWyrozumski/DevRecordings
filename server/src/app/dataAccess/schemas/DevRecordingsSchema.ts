import DataAccess = require("../DataAccess");
import IDevRecordingsModel = require("./../../model/interfaces/IDevRecordingsModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
let mongoSchema = mongoose.Schema;

class DevRecordingsSchema {
    static get schema() {
        let schema = mongoose.Schema({
            address: {
                type: String,
                required: true
            },
            thumbnailUrl: {
                type: String,
                required: false
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
                type: mongoSchema.Types.ObjectId, ref: "UserModel"
            }
        });

        return schema;
    }
}
let schema = mongooseConnection.model<IDevRecordingsModel>("Recordings", DevRecordingsSchema.schema);

export = schema;