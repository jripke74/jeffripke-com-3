const path = require('path');

const express = require('express');

const app = express();

const mainRoutes = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(mainRoutes);

app.listen(3500);
