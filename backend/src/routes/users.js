import express from 'express'
import { obtenerUsuarios } from '../controllers/users.js'

const router = express.Router() // Manejador de la rutas

const handleRouteTracks = (req, res) => {
    const data = ['miguel', 'ramon', 'jose']

    res.send({ datos: data })
}

// declarar ruta de canciones
router.get('/users', obtenerUsuarios)

export default router