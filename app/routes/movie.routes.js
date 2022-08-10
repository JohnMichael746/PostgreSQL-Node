module.exports = app => {
  const movie = require("../controllers/movie.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", movie.create);

  // Retrieve all movie
  router.get("/", movie.findAll);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", movie.findOne);

  // Update a Tutorial with id
  router.put("/:id", movie.update);

  // Delete a Tutorial with id
  router.delete("/:id", movie.delete);

  // Create a new Tutorial
  router.delete("/", movie.deleteAll);

  app.use('/api/movies', router);
};