const Sequelize = require("sequelize");
const dburi = "mysql://" + process.env.DATABASE_USER  + ":" + process.env.DATABASE_PWD + "@" + process.env.DATABASE_SERVER + ":" + process.env.DATABASE_PORT + "/" + process.env.DATABASE_NAME;
const sequelize = new Sequelize(dburi, {dialect: "mysql"});

module.exports = sequelize;