const { Movie } = require('../MongoModel/model');

module.exports.addmovie = (req,res)=>{
    var testmovie = new Movie(req.body);
    testmovie.save();
    res.status(200).json({
        ststus : 'sucess',
        data : testmovie
    })
}

exports.getAllMovies = async (req,res) => {
    try{
        var movies = await Movie.find();
        res.status(200).json({
            status : 'sucess',
            data :{
                movies
            }
        })
    }
    catch(err){
        res.status(404).json({
            status : 'fail',
            error : err.message
        })
    }
    console.log(movies);
}