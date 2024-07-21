import { QueryResult } from "mysql2"
// import { mySQLConn } from "../DB/connection" 
import { User } from "../interfaces/user.interface"

export class UserModel {
    constructor () {}
    static async getUsers () {
    //     const [users] = await mySQLConn.query<QueryResult>('SELECT * FROM users')
    //     return users as User[]
    }
}