module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("game", {
    title: {
      type: Sequelize.STRING
    },
    platform: {
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
    no_of_disc: {
      type: Sequelize.INTEGER
    },
    esrb: {
      type: Sequelize.STRING
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
    }
  });

  return Game;
};