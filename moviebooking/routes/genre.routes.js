const { findAllGenres } = require('../controllers/genre.controller');

const genreRouter = require('express').Router();

genreRouter.get('/', findAllGenres);

module.exports = genreRouter;
