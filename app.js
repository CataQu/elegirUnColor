const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');

const express = require('express');
const app = express();

const mainRouter = require('./routes/mainRouter')

app.use(cookies());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({secret: 'secreto', resave: false, saveUninitialized: false}));


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/', mainRouter)

app.listen(process.env.PORT || 3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})