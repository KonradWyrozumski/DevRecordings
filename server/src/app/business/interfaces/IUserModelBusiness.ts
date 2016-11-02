import BaseBusiness = require("./../BaseBusiness");
import IUserModel = require("./../../model/interfaces/IUserModel");

interface UserModelBusiness extends BaseBusiness<IUserModel> {

}
export = UserModelBusiness;