const db_url = require('../config/db.config');
const mangoose = require('mongoose');
const db = {
    mangoose,
    url:db_url,
    Artist:require('./artist.model'),
    Genre:require('./genre.model'),
    User:require('./user.model'),
    Movie:require('./movie.model')
}

module.export = db;