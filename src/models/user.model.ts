import { FieldPacket, QueryResult } from "mysql2"
import { mySQLConn } from "../DB/connection" 
import { User } from "../interfaces/user.interface"

export class UserModel {
    static async getUsers (): Promise<User[]> {
        const [users] = await mySQLConn.query<User[]>('SELECT * FROM users')
        return users
    }
}