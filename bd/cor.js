
module.exports = (sequelize, DataType) => {
    const Cor = sequelize.define('cor', {
        id_cor: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cor: {
            type: DataType.STRING(100),
            allowNull: false,
        },

        

    },{
        tableName: "cor",
        timestamps: false,
    });

    return Cor;
};