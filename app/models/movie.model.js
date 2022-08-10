module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    title: {
      type: Sequelize.STRING
    },
    directors: {
      type: Sequelize.STRING
    },
    actors: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    released_date: {
      type: Sequelize.DATEONLY
    },
    studio: {
      type: Sequelize.STRING
    },
    ean: {
      type: Sequelize.STRING
    },
    upc: {
      type: Sequelize.STRING
    },
    aspect_ratio: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.INTEGER
    },
    no_of_disc: {
      type: Sequelize.INTEGER
    },
    cover: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    },
    notes: {
      type: Sequelize.TEXT
    },
    group: {
      type: Sequelize.STRING
    },
  });

  return Movie;
};