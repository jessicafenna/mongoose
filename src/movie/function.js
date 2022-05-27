const Movie = require("./model");

exports.addMovie = async (movieObj) =>{ 
    try{ 
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch(error){ 
        console.log(error)
    }
}

// don't need to create new schema - already movie schema and you're working with that 


// this seems to work - but should it be findOneAndDelete?
exports.deleteMovie = async (movieObj) =>{ 
    try{ 
        const response = await Movie.deleteOne(movieObj);
        console.log(`${movieObj} was deleted`)
    } catch(error){ 
        console.log(error);
    }
}

exports.listMovies = async () => { 
    // list movies in collection 
    try{
        const response = await Movie.find();
        console.log(response)} catch (error){ 
        console.log(error)
    }
    
}

exports.updateMovie = async (movieObj) =>{ 
    // find a movie 
    try { 
        const response = await Movie.findOneAndUpdate({title: movieObj.title},{$set:{title: movieObj.newTitle}}, {new:true}, 
        );
        console.log(response);} catch (error){ 
        console.log(error)
    }
    // push something new to it 


}