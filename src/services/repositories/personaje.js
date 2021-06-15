const Personaje = require("../../models/personaje");

const getAll = async () => {
  try {
    const total = await Personaje.find({});
    return total;
  } catch (error) {
    logger.error(error.message);
  }
};

const getOne = async (id) => {
  const personaje = await Personaje.findById(id).exec();
  return personaje;
};

const create = async (personaje) => {
  const newPersonaje = new Personaje({
    imagen: personaje.imagen,
    nombre: personaje.nombre,
    edad: personaje.edad,
    peso: personaje.peso,
    historia: personaje.historia,
    pelicula: personaje.pelicula,
  });
  const savedPersonaje = await newPersonaje.save();
  return savedPersonaje;
};

const deleted = async (id) => {
  const response = await Personaje.findByIdAndDelete(id)
  return response
}

const update = async (personaje, id) => {
  const updatedPersonaje = new Personaje({
    imagen: personaje.imagen,
    nombre: personaje.nombre,
    edad: personaje.edad,
    peso: personaje.peso,
    historia: personaje.historia,
    pelicula: personaje.pelicula,
  });
  const response = Personaje.findByIdAndUpdate(id, updatedPersonaje, { new: true });
  return response;
}

module.exports = {
  getAll,
  getOne,
  create,
  deleted,
  update
};
