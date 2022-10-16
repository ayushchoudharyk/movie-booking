const {
  findAllMovies,
  findOne,
  findShows,
} = require('../controllers/movie.controller');

const movieRouter = require('express').Router();

movieRouter.get('/', findAllMovies);
movieRouter.get('/:id', findOne);
movieRouter.get('/:id/shows', findShows);

module.exports = movieRouter;
