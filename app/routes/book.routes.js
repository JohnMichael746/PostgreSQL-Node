module.exports = app => {
  const book = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", book.create);

  // Retrieve all book
  router.get("/", book.findAll);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", book.findOne);

  // Update a Tutorial with id
  router.put("/:id", book.update);

  // Delete a Tutorial with id
  router.delete("/:id", book.delete);

  // Create a new Tutorial
  router.delete("/", book.deleteAll);

  app.use('/api/books', router);
};