import mongoose = require("mongoose");

interface IUserModel extends mongoose.Document {
    address: string;
    email: string;
    password: string;
    displayName: string;
    picture: string;
    google: string;
}

export = IUserModel;