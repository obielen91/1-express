const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const User = require('./models/UserModel');

mongoose.connect('mongodb://127.0.0.1:27017/first-express');

const userController = require('./controllers/userController');

app.use('/files', express.static('public'));
app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/person', userController.index)

app.listen(7070, function() {
    console.log('Serwer Node.js działa');
})






