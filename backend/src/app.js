import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongodb.js'

// Cargamos las variables de entorno
dotenv.config()

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

const initExpressServer = () => {
    console.log(`Express server initialized listening on ${PORT}`)
}

try {
    await dbConnect()
    console.log('MongoDB connected')
} catch (error) {
    console.log(`Error connecting to MongoDB: ${error} `)
}

app.listen(PORT, initExpressServer)
