import mongoose = require("mongoose");

interface IDevRecordingsModel extends mongoose.Document {
    address: string;
    thumbnailUrl: string;
    title: string;
    hostname: string;
    createdById: string;
}

export = IDevRecordingsModel;