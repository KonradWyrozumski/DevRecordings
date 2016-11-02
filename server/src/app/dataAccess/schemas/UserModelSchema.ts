var bcrypt = require('bcryptjs');
import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/IUserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserModelSchema {
    static get schema() {
        var schema = mongoose.Schema({
            email: { type: String, unique: true, lowercase: true },
            password: String,
            displayName: String,
            picture: String,
            google: String

        });
        schema.pre('save', function (next) {
            var user = this;
            if (!user.isModified('password')) {
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
            var user = this;
            bcrypt.compare(password, user.password, function (err, isMatch) {
                done(err, isMatch);
            });
        };

        return schema;
    }
}

var schema = mongooseConnection.model<IUserModel>("UserModel", UserModelSchema.schema);
export = schema; ""