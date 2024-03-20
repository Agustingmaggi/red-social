const db = require('../../database/models');

const usuariosController = {
    list: (req, res) => {
        db.Redsocial.findAll()
            .then(result => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: result.length,
                        url: 'api/usuarios'
                    },
                    data: result
                });
            })
            .catch(error => {
                res.status(500).json({
                    meta: {
                        status: 500,
                        error: 'Internal Server Error'
                    },
                    error: error.message
                });
            });
    },
    mostrar: (req, res) => {
        const { tweet } = req.body;

        // Aquí puedes hacer lo que necesites con los datos recibidos
        console.log(`Tweet recibido: ${tweet}`);

        // Si deseas almacenar los datos en la base de datos, puedes hacerlo aquí

        res.status(200).json({
            meta: {
                status: 200,
                message: `El tweet se ha posteado con éxito! Dice: ${tweet}`
            },
            data: req.body
        });
    },
    createtwit: (req, res) => {
        let { tweet } = req.body;

        // Aquí puedes hacer lo que necesites con los datos recibidos
        console.log(`Tweet recibido: ${tweet}`);

        // Crear el registro en la base de datos
        db.Redsocial.create({
            nombre_usuario: "carlos",
            tweet: tweet
        })
            .then((result) => {
                // Registro creado exitosamente
                console.log('Tweet guardado en la base de datos:', result);

                const response = {
                    meta: {
                        status: 200,
                    },
                    data: req.body,
                    message: `El tweet se ha posteado con éxito! Dice: ${tweet}`
                };

                res.status(200).json(response);
            })
            .catch((error) => {
                // Error al crear el registro
                console.error('Error al guardar el tweet en la base de datos:', error);

                res.status(500).json({
                    meta: {
                        status: 500,
                        error: 'Internal Server Error'
                    },
                    error: error.message
                });
            });
    },
    createusuario: (req, res) => {
        const { nombre, email, password } = req.body;

        db.usuariosnuevos.create({
            nombre: nombre,
            mail: email,
            password: password
        })
            .then((nuevoUsuario) => {
                console.log('Usuario guardado en la base de datos:', nuevoUsuario);

                const response = {
                    meta: {
                        status: 200,
                    },
                    data: nuevoUsuario,
                    message: 'Usuario creado exitosamente'
                };

                res.status(200).json(response);
            })
            .catch((error) => {
                console.error('Error al guardar el usuario en la base de datos:', error);

                res.status(500).json({
                    meta: {
                        status: 500,
                        error: 'Error interno del servidor'
                    },
                    error: error.message
                });
            });
    },
};

module.exports = usuariosController;