const path = require("node:path")
const express = require("express")
const { engine } = require('express-handlebars');
const { routes } = require("./src/routes")
const chalk = require("chalk")
const dayjs = require("dayjs")

const app = express()
const PORT = 3000

const fechaHora = dayjs().format("DD/MM/YYYY HH:mm:ss")
console.log(chalk.green(`¡Bienvenido a Mi Tiendita!`))
console.log(chalk.yellow(`Fecha y hora actual: ${fechaHora}`))

app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', engine({
    helpers: {
        mayusculas: (texto) => texto.toUpperCase()
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

app.listen(PORT, () => {
    console.log(chalk.green(`Servidor en http://localhost:${PORT}/`))
})