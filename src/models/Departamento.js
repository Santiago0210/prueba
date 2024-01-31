const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Departamento = sequelize.define('departamento', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Departamento;