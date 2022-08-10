const db = require("../models");
const Music = db.music;
const Op = db.Sequelize.Op;

// Create and Save a new music
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a music
  const music = {
    title: req.body.title,
    artist: req.body.artist,
    description: req.body.description,
    released_date: req.body.released_date,
    studio: req.body.studio,
    ean: req.body.ean,
    upc: req.body.upc,
    duration: req.body.duration,
    no_of_disc: req.body.no_of_disc,
    cover: req.body.cover,
    tags: req.body.tags,
    notes: req.body.notes,
    group: req.body.group,
  };

  // Save music in the database
  Music.create(music)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the music"
      });
    });
};

// Retrieve all musics from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Music.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving musics."
      });
    });
};

// Find a single music with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Music.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving music with id=" + id
      });
    });
};

// Update a music by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Music.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "music was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update music with id=${id}. Maybe music was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating music with id=" + id
      });
    });
};

// Delete a music with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Music.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "music was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete music with id=${id}. Maybe music was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete music with id=" + id
      });
    });
};

// Delete all musics from the database.
exports.deleteAll = (req, res) => {
  Music.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} musics were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all musics."
      });
    });
};
