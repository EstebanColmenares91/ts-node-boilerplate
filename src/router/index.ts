import { Express, Router } from "express"
import { userRouter } from "./user.router";

export const appRouting = (app: Express) => {
    const router = Router()
    app.use('/api/v1', router);
    router.use('/user', userRouter)
}