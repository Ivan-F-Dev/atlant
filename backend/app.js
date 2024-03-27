import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
const port = process.env.port || 5000
app.get('/', (request, response) => {
    response.send('Hello world!')
});
app.get('/todo', (request, response) => {
    response.json({
        url: 'todo'
    })
});
app.listen(port, () => console.log(`Running on port ${port}`))