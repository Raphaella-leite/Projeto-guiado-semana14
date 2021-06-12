const mongoose = require("mongoose")
const Estudio = require("../models/estudio")

const createEstudio = async (req, res)=>{
   const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm
   })

   const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
   if(estudioJaExiste){
      return res.status(409).json({error: "Estudio já cadastrado"})
   }

   try {
      const novoEstudio = await estudio.save()
      return res.status(201).json(novoEstudio)
   } catch (err) {
      return res.status(500).json({message: err.message})
   }

}

const getAll = async(req, res)=>{
   try{
   const estudios = await Estudio.find()
   return res.status(200).json(estudios)
   } catch (err) {
      res.status(500).json({message: err.message})
   }
}

const atualizaEstudio = async (req, res) => {
   const encontraEstudio = await Estudio.findById(req.params.id)
   if(encontraEstudio == null) {
      return res.status(404).json({message: "estudio não encontrado"})
   }

   if (req.body.nome != null) {
      encontraEstudio.nome = req.body.nome
   }


   const estudioatualizado = await encontraEstudio.save()
   res.status(200).json(estudioatualizado)

}

const deletaEstudio = async (req, res) =>{
   const encontraEstudio = await Estudio.findById(req.params.id)
   if(encontraEstudio == null) {
      return res.status(404).json({message: "estudio não encontrado"})
   }

   try {
      await encontraEstudio.remove()
   res.status(200).json({message: "estudio deletado"})
   } catch (error) {
      res.status(500).json({message: err.message})
   }
}

module.exports = {
   createEstudio,
   getAll,
   atualizaEstudio,
   deletaEstudio
}