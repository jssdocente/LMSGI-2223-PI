import { recipeModel } from '../models/index.js'

/**
 * Método para obtener todos los items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    // const data = ['track1', 'track2']
    // res.send({ data })
    const data = await recipeModel.find({})
    res.send({ data })
}

/**
 * Método para crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(`recipe body: ${body}`)

    // const data = await recipeModel.create(body)

    // console.log(body)
    res.send({ body })
}


export { getItems, createItem }