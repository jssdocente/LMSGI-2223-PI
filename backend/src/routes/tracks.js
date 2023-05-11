import express from 'express'
// import { validatorCreateItem } from '../validators/tracks.js'
import { getItems, createItem } from '../controllers/tracks.js'

const router = express.Router() // Manejador de la rutas

// const handleRouteTracks = (req, res) => {
//   const data = ['track1', 'track2']

//   res.send({ data })
// }

// declarar ruta de canciones
// router.get('/tracks', handleRouteTracks)
router.get('/tracks', getItems)
router.post('/tracks', createItem)

export default router