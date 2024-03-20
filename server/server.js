const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const cookie = require('cookie-parser')
const session = require('express-session')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(cookie())
app.use(session({
  secret: 'digital',
  saveUninitialized: true,
  resave: false,
}))

app.use('/', require('./routes/home'));
app.use('/api/usuarios', require('./routes/api/usuarios'))
