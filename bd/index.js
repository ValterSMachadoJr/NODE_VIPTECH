const {Sequelize, DataTypes} = require("sequelize");
let initCor = require ("./cor");
let initMarca = require ("./marca");
let initProduto = require ("./produto");


const options = {
    username: "postgres",
    password: "123",
    host: "localhost",
    dialect: "postgres",
    database: "apiViptech",
    debug: true
};

const sequelize = new Sequelize(options);

sequelize
.authenticate()
.then(() => {
    console.log("Conectado ao banco de dados");
})
.catch((erro) => {
    console.log(erro);
});



//Nota.hasMany(checklist, {as: "checklists", foreignKey: "notaId"});

const Cor = initCor(sequelize, DataTypes);
const Marca = initMarca(sequelize, DataTypes);
const Produto = initProduto(sequelize, DataTypes);

//Nota.belongsTo(Usuario, {as: "usuario", foreignKey: "usuarioId"});

//Produto.belongsTo(Cor, {as: "cor", foreignKey: "produto_id_cor_fkey"});
//Produto.belongsTo(Marca, {as: "marca", foreignKey: "produto_id_marca_fkey"});

Produto.belongsTo(Cor, {as: "cor", foreignKey: "id_cor"});
Produto.belongsTo(Marca, {as: "marca", foreignKey: "id_marca"});


module.exports = {sequelize, Sequelize, Marca, Cor, Produto};