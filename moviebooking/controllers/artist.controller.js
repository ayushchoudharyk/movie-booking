const { Artist } = require("../models");


async function findAllArtists(req, res) {
    try {
      const results = await Artist.find();
      res.send(results);
    } catch (err) {
      res.status(500).send(err.message || "some internal error occurred");
    }
  }

  module.exports = {
    findAllArtists,
  };