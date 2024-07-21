import express, { Request, Express } from "express";
import cors, { CorsOptions } from 'cors'

import { whitelist } from "./src/consts/whitelist";
import { appRouting } from "./src/router";

const app: Express = express()
const port: string | number = process.env.PORT ?? 4000

const originConfig: CorsOptions = {
    origin: (origin: any, callback: any) => {
        if (whitelist.indexOf(origin) !== 1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Origen no permitido'))
        }
    }
}

app.use(cors<Request>(originConfig))
appRouting(app)
app.listen(port, () => {
    console.log('Running on Port', port);
})