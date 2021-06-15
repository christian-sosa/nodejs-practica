const repository = require('../services/repositories/personaje');

const getAll = async () => await repository.getAll();

const getOne = async (id) => await repository.getOne(id);

const create = async (personaje) => await repository.create(personaje);

const deleted = async (id) => await repository.deleted(id);

const update = async (personaje, id) => await repository.update(personaje, id);

module.exports = {
    getAll,
    getOne,
    create,
    deleted,
    update
};
  