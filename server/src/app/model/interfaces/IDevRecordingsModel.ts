import mongoose = require("mongoose");

interface IDevRecordingsModel extends mongoose.Document {
    address: string;
}

export = IDevRecordingsModel;