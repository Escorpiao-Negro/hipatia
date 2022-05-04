var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var webRouter = require("./routes/index");
var documentRouter = require("./routes/document");

var app = express();

require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", webRouter);
app.use("/api/document", documentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//index.js
(async () => {
  const database = require("./sequelize/db");
  const Book = require("./sequelize/models/books");
  const Text = require("./sequelize/models/texts");
  const Word = require("./sequelize/models/words");
  try {
    const resul = await database.sync();
    console.log(resul);
  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
