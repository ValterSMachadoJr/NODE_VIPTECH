const {Sequelize} = require("sequelize");

module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('produto', {
        id_produto: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataType.STRING(200),
            allowNull: false,
        },

        id_cor: {
            type: DataType.INTEGER,
            allowNull: false,
             references: {
                 model: "cor",
                 key: "id_cor",
             },
        },

        id_marca: {
            type: DataType.INTEGER,
            allowNull: false,
             references: {
                model: "marca",
                key: "id_marca",
             }
        },
        valor: {
            type: DataType.DOUBLE,
            allowNull: false,
        },
        imagem: {
            type: DataType.TEXT,
            allowNull: false,
        },

        data_cadastro: {
            type: DataType.DATE,
            allowNull: false,
           // defaultValue: Sequelize.NOW,

        },
    },
        {
            tableName: "produto",
            timestamps: false,
        }
    
        
     
    );

    return Produto;
};