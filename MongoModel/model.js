const mongoose = require('mongoose');

const movieschema = mongoose.Schema({
    name :{
        type : String,
        required : [true,"movie is required to insert"],
        unique : true
    },
    description : String,
    duratuion:{
        type : Number,
        required : [true,"movie is required to insert"]
    },
    rating : Number
})
module.exports.Movie = mongoose.model('Movie',movieschema);
