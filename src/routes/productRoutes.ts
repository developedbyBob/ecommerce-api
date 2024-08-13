import express from 'express'
import Product from '../models/Product'

const router = express.Router()

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//Rota para criar um novo produto
router.post('/', async (req, res) => {
    const { name, description, price, countInStock } = req.body

    const product = new Product({
        name,
        description,
        price,
        countInStock
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

export default router