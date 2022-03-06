const path = require('path');

const express = require('express');

const app = express();

const defaultRoutes = require('./routes/default');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(defaultRoutes);

app.listen(3500);
