const { Genre } = require("../models");


async function findAllGenres(req, res) {
    try {

      const results = await Genre.find();
      res.send(results);
    } catch (err) {
      res.status(500).send(err.message || "some internal error occurred");
    }
  }


  module.exports = {
    findAllGenres,
  };