module.exports = (sequelize, DataType) => {
    const Marca = sequelize.define('marca', {
        id_marca: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        marca: {
            type: DataType.STRING(200),
            allowNull: false,
        },

        
    },{
        tableName: "marca",
        timestamps: false,
    });

    return Marca;
};