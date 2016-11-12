import mongoose = require("mongoose");

interface IDevRecordingsModel extends mongoose.Document {
    address: string;
    thumbnailUrl: string;
    title: string;
    createdBy: string;
}

export = IDevRecordingsModel;