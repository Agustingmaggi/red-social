module.exports = (Sequelize, Datatypes) => {
    const alias = 'Redsocial' //aca le tenes que poner el nombre en singular y sequelize automaticamente le agrega una s para ponerlo en plural, o sea si tu tabla se llama movies, entonces aca tenes que ponerle movie. Este comentario continua en config table name
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Datatypes.INTEGER
        },
        nombre_usuario: {
            notNull: false,
            type: Datatypes.STRING
        },
        tweet: {
            notNull: false,
            type: Datatypes.STRING,
        },
    }
    const config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'usuarioss' //pero en la parte de arriba, en alias, le podes poner cualquier cosa y aca pones el nombre correcto y listo.
    }

    const redsoc = Sequelize.define(alias, cols, config)

    return redsoc
}