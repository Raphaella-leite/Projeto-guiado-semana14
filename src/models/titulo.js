const mongoose = require("mongoose")

const tituloSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   nome: {
      type: String,
      require: true
   },
   genero: {
      type: String,
      require: true
   },
   descricao: {
      type: String,
      require: true
   },
   estudio: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "estudio"
   },
   criadoEm: {
      type: Date,
      require: true,
      default: new Date
   }
})


module.exports = mongoose.model("titulo", tituloSchema)