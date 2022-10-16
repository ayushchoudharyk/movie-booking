const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieid:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    published:{
        type:Boolean,
        require:true
    },
    released :{
        type:Boolean,
        require:true
    },
    poster_url:{
        type:String
    },
    release_date:{
        type:Date,
        require:true
    },
    publish_date:{
        type:Date,
        require:true
    },
    artists:{
        type:[Object],

    },
    genres:[String],
    duration:Number,
    critic_rating:Number,
    trailer_url:String,
    shows:{
        type:[String],
        id:Number,
        theatre:Object,
        language:String,
        show_timing:Date,
        available_seats:Number,
        unit_price:Number
    }
});