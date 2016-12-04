let bcrypt = require("bcryptjs");
import DataAccess = require("../DataAccess");
import IUserModel = require("./../../model/interfaces/IUserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserModelSchema {
    static get schema() {
        let schema = mongoose.Schema({
            email: { type: String, unique: true, sparse: true, lowercase: true },
            password: { type: String },
            displayName: String,
            picture: String,
            google: String
        });
        schema.pre("save", function (next) {
            let user = this;
            if (!user.isModified("password")) {
                return next();
            }
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(user.password, salt, function (err, hash) {
                    user.password = hash;
                    next();
                });
            });
        });

        schema.methods.comparePassword = function (password, done) {
            let user = this;
            bcrypt.compare(password, user.password, function (err, isMatch) {
                done(err, isMatch);
            });
        };

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>("UserModel", UserModelSchema.schema);
export = schema;