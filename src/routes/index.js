const express = require('express');
const cargoRouter = require('./cargo.router');
const departamentoRouter = require('./departamento.router');
const userRouter = require('./user.router');
const router = express.Router();


router.use('/cargos', cargoRouter);
router.use('/departamentos', departamentoRouter);
router.use('/usuarios', userRouter);


module.exports = router;