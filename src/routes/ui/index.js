const express = require("express")
const router = express.Router()

const tienda = "Mi Tiendita"
const bienvenida = "Bienvenido a nuestra tienda online"
const productos = require("../api/productos.routes").productos

router.get('/', (req, res) => {
    res.render('home', { tienda, bienvenida, productos })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contacto', (req, res) => {
    res.render('contacto')
})

router.post('/contacto', (req, res) => {
    const { nombre } = req.body
    res.render('success', { nombre })
})

module.exports = { uiRoutes: router }