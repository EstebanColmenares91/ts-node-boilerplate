import { UserModel } from "../models/user.model";

export class UserService {
    constructor () {}

    static async getUsers() {
        return await UserModel.getUsers()
    }
}