import express from 'express'
import User from '../models/User'

const router = express.Router()

//Rota pra listar todos os usuarios (admin only)
router.get('/', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

//Rota para registrar um novo usuario
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ name, })

    if (userExists) {
        return res.status(400).json({ message: 'Usuario já existe' })
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        })
    } else {
        res.status(400).json({ message: 'Dados inválidos' })
    }
})

export default router