const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extend: true}))
app.use(bodyParser.json())

const routes = require('./src/routes/usuarioRoutes.js')

routes(app)

app.route('/')
    .get((req, res) => {
        res.send('API todoList funcionando')
    }) // function (req, res) {}


const port = process.env.PORT || 3001

app.listen(port)

console.log('Servidor funcionando na porta:', port)