const { findAllArtists } = require('../controllers/artist.controller');
const artistRouter = require('express').Router();

artistRouter.get('/', findAllArtists);

module.exports = artistRouter;
