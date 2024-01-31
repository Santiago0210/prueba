const catchError = require('../utils/catchError');
const Cargo = require('../models/Cargo');
const User = require('../models/User');


const getAll = catchError(async(req, res) => {
    const results = await Cargo.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {codigo, nombre, activo, departamentoId} = req.body
    const result = await Cargo.create({nombre,codigo,activo,departamentoId});
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Cargo.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Cargo.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Cargo.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}