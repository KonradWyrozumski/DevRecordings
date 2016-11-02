import UserModelRepository = require("./../repository/UserModelRepository");
import IUserModelBusiness = require("./interfaces/IUserModelBusiness");
import IUserModel = require("./../model/interfaces/IUserModel");
import UserModel = require("./../model/UserModel");

class UserModelBusiness implements IUserModelBusiness {
    private _userModelRepository: UserModelRepository;

    constructor () {
        this._userModelRepository = new UserModelRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userModelRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userModelRepository.retrieve(callback);
    }

    retrieveOne(condition: Object, callback: (error:any, result:any) => void) {
        this._userModelRepository.retrieveOne(condition, callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this._userModelRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._userModelRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userModelRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userModelRepository.findById(_id, callback);
    }

}


Object.seal(UserModelBusiness);
export = UserModelBusiness;