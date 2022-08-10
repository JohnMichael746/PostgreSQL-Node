module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    publish_date: {
      type: Sequelize.DATEONLY
    },
    publisher: {
      type: Sequelize.STRING
    },
    ISBN13: {
      type: Sequelize.STRING
    },
    ISBN10: {
      type: Sequelize.STRING
    },
    pages: {
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

  return Book;
};