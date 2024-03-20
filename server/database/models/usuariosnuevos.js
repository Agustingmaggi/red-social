module.exports = (Sequelize, DataTypes) => {
    const alias = 'usuariosnuevos';
    const columns = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.STRING
        },
        mail: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        }
    };
    const config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'usuariosnuevos'
    };

    const UsuariosNuevos = Sequelize.define(alias, columns, config);

    return UsuariosNuevos;
};