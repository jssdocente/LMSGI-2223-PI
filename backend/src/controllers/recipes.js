import { query } from 'express'
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

const getItemById = async (req, res) => {
    console.log(`getItemByID: param ${req.params.id}`)
    // res.send({ data })
    const data = await recipeModel.find({ id: req.params.id })
    res.send({ data })
}

const getItemBySearch = async (req, res) => {
    console.log(`getItemBySearch: param ${req.query.q}`)
    // res.send({ data })
    // const data = await recipeModel.find({ name: `"${req.query.q}"` })
    const queryMongo = `${req.query.q}`
    const data = await recipeModel.find({ name: queryMongo })
    res.send({ data })
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