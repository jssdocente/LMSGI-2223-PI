import { trackModel } from '../models/index.js'

/**
 * Método para obtener todos los items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  // const data = ['track1', 'track2']
  // res.send({ data })
  const data = await trackModel.find({})
  res.send({ data })
}

/**
 * Metodo para obtener un item
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => { }

/**
 * Método para crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req
  const data = await trackModel.create(body)

  console.log(body)
  res.send({ data })
}

/**
 * Método para actualizar un item
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => { }

/**
 * Método para eliminar un item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => { }

export { getItems, getItem, createItem, updateItem, deleteItem }
