import UserModelBusiness = require("../app/business/UserModelBusiness");
import IUserModel = require("../app/model/interfaces/IUserModel");
import AuthUtils = require("./AuthUtils");
import Constants = require("./../config/constants/constants");
import User = require("./../app/dataAccess/schemas/UserModelSchema");

let jwt = require("jwt-simple");
let request = require("request");

class AuthController {
    me(req, res) {
        let _userModelBusiness = new UserModelBusiness();
        _userModelBusiness.findById(req.user, function (err, user) {
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            res.send(user);
        });
    };

    signup(req, res) {
        let _userModelBusiness = new UserModelBusiness();
        let _authUtils = new AuthUtils();
        _userModelBusiness.retrieveOne({ email: req.body.email }, function (err, existingUser) {
            if (existingUser) {
                return res.status(409).send({ message: "Email is already taken" });
            }

            let user: IUserModel = <IUserModel>req.body;
            _userModelBusiness.create(user, function () {
                return res.status(201).json({ token: _authUtils.createJWT(user) });
            });
        });
    };

    login(req, res) {
        let _userModelBusiness = new UserModelBusiness();
        let _authUtils = new AuthUtils();
        _userModelBusiness.retrieveOne({ email: req.body.email }, function (err, user) {
            if (!user) {
                return res.status(401).json({ message: "Wrong email and/or password" });
            }
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (!isMatch) {
                    return res.status(401).send({ message: "Wrong email and/or password" });
                }
                res.send({ token: _authUtils.createJWT(user) });
            });
        });
    };

    authenticate(req, res) {
        let _userModelBusiness = new UserModelBusiness();
        let _authUtils = new AuthUtils();
        let accessTokenUrl = "https://accounts.google.com/o/oauth2/token";
        let peopleApiUrl = "https://www.googleapis.com/plus/v1/people/me/openIdConnect";
        let params = {
            code: req.body.code,
            client_id: req.body.clientId,
            client_secret: Constants.TOKEN_SECRET,
            redirect_uri: req.body.redirectUri,
            grant_type: "authorization_code"
        };

        // Step 1. Exchange authorization code for access token.
        request.post(accessTokenUrl, { json: true, form: params }, function (err, response, token) {
            let accessToken = token.access_token;
            let headers = { Authorization: "Bearer " + accessToken };

            // Step 2. Retrieve profile information about the current user.
            request.get({ url: peopleApiUrl, headers: headers, json: true }, function (err, response, profile) {
                // Step 3a. Link user accounts.
                if (req.headers.authorization) {
                    _userModelBusiness.retrieveOne({ google: profile.sub }, function (err, existingUser) {
                        if (existingUser) {
                            return res.status(409).send({ message: "There is already a Google account that belongs to you" });
                        }
                        let token = req.headers.authorization.split(" ")[1];
                        let payload = jwt.decode(token, Constants.TOKEN_SECRET);
                        _userModelBusiness.findById(payload.sub, function (err, user) {
                            if (!user) {
                                return res.status(400).send({ message: "User not found" });
                            }
                            user.google = profile.sub;
                            user.picture = user.picture || profile.picture.replace("sz=50", "sz=200");
                            user.displayName = user.displayName || profile.name;
                            user.save(function () {
                                let token = _authUtils.createJWT(user);
                                res.send({ token: token });
                            });
                        });
                    });
                } else {
                    // Step 3b. Create a new user account or return an existing one.
                    _userModelBusiness.retrieveOne({ google: profile.sub }, function (err, existingUser) {
                        if (existingUser) {
                            console.log("token sent");

                            return res.send({ token: _authUtils.createJWT(existingUser) });
                        }
                        let user = new User();
                        user.google = profile.sub;
                        user.picture = profile.picture.replace("sz=50", "sz=200");
                        user.displayName = profile.name;
                        user.save(function (err) {
                            let token = _authUtils.createJWT(user);
                            res.send({ token: token });
                        });
                    });
                }
            });
        });
    };
}

Object.seal(AuthController);
export = AuthController;