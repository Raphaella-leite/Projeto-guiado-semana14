const mongoose = require("mongoose")

const estudioSchema = new mongoose.Schema({
   _id: mongoose.Types.ObjectId,
   nome: {
      type: String,
      require: true
   },
   criadoEm: {
      type: Date,
      require: true,
      default: new Date
   }
})


module.exports = mongoose.model("estudio", estudioSchema)
