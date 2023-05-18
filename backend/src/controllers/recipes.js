import { recipeModel } from '../models/index.js'

/**
 * Método para obtener todos los items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    // const data = ['track1', 'track2']
    // res.send({ data })
    const listaRecetas = await recipeModel.find({})
    res.send({
        data: listaRecetas
    })
}

const getItemById = async (req, res) => {
    console.log(`getItemByID: param ${req.params.id}`)
    // res.send({ data })
    const data = await recipeModel.find({ id: req.params.id })
    res.send({ data })
}

const getItemBySearch = async (req, res) => {

    var { r, c, a } = req.query

    var qmongo = {}
    if (r) {
        qmongo = { "name": { $regex: r } }
    }

    if (c) {
        qmongo = { ...qmongo, "category": { $regex: c } }
    }

    if (a) {
        qmongo = { ...qmongo, "area": { $regex: a } }
    }

    console.log(`getItemBySearch: query on Mongo:${qmongo}`)
    console.log(qmongo)

    const data = await recipeModel.find(qmongo)
    res.send({ recetas: data })
}

/**
 * Método para crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const body = req.body
    // console.log(`recipe body: ${body}`)
    console.log(JSON.stringify(body, null, 2))

    const data = await recipeModel.create(body)

    // console.log(body)
    res.send({ data })
}


export { getItems, createItem, getItemById, getItemBySearch }