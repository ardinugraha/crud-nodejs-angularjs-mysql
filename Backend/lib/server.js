'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let mahasiswaController = require('./controllers/mahasiswa_controller');
var fs = require('fs');



let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res, next) => {
  res.send('hellooooooooo world');
});


app.post('/', (req, res, next) => {
  res.send(req.body);
});

app.get('/mahasiswa', mahasiswaController.getAllMahasiswa);
app.get('/mahasiswa/:id', mahasiswaController.getMahasiswa);
app.post('/mahasiswa', mahasiswaController.saveMahasiswa);
app.put('/mahasiswa/:id', mahasiswaController.updateMahasiswa);
app.delete('/mahasiswa/:id', mahasiswaController.deleteMahasiswa);

module.exports = app;
