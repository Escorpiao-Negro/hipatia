const Sequelize = require("sequelize");
const database = require("../db");

const Book = database.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  author_name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  author_middle: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  author_surname: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  book_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  book_type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  book_language: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  book_file: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text_file: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Book;