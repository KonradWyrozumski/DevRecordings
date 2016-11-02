import IUserModel = require('./interfaces/IUserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get address() {
        return this._userModel.address;
    }
    get email() {
        return this._userModel.email;
    }
    get password() {
        return this._userModel.password;
    }
    get displayName() {
        return this._userModel.displayName;
    }
    get picture() {
        return this._userModel.picture;
    }
    get google() {
        return this._userModel.google;
    }

}
Object.seal(UserModel);
export =  UserModel;