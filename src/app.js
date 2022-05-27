// immediately run connection and can call functions to affect database anywhere now - then need to pull in npm mongoose 
require ("./db/connection");
const mongoose = require ("mongoose");
const yargs = require ("yargs");
const { addMovie, deleteMovie, updateMovie, listMovies } = require("./movie/function");

const app = async (yargsObj) => {
    if (yargsObj.add){ 
        // add movie to database from yarg input
        await addMovie({title:yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.update){ 
        // update movie
        await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle})
        console.log("update success")
    } else if (yargsObj.delete){ 
        // delete movie
        await deleteMovie({title:yargsObj.title})
    } else if (yargsObj.list){
        await listMovies();
    }
    else { 
        console.log ("incorrect command")
    }
    await mongoose.disconnect();
};

app(yargs.argv);

// note to self - make sure file structure is correct - if env is not in root and is in src etc, connection will fail