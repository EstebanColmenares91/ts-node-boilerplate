import { UserModel } from "../models/user.model";

export class UserService {
    constructor () {}

    static async getUsers() {
        return UserModel.getUsers
    }
}