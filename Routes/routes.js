// type - 4

var express = require('express');
var con = require('./../Controller/movieController');
// type -1 for controllers

// var fs = require('fs');
// var movies = JSON.parse(fs.readFileSync('./Data/movies.json','utf-8'));

// // get all the movies
// const getAllMovies = (req,res) => {
//     res.status(200).json({
//         "status" : "success",
//         "Data" : {
//             "movies" : movies
//         }
//     })
// }

// // post a movie

// const postMovie = (req,res) => {
//     var newmovie = Object.assign({"id": movies[movies.length-1].id +1},req.body)
//     movies.push(newmovie);
//     fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
//         res.status(201).json({
//             "status" : "success",
//             "Data" : {
//                 "movies" : movies
//             }
//         })
//     });
// }

// // get a single movie by id

// const addMovie = (req,res) => {
//     var movie = movies.find(el => el.id === req.params.id*1);
//     if(!movie){
//         return res.status(404).json({
//             "status" : "fail",
//             "message" : "id number "+req.params.id+" is not present"
//         })
//     }

//     res.status(200).json({
//         "status" : "success",
//         "Data" : {
//             "movies" : movie
//         }
//     })
// }

// // patch to movie

// const patchMovie = (req,res) => {
//     var updatemovie = movies.find(el => el.id === req.params.id*1)
//     if(!updatemovie){
//         return res.status(404).json({
//             "status" : "fail",
//             "message" : "id number "+req.params.id+" is not present"
//         })
//     }
//     var ind = movies.indexOf(updatemovie);
//     movies[ind] = Object.assign(updatemovie,req.body);
//     fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
//         res.status(200).json({
//             "status" : "success",
//         "Data" : {
//             "movies" : movies
//         }
//         })
//     });

// }

// // delete a movie 

// const deleteMovie = (req,res) => {
//     var delmovie = movies.find(el => el.id === req.params.id*1);
//     if(!delmovie){
//         return res.status(404).json({
//             "status" : "fail",
//             "message" : "id number "+req.params.id+" is not present"
//         })
//     }
//     var ind = movies.indexOf(delmovie);
//     movies.splice(ind,1);
//     fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
//         res.status(200).json({
//             "status" : "success",
//         "Data" : {
//             "movies" : movies
//         }
//         })
//     });
// }

var movieRoutes = express.Router()



movieRoutes.route('/')
    .get(con.getAllMovies)
    .post(con.postMovie);

movieRoutes.route('/:id')
    .get(con.addMovie)
    .delete(con.deleteMovie)
    .patch(con.patchMovie);
    
module.exports = movieRoutes;