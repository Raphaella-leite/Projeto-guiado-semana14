const express = require("express")
const router = express.Router()
const controller = require("../controllers/estudioController.js")


// create -> POST -> save ()
router.post("/", controller.createEstudio )

//read -> GET -> find()
router.get("/", controller.getAll)

//update -> PATCH -> getById(), findOne () e save()
router.patch("/:id", controller.atualizaEstudio)

//deletar -> DELETE -> getById(), findOne () e remove()
router.delete("/:id", controller.deletaEstudio)

module.exports = router