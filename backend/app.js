import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from "./router/router.js";

dotenv.config()

const start = () => {
    try {
        const app = express()
        // set middlewares
        app.use(cors({
            credentials: true,
            origin: 'http://localhost:3000',
            // optionsSuccessStatus: 200
        }))
        app.use(express.json())
        app.use(cookieParser())
        app.use('/api',router)
        // set port
        const port = process.env.port || 6000
        // set routes
        app.get('/', (request, response) => {
            response.send('Hello world!')
        });
        // run
        app.listen(port, () => console.log(`Running on port ${port}`))
    } catch (e) {
        console.log("Ошибка!",e)
    }
}

start()

