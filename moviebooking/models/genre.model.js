const mongoose = require('mongoose');

const genreSchema = mangoose.Schema({
    genreid:{
        type:Number,
        require:true
    },
    genre:{
        type:String,
        require:true
    }
});

module.exports = mangoose.model("genre",genreSchema);