module.exports = app => {
  const music = require("../controllers/music.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", music.create);

  // Retrieve all music
  router.get("/", music.findAll);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", music.findOne);

  // Update a Tutorial with id
  router.put("/:id", music.update);

  // Delete a Tutorial with id
  router.delete("/:id", music.delete);

  // Create a new Tutorial
  router.delete("/", music.deleteAll);

  app.use('/api/musics', router);
};