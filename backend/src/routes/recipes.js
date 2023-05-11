import express from 'express'
import { getItems, createItem } from '../controllers/recipes.js'

const router = express.Router() // Manejador de la rutas

// declarar ruta de canciones
router.get('/recipes', getItems)
router.post('/recipes', createItem)

export default router