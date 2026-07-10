const path = require("node:path")
const express = require("express")
const { engine } = require('express-handlebars');
const { routes } = require("./src/routes")

const app = express()
const PORT = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}/`)
})