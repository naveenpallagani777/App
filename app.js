const express = require('express');
const fs = require('fs');
const route = require('./Routes/routes');

var app = express();

// var movies = JSON.parse(fs.readFileSync('./Data/movies.json','utf-8'));

// middleware for body to req object

app.use(express.json());

var fun = (req,res,next) => {
    console.log(req.params.id);
    next();
};
app.use('/api/movies/:id',fun);
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

// type - 1

// app.get('/api/movies',getAllMovies);
// app.post('/api/movies',postMovie);
// app.get('/api/movies/:id',addMovie);
// app.patch('/api/movies/:id',patchMovie);
// app.delete('/api/movies/:id',deleteMovie);

// type - 2

// app.route('/api/movies')
//     .get(getAllMovies)
//     .post(postMovie);

// app.route('/api/movies/:id')
//     .get(addMovie)
//     .delete(deleteMovie)
//     .patch(patchMovie);

// type - 3

// var movieRoutes = express.Router()

// movieRoutes.route('/')
//     .get(getAllMovies)
//     .post(postMovie);

// movieRoutes.route('/:id')
//     .get(addMovie)
//     .delete(deleteMovie)
//     .patch(patchMovie);
// app.use('/api/movies', movieRoutes);

// type - 4

app.use('/api/movies', route);

// app.listen('3000',() => {
//     console.log('server is stared...');
// })

module.exports = app;