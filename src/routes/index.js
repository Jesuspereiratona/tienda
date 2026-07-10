const express = require("express")
const { apiRoutes } = require("./api")
const { uiRoutes } = require("./ui")
const router = express.Router()

router.use("/api", apiRoutes)
router.use(uiRoutes)

module.exports = {
    routes: router
}