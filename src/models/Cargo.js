const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cargo = sequelize.define('cargo', {
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

module.exports = Cargo;