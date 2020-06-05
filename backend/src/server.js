const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express()

// conectando ao banco

mongoose.connect('mongodb+srv://root:oiZlf75k11wV92FG@omnistack-letmf.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//  GET, POST, PUT, DELETE

// get envia via URL
// req.query  = Acessar query params(p ara filtros)
// req.params = Acessar route params (para edição, delete)
// req.budy   = Acessar corpo da requisição (para criação , edição)
app.use(express.json())
// app.use(routes) precisa vir depois de app.use(express.json())
app.use(routes)

app.listen(3333)

// senha do banco: oiZlf75k11wV92FG