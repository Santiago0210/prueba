
const Cargo = require("./Cargo");
const Departamento = require("./Departamento");
const User = require("./User");



Departamento.hasMany(User)
User.belongsTo(Departamento)



Cargo.hasMany(User)
User.belongsTo(Cargo)

User.hasMany(Departamento, {foreignKey: 'creatorId'});
Departamento.belongsTo(User, {foreignKey: 'creatorId'});

User.hasMany(Cargo, {foreignKey: 'creatorId'});
Cargo.belongsTo(User, {foreignKey: 'creatorId'});

