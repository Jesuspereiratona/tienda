const express = require("express")
const { productsRoutes } = require("./productos.routes.js")
const router = express.Router()

router.use(productsRoutes)

module.exports = {
    apiRoutes: router
}