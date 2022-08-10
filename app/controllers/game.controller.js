const db = require("../models");
const Game = db.game;
const Op = db.Sequelize.Op;

// Create and Save a new Game
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a game
  const game = {
    title: req.body.title,
    platform: req.body.platform,
    description: req.body.description,
    released_date: req.body.released_date,
    studio: req.body.studio,
    ean: req.body.ean,
    upc: req.body.upc,
    no_of_disc: req.body.no_of_disc,
    esrb: req.body.esrb,
    cover: req.body.cover,
    tags: req.body.tags,
    notes: req.body.notes,
    group: req.body.group
  };

  // Save game in the database
  Game.create(game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the game"
      });
    });
};

// Retrieve all games from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Game.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving games."
      });
    });
};

// Find a single game with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Game.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving game with id=" + id
      });
    });
};

// Update a game by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Game.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "game was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update game with id=${id}. Maybe game was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating game with id=" + id
      });
    });
};

// Delete a game with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Game.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "game was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete game with id=${id}. Maybe game was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete game with id=" + id
      });
    });
};

// Delete all games from the database.
exports.deleteAll = (req, res) => {
  Game.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} games were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all games."
      });
    });
};
