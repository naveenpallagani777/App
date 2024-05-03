const Movie = require('../MongoModel/model');

module.exports.addmovie = (req,res)=>{
    const testmovie = new Movie.Movie({
        name:"navi",
        description:"good boy",
        duratuion:91,
        rating:4.0
    })
    testmovie.save();
    res.status(200).json({
        ststus : 'sucess',
        data : testmovie
    })
}