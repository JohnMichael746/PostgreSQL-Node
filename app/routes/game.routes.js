module.exports = app => {
  const game = require("../controllers/game.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", game.create);

  // Retrieve all game
  router.get("/", game.findAll);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", game.findOne);

  // Update a Tutorial with id
  router.put("/:id", game.update);

  // Delete a Tutorial with id
  router.delete("/:id", game.delete);

  // Create a new Tutorial
  router.delete("/", game.deleteAll);

  app.use('/api/games', router);
};