var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Personal website' });
});

router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'My skills' });
});

module.exports = router;
