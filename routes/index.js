var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {skill1 : "HTML", skill2 : "CSS", skill3 : "JavaScript", skill4 : "Python", skill5 : "Nodejs", skill6 : "Django"});
});

module.exports = router;
