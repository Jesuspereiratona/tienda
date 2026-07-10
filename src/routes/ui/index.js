const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/contacto', (req, res) => {
    res.render('contacto');
});

module.exports = {
    uiRoutes: router
}