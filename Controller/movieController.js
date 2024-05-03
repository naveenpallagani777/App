// var express = require('express');
var fs = require('fs');

var movies = JSON.parse(fs.readFileSync('./Data/movies.json','utf-8'));

// get all the movies
module.exports.getAllMovies = (req,res) => {
    res.status(200).json({
        "status" : "success",
        "Data" : {
            "movies" : movies
        }
    })
}

// post a movie

module.exports.postMovie = (req,res) => {
    var newmovie = Object.assign({"id": movies[movies.length-1].id +1},req.body)
    movies.push(newmovie);
    fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
        res.status(201).json({
            "status" : "success",
            "Data" : {
                "movies" : movies
            }
        })
    });
}

// get a single movie by id

module.exports.addMovie = (req,res) => {
    var movie = movies.find(el => el.id === req.params.id*1);
    if(!movie){
        return res.status(404).json({
            "status" : "fail",
            "message" : "id number "+req.params.id+" is not present"
        })
    }

    res.status(200).json({
        "status" : "success",
        "Data" : {
            "movies" : movie
        }
    })
}

// patch to movie

module.exports.patchMovie = (req,res) => {
    var updatemovie = movies.find(el => el.id === req.params.id*1)
    if(!updatemovie){
        return res.status(404).json({
            "status" : "fail",
            "message" : "id number "+req.params.id+" is not present"
        })
    }
    var ind = movies.indexOf(updatemovie);
    movies[ind] = Object.assign(updatemovie,req.body);
    fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
        res.status(200).json({
            "status" : "success",
        "Data" : {
            "movies" : movies
        }
        })
    });

}

// delete a movie 

module.exports.deleteMovie = (req,res) => {
    var delmovie = movies.find(el => el.id === req.params.id*1);
    if(!delmovie){
        return res.status(404).json({
            "status" : "fail",
            "message" : "id number "+req.params.id+" is not present"
        })
    }
    var ind = movies.indexOf(delmovie);
    movies.splice(ind,1);
    fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err) => {
        res.status(200).json({
            "status" : "success",
        "Data" : {
            "movies" : movies
        }
        })
    });
}
