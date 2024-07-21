import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service"

export class UserController {
    constructor () {}

    getUsers = async(req: Request, res: Response,  next: NextFunction) => {
        try {
            const data = await UserService.getUsers()
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}