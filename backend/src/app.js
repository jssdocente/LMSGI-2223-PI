import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnect } from './config/mongodb.js'
import { recipeRoute, trackRoute, userRoute } from './routes/index.js'


// Cargamos las variables de entorno
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// configuramos las routes
app.use('/api', userRoute)
app.use('/api', userRoute)

// Rutas de recetas
app.use('/api', recipeRoute)

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
