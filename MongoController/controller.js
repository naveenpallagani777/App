const Movie = require('../MongoModel/model');

module.exports.addmovie = (req,res)=>{
    var testmovie = new Movie.Movie(req.body);
    testmovie.save();
    res.status(200).json({
        ststus : 'sucess',
        data : testmovie
    })
}