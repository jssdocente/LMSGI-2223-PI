import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true, // createAt, updateAt
    versionKey: false // __v: 0
})

// Exportamos el modelo, indicando el nombre de la colección y el esquema
const modelUser = mongoose.model('users', userSchema)

export default modelUser

