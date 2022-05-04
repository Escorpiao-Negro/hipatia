const Sequelize = require("sequelize");
const database = require("../db");

const Word = database.define("word", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  book_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  page: {
    type: Sequelize.INTEGER,
    allowNull: false 
  },
  lineno: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  word: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Word;