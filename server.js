// var express = require('express');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:B5Kp27Up0AMo1vK8@cluster0.mk3wexz.mongodb.net/cineflix?retryWrites=true&w=majority&appName=Cluster0",
).then((conn) => {
    // console.log(conn);
    console.log('DB connect successful');
}).catch((error) => {
    console.log("something went worng");
})

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "movie is required"],
        unique : true
    },
    description : String,
    duratuion: {
        type: Number,
        required: [true,"movie duration is required"]
    },
    rating :{
        type: Number,
        default : 1
    }
})

const Movie =  mongoose.model('Movie',movieSchema);

const testmovie = new Movie({
    name:"praveen",
    description:"good boy some times",
    duratuion:90,
    rating:4.5
})

// testmovie.save().then((doc) => {
//     console.log(doc);
// })

app.listen('3000',() => {
    console.log('server is stared...');
    console.log('localhost:3000');
})

// console.log(app);