const express = require("express")
const router = express.Router()
const controller = require("../controllers/tituloController")


// criar um titulo > POST -> save()
router.post("/", controller.createTitle)


//Ler todos os titulos -> GET  -> find ()
router.get("/", controller.showTitle)

router.get("/marvel", controller.mostraTitulosMarvel)

//Ler todos os títulos da Marvel

router.get("/ghibli", controller.mostraTitulosGhibli)


router.get("/pixar", controller.mostraTitulosPixar)

router.patch("/:id", controller.atualizaFilme)

router.delete("/:id", controller.deletaTitulo)





module.exports = router