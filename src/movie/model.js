const mongoose = require("mongoose");

// schemas - the instructions - data type what key value pairs we can have etc. use a schema and assing it to model 
// class construction
const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        unique: true, 
        required: true,
    },
    actor: { 
        type: String, 
        // if they don't input an actor:
        default: "Not specified"
},
});

// then give the schema to a model
const Movie = mongoose.model("Movie",movieSchema);

// can't use short hand export syntax on classes so export at bottom:
module.exports = Movie;
