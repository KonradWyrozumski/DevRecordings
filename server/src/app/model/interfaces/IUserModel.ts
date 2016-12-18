import mongoose = require("mongoose");

interface IUserModel extends mongoose.Document {
    email: string;
    password: string;
    displayName: string;
    picture: string;
    google: string;
    address: string;
}

export = IUserModel;