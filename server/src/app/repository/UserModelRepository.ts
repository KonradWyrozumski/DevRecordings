import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/IUserModel");
import UserModelSchema = require("./../dataAccess/schemas/UserModelSchema");
import RepositoryBase = require("./BaseRepository");

class UserModelRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserModelSchema);
    }
}

Object.seal(UserModelRepository);
export = UserModelRepository;