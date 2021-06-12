const mongoose = require("mongoose")
const Titulo = require("../models/titulo")

const createTitle = async(req, res) => {
   const titulo = new Titulo({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      genero:req.body.genero,
      descricao: req.body.descricao,
      estudio:req.body.estudio
   })

   const filmeJaExiste = await Titulo.findOne({nome:req.body.nome})
   if(filmeJaExiste){
      return res.status(409).json({error: "Filme já cadastrado"})
   }

   try {
      const newTitle = await titulo.save()
      return res.status(201).json(newTitle)
   } catch (err) {
      return res.status(400).json({message: err.message})
   }
}

const showTitle = async(req, res)=>{
   try{
      const titulos = await Titulo.find().populate("estudio")
      return res.status(200).json(titulos)
      } catch (err) {
         res.status(500).json({message: err.message})
      }
}

const mostraTitulosMarvel = async (req,res) =>{
   const titulos = await Titulo.find().populate("estudio")
   const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")

   return res.status(200).json(titulosFiltrados)
}

const mostraTitulosGhibli = async (req, res) =>{
   const titulos = await Titulo.find().populate("estudio")
   const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

   return res.status(200).json(titulosFiltrados)
}

const mostraTitulosPixar = async (req, res) =>{
   const titulos = await Titulo.find().populate("estudio")
   const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

   return res.status(200).json(titulosFiltrados)
}

const atualizaFilme = async (req, res) => {
   const encontraFilme = await Filme.findById(req.params.id)
   if(encontraFilme == null) {
      return res.status(404).json({message: "Filme não encontrado!"})
   }

   if (req.body.nome != null) {
      encontraFilme.nome = req.body.nome
   }


   const filmeAtualizado = await encontraFilme.save()
   res.status(200).json(filmeAtualizado)

}

const deletaTitulo = async (req, res) =>{
   const encontraTitulo= await Titulo.findById(req.params.id)
   if(encontraTitulo == null) {
      return res.status(404).json({message: "estudio não encontrado"})
   }

   try {
      await encontraTitulo.remove()
   res.status(200).json({message: "estudio deletado"})
   } catch (error) {
      res.status(500).json({message: err.message})
   }
}

module.exports ={
   createTitle,
   showTitle,
   mostraTitulosMarvel,
   mostraTitulosGhibli,
   mostraTitulosPixar,
   atualizaFilme,
   deletaTitulo
}