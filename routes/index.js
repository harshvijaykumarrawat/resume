var express = require('express');
var router = express.Router();

const resume_json = require(__dirname+'/resume.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', resume_json);
});

module.exports = router;
