const { getAll, create, getOne, remove, update } = require('../controllers/cargo.controllers');
const express = require('express');

const cargoRouter = express.Router();

cargoRouter.route('/')
    .get(getAll)
    .post(create);

cargoRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = cargoRouter;