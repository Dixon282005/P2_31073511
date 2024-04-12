var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "Dixon", lastname : "Ramos", ci: "31073511", section: "2"});
});

module.exports = router;
