const express = require('express')

const multer = require('multer')
const multerConfig = require('../config/multer')

const router = express.Router()

router.post('/upload', multer(multerConfig).single('file'), function (
  req,
  res,
  next
) {
  const {
    author_name,
    author_middle,
    author_surname,
    book_title,
    book_type,
    book_language,
    book_file,
    file
  } = req.body
  res.render('upcomplete', {
    author: author_name + ' ' + author_middle + ' ' + author_surname,
    title: book_title,
    type: book_type,
    language: book_language,
    file: book_file
  })
})

module.exports = router
