const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    primerNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    primerApellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoApellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;