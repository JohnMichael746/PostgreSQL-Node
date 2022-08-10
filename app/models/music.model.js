module.exports = (sequelize, Sequelize) => {
  const Music = sequelize.define("music", {
    title: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    release_date: {
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

  return Music;
};