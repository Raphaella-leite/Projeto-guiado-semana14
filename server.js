const express = require("express")
const app = express()
app.use(express.json())

// conectar  db
const db = require("./src/database/database.js")
db.connect()

//usar as rotas
const titulo = require("./src/routes/titulos.routes")
const estudios = require("./src/routes/estudios.routes")

app.use("/titulos", titulo)
app.use("/estudio", estudios)


const PORT = 3333
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))


