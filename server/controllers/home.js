const db = require('../database/models')
const ejs = require('ejs');
const path = require('path');

module.exports = {
  landing: (req, res) => {
    db.Redsocial.findAll()
      .then(result => {
        // Ruta al archivo EJS
        const filePath = path.join(__dirname, '../views/index.ejs');

        // Renderizar el archivo EJS con los datos
        ejs.renderFile(filePath, { data: result }, (err, html) => {
          if (err) {
            console.log(err);
            res.status(500).send('Error al procesar el archivo EJS');
          } else {
            console.log(result)
            res.send(html);
          }
        });
      })
      .catch(err => res.send(err));
  },
};