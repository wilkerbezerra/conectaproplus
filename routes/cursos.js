var express = require('express');
var router = express.Router();
const courses = require('../data/courses.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Rotas do curso de espetinho

router.get('/cursos/espetinho/aula/:numero', (req, res) => {

  const numero = req.params.numero;

  const course = courses.find(
    c => c.slug === 'espetinho'
  );

  if (!course) {
    return res.status(404).send('Curso não encontrado');
  }

  const lesson = course.lessons.find(
    l => l.number === numero
  );

  if (!lesson) {
    return res.status(404).send('Aula não encontrada');
  }

  res.render('layouts/course-lesson', {
  courseName: course.name,
  lessonNumber: lesson.number,
  lessonTitle: lesson.title,
  videoUrl: lesson.videoUrl,
  stylesheet: course.stylesheet,
  lessons: course.lessons
});

});


router.get('/cursos/geladinho-gourmet/aula/:numero', (req, res) => {

  const numero = req.params.numero;

  const course = courses.find(
    c => c.slug === 'geladinho-gourmet'
  );

  if (!course) {
    return res.status(404).send('Curso não encontrado');
  }

  const lesson = course.lessons.find(
    l => l.number === numero
  );

  if (!lesson) {
    return res.status(404).send('Aula não encontrada');
  }

  res.render('layouts/course-lesson', {
  courseName: course.name,
  lessonNumber: lesson.number,
  lessonTitle: lesson.title,
  videoUrl: lesson.videoUrl,
  stylesheet: course.stylesheet,
  lessons: course.lessons
});

});


router.get('/cursos/comunicacao-e-oratoria/aula/:numero', (req, res) => {

  const numero = req.params.numero;

  const course = courses.find(
    c => c.slug === 'comunicacao-e-oratoria'
  );

  if (!course) {
    return res.status(404).send('Curso não encontrado');
  }

  const lesson = course.lessons.find(
    l => l.number === numero
  );

  if (!lesson) {
    return res.status(404).send('Aula não encontrada');
  }

  res.render('layouts/course-lesson', {
  courseName: course.name,
  lessonNumber: lesson.number,
  lessonTitle: lesson.title,
  videoUrl: lesson.videoUrl,
  stylesheet: course.stylesheet,
  lessons: course.lessons
});

});

router.get('/cursos/informatica/aula/:numero', (req, res) => {

  const numero = req.params.numero;

  const course = courses.find(
    c => c.slug === 'informatica'
  );

  if (!course) {
    return res.status(404).send('Curso não encontrado');
  }

  const lesson = course.lessons.find(
    l => l.number === numero
  );

  if (!lesson) {
    return res.status(404).send('Aula não encontrada');
  }

  res.render('layouts/course-lesson', {
  courseName: course.name,
  lessonNumber: lesson.number,
  lessonTitle: lesson.title,
  videoUrl: lesson.videoUrl,
  stylesheet: course.stylesheet,
  lessons: course.lessons
});

});



module.exports = router;