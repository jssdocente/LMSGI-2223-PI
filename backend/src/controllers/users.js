import userModel from '../models/users.js'

const obtenerUsuarios = async (req, res) => {
    // const data = ['usuarrio1', 'usuario2']
    // res.send({ data })
    const data = await userModel.find({})
    res.send({ data })
}

export { obtenerUsuarios }