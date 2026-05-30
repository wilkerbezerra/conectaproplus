var express = require('express');
var router = express.Router();
const courses = require("../data/courses")

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('auth/login');
});

router.get('/cadastro', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('auth/cadastro');
});

router.get('/portal', function(req, res, next) {

  res.render('layouts/portal', {
    courses
  });

});

router.get('/logout', (req, res) => {

  req.session.destroy(() => {

    res.redirect('/');

  });

});

module.exports = router;
