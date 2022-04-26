var express = require('express');
var router = express.Router();


router.post('/upload', function(req, res, next) {
  let text = "<ul>"
  Object.keys(req).map(item => {
    text += "<li>" + item + "</li>";
    return null;
  })
  text += "</ul>"
  res.send(text);
});

module.exports = router;
