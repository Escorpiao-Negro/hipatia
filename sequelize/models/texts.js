const Sequelize = require("sequelize");
const database = require("../db");

const Text = database.define("text", {
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
  line: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Text;