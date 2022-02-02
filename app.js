if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
const { config } = require('dotenv');
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log("Connected to the mongoose."));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
