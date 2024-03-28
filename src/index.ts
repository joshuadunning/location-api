import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import {fileRouter} from "./middleware/file-based-routing.js";

dotenv.config({path:`.env.${process.env.NODE_ENV}`})

const app = express()
const server = http.createServer(app)

app.all('/*', fileRouter)
// process.env.PORT
server.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
