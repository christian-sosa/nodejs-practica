const { Schema , model} = require('mongoose')

const personajeSchema = new Schema({
  imagen: String,
  nombre: String,
  edad: Number,
  peso: Number,
  historia: String,
  pelicula: String
})

personajeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Personaje = model('personaje', personajeSchema)

module.exports = Personaje