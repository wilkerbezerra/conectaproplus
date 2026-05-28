var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Rotas do curso de espetinho

router.get('/cursos/espetinho/aula/01', (req, res) => {
  res.render('cursos/espetinho/aula/01/index');
});

router.get('/cursos/espetinho/aula/02', (req, res) => {
  res.render('cursos/espetinho/aula/02/index');
});

router.get('/cursos/espetinho/aula/03', (req, res) => {
  res.render('cursos/espetinho/aula/03/index');
});

router.get('/cursos/espetinho/aula/04', (req, res) => {
  res.render('cursos/espetinho/aula/04/index');
});

router.get('/cursos/espetinho/aula/05', (req, res) => {
  res.render('cursos/espetinho/aula/05/index');
});


module.exports = router;
