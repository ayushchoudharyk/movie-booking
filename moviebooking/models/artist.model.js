const mongoose = require('mongoose');
const artistSchema = mongoose.Schema({
    artistid:{
        type: Number,
        unique:true,
        require: true
    },
    first_name :{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    wiki_url:{
        type:String,
        unique:true,
    },
    profile_url:{
        type:String,
        unique:true,
    },    
    movies:[String]
});

module.exports = mongoose.model("artist",artistSchema);