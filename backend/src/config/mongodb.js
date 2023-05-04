import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB_URLMONGO || 'mongodb://localhost:27017/test'

//mongoose.connect(MONGODB_URI)

// Exportamos la función de conexión
const dbConnect = async () => {
    await mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}

export default dbConnect

