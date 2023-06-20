var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var mongoose = require('mongoose')


// uri for mongoDB
var mongoDB = 'mongodb://127.0.0.1/autoRepair';

mongoose.connect(mongoDB, {useNewUrlParser: true , useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error....'))

db.once('open', () => {
    console.log('Conexão ao MongoDB')
})



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
