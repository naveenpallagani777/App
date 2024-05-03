const express = require('express');
const control = require('../MongoController/controller');
var movieroutes = express.Router();

movieroutes.route('/').post(control.addmovie);

module.exports = movieroutes;