const express = require("express");

const fs = require("fs");
const PDFParser = require("pdf2json");

const multer = require("multer");
const multerConfig = require("../config/multer");
const { Console } = require("console");

const router = express.Router();

const ProcessLine = (page, line, text) => {};

router.post("/upload", multer(multerConfig).single("file"), function (
  req,
  res,
  next
) {
  next();
});

router.post("/upload", (req, res, next) => {
  const pdfFileName = "./tmp/uploads/" + req.body.book_file;
  const textFileName = "./tmp/text/" + req.body.book_file.split(".")[0] + ".text";

  req.body["book_file"] = pdfFileName;
  req.body["text_file"] = textFileName;

  console.log(req.body);

  const pdfParser = new PDFParser(this, 1);
  pdfParser.on("pdfParser_dataError", errData =>
    console.error(errData.parserError)
  );
  pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile(textFileName, pdfParser.getRawTextContent(), () => {
      next();
    });
  });
  pdfParser.loadPDF(pdfFileName);
});

router.post("/upload", (req,res,next) => {
  const {
    author_name,
    author_middle,
    author_surname,
    book_title,
    book_type,
    book_language,
    book_file,
    text_file
  } = req.body;

  fs.readFile(text_file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let arr = data.split("\r\n");
      arr = arr.filter(item => item !== "");
      arr = arr.filter(item => item !== " ");
      let re = /\s+$/;
      arr = arr.map(item => item.replace(re, ""));
      arr = arr.filter(item => item !== "");
      rePage = /Break\-+$/;
      let currPage = 1;
      let currLine = 0;
      arr.map((line, ind) => {
        if (line.match(rePage)) {
          currPage += 1;
          currLine = 0;
        } else {
          ProcessLine(currPage, currLine, line);
        }
      });
    }
  });

  res.render("upcomplete", {
    author: author_name + " " + author_middle + " " + author_surname,
    title: book_title,
    type: book_type,
    language: book_language,
    file: book_file
  });

});

module.exports = router;