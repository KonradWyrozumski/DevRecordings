import UserModelBusiness = require('../app/business/UserModelBusiness');
import IUserModel = require('../app/model/interfaces/IUserModel');
import AuthUtils = require('./AuthUtils');

class AuthController {
    signup(req, res) {
        var _userModelBusiness = new UserModelBusiness();
        var _authUtils = new AuthUtils();
        _userModelBusiness.retrieveOne({ email: req.body.email }, function (err, existingUser) {
            if (existingUser) {
                return res.status(409).send({ message: 'Email is already taken' });
            }

            var user: IUserModel = <IUserModel>req.body;
            _userModelBusiness.create(user, function () {
                return res.status(201).json({ token: _authUtils.createJWT(user) });
            });
        });
    };

    login(req, res) {
        var _userModelBusiness = new UserModelBusiness();
        var _authUtils = new AuthUtils();
        _userModelBusiness.retrieveOne({ email: req.body.email }, function (err, user) {
            if (!user) {
                return res.status(401).json({ message: 'Wrong email and/or password' });
            }
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (!isMatch) {
                    return res.status(401).send({ message: 'Wrong email and/or password' });
                }
                res.send({ token: _authUtils.createJWT(user) });
            });
        });
    };
}

Object.seal(AuthController);
export = AuthController;